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

window.onload = function () {
  main();
};
