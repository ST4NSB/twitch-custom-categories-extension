
fetch(chrome.runtime.getURL('.env'))
  .then(response => response.text())
  .then(text => {
    const env = Object.fromEntries(
      text.split('\n').map(line => line.split('='))
    );
    console.log("environment vars: ", env);
});