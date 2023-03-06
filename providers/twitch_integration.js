const tokenUri = "https://id.twitch.tv/oauth2/token";
const liveChannelsUri = "https://api.twitch.tv/helix/streams";
const usersDetailsUri = "https://api.twitch.tv/helix/users";

// -----------------------------------------------------------------------

async function getEnvironmentVariables() {
  const response = await fetch(browser.runtime.getURL(".env"));
  const text = await response.text();
  const env = Object.fromEntries(
    text.split("\r\n").map((line) => line.split("="))
  );
  return {
    CLIENT_ID: env.CLIENT_ID,
    CLIENT_SECRET: env.CLIENT_SECRET,
  };
}

async function getOAUTH2Token() {
  const env = await getEnvironmentVariables();

  const params = new URLSearchParams();
  params.append("client_id", env.CLIENT_ID);
  params.append("client_secret", env.CLIENT_SECRET);
  params.append("grant_type", "client_credentials");

  const response = await fetch(tokenUri, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });

  const data = await response.json();
  return data.access_token;
}

async function getLiveChannels(channels, token) {
  if (!channels || channels.length === 0) {
    return [];
  }

  const env = await getEnvironmentVariables();
  const queryString = channels
    .map((name) => `user_login=${encodeURIComponent(name)}`)
    .join("&");

  const response = await fetch(`${liveChannelsUri}?${queryString}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Client-Id": env.CLIENT_ID,
    },
  });

  const data = await response.json();
  return data.data;
}

async function getChannelsAvatar(channels, token) {
  if (!channels || channels.length === 0) {
    return [];
  }

  const env = await getEnvironmentVariables();
  const queryString = channels
    .map((name) => `login=${encodeURIComponent(name)}`)
    .join("&");

  const response = await fetch(`${liveChannelsUri}?${queryString}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Client-Id": env.CLIENT_ID,
    },
  });

  const data = await response.json();
  return data.data;
}
