async function main() {
  try {
    console.log("Twitch Custom Categories - main_page.js - main()");

    if (!localStorage.getItem("twitchCustomCategoriesFirstLoad")) {
      // Clear data and initialize categories
      await clearDataOnFirstLoad();
      console.log(
        "Twitch Custom Categories - main_page.js - main() - First load, clearing data and initializing categories"
      );
      await loadCategoriesFromFile();
    }

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
