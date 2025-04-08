async function main() {
  try {
    createMutationObserver();

    renderDebugButtonAndEventListeners();
    renderDeleteChannelFromCategoryButtonAndEventListeners();
    renderAddChannelToCategoryButtonAndEventListeners();

    renderDeleteCategoryButtonAndEventListeners();
    renderAddCategoryButtonAndEventListeners();
  } catch (err) {
    const msg = `Twitch Custom Categories - channel.js - ${err}`;
    console.log(msg);
  }
}

if (typeof InstallTrigger !== "undefined") {
  console.log("Twitch Custom Categories - channel.js - Firefox detected");

  main();
} else if (typeof chrome !== "undefined") {
  console.log("Twitch Custom Categories - channel.js - Chrome detected");

  window.onload = function () {
    main();
  };
}
