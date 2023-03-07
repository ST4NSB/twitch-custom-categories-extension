async function main() {
  try {
    createMutationObserver();

    renderDebugButtonAndEventListeners();
    renderDeleteCategoryButtonAndEventListeners();
    renderAddCategoryButtonAndEventListeners();

    renderDeleteChannelFromCategoryButtonAndEventListeners();
    renderAddChannelToCategoryButtonAndEventListeners();
  } catch (err) {
    const msg = `Twitch Custom Categories - main_page.js - ${err}`;
    console.log(msg);
  }
}

window.onload = function () {
  main();
};
