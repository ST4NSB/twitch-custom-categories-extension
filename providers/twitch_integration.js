const tokenUri = "https://id.twitch.tv/oauth2/token";
const liveChannelsUri = "https://api.twitch.tv/helix/streams";
const usersDetailsUri = "https://api.twitch.tv/helix/users";

// -----------------------------------------------------------------------

async function getEnvironmentVariables() {
  const response = await fetch(chrome.runtime.getURL(".env"));
  const text = await response.text();
  const env = Object.fromEntries(
    text.split("\r\n").map((line) => line.split("="))
  );
  return {
    CLIENT_ID: env.CLIENT_ID,
    CLIENT_SECRET: env.CLIENT_SECRET,
  };
}

async function getAuthToken(env) {
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

async function getChannelsDetails(
  apiAddress,
  queryStringParameter,
  channels,
  token,
  env
) {
  if (!channels || channels.length === 0) {
    return [];
  }

  const queryString = channels
    .map(
      (name) =>
        `${queryStringParameter}=${encodeURIComponent(name.replace(/\s/g, ""))}`
    )
    .join("&");

  const response = await fetch(`${apiAddress}?${queryString}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Client-Id": env.CLIENT_ID,
    },
  });

  const data = await response.json();
  return data.data;
}

// -----------------------------------------------------------------------

function splitChannelsInBuckets(channels, bucketMaxSize = 100) {
  if (!channels || channels.length === 0) {
    return [];
  }

  let buckets = [];
  for (let i = 0; i < channels.length; i += bucketMaxSize) {
    let chunk = channels.slice(i, i + bucketMaxSize);
    buckets.push(chunk);
  }
  return buckets;
}

async function getFullDetailsLiveChannels(allRegisteredChannels) {
  const channelBuckets = splitChannelsInBuckets(allRegisteredChannels);
  let liveChannels = [];
  let channelsDetails = [];

  const env = await getEnvironmentVariables();
  const token = await getAuthToken(env);

  for (let i = 0; i < channelBuckets.length; i++) {
    let bucketLiveChannels = await getChannelsDetails(
      liveChannelsUri,
      "user_login",
      channelBuckets[i],
      token,
      env
    );
    let bucketChannelsDetails = await getChannelsDetails(
      usersDetailsUri,
      "login",
      channelBuckets[i],
      token,
      env
    );

    liveChannels = [...liveChannels, ...bucketLiveChannels];
    channelsDetails = [...channelsDetails, ...bucketChannelsDetails];
  }

  const liveChannelsDict = {};
  for (let i = 0; i < liveChannels.length; i++) {
    for (let j = 0; j < channelsDetails.length; j++) {
      if (liveChannels[i].user_login === channelsDetails[j].login) {
        let profileImage = channelsDetails[j].profile_image_url;
        let liveChannelData = {
          ...liveChannels[i],
          profile_image_url: profileImage,
        };
        liveChannelsDict[liveChannelData.user_name] = liveChannelData;
        break;
      }
    }
  }

  return liveChannelsDict;
}
