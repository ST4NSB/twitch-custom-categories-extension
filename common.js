let oldPageUrl = "";
const mainPagePath = "/directory/following";

// -----------------------------------------------------------------------

async function getLiveChannelsInEveryCategory() {
  const allRegisteredChannels = await getAllChannels();
  const liveChannels = await getFullDetailsLiveChannels(allRegisteredChannels);
  const categories = await getCategories();

  let formattedData = {};
  for (let c = 0; c < categories.length; c++) {
    let category = categories[c];
    formattedData = { ...formattedData, [category]: [] };

    let registeredChannelsForCategory = await getChannelsInCategory(category);
    for (let i = 0; i < registeredChannelsForCategory.length; i++) {
      let channelName = registeredChannelsForCategory[i];
      let liveChannelData = liveChannels[channelName];
      if (liveChannelData) {
        formattedData[category] = [...formattedData[category], liveChannelData];
      }
    }
  }

  for (let category in formattedData) {
    formattedData[category].sort((a, b) => b.viewer_count - a.viewer_count);
  }

  const reversedKeys = Object.keys(formattedData).reverse();
  const reversedObj = {};
  for (const key of reversedKeys) {
    reversedObj[key] = formattedData[key];
  }

  return reversedObj;
}

async function renderLiveChannels() {
  const liveChannelsInEveryCategory = await getLiveChannelsInEveryCategory();
  for (let category in liveChannelsInEveryCategory) {
    if (liveChannelsInEveryCategory[category].length === 0) {
      continue;
    }
    renderCategoryChannels(category, liveChannelsInEveryCategory[category]);
  }

  const showMoreButtonsClass = document.querySelectorAll("button.showMoreBttn");
  showMoreButtonsClass.forEach((button) => {
    button.addEventListener("click", showMoreEvent);
  });

  const renameButtonsClass = document.querySelectorAll("button.renameButton");
  renameButtonsClass.forEach((button) => {
    button.addEventListener("click", renameEvent);
  });

  const moveToTopButtonsClass = document.querySelectorAll(
    "button.moveToTopButton"
  );
  moveToTopButtonsClass.forEach((button) => {
    button.addEventListener("click", moveCategoryToTopEvent);
  });
}

function renderDebugButtonAndEventListeners() {
  renderDebugButton();

  const debugButtonId = document.getElementById("debugButton");
  debugButtonId.addEventListener("click", async function () {
    const allCategories = await getCategories();
    if (allCategories.length === 0) {
      alert("No existing categories!");
    }
    let debugMessage = `Debug Twitch Custom Categories:\nShowing all categories with all registered channels in storage!\n\n`;

    for (let i = 0; i < allCategories.length; i++) {
      let category = allCategories[i];
      let channels = await getChannelsInCategory(category);
      debugMessage += ` - ${category} channels: [${channels.join(", ")}]\n`;
    }

    console.log(debugMessage);
    alert(debugMessage);
  });
}

function renderAddCategoryButtonAndEventListeners() {
  renderAddCategoryButton();
  const addCategoryButtonId = document.getElementById("addCustomCategory");
  addCategoryButtonId.addEventListener("click", async function () {
    const allCategories = await getCategories();
    let promptMessage = "";
    if (allCategories.length !== 0) {
      promptMessage += "Existing Categories: \n\n";
      for (let i = 0; i < allCategories.length; i++) {
        promptMessage += `${i}: ${allCategories[i]}\n`;
      }
      promptMessage += "\n";
    }
    promptMessage += "Please enter a custom category name: \n";

    const category = prompt(promptMessage, "").trim();
    if (!category || category === "") {
      throw new Error("Invalid category name!");
    }

    if (category.includes("_")) {
      return alert(
        "Invalid character included in category creation! (Used: '_')"
      );
    }

    await addCategory(category);
    console.log(
      "Twitch Custom Categories - storage categories:",
      await getCategories()
    );
  });
}

function renderDeleteCategoryButtonAndEventListeners() {
  renderDeleteCategoryButton();
  const deleteCategoryButtonId = document.getElementById(
    "deleteCustomCategory"
  );
  deleteCategoryButtonId.addEventListener("click", async function () {
    const allCategories = await getCategories();
    if (allCategories.length === 0) {
      alert("There are NO existing categories!");
      return;
    }

    let categoriesDictionary = {};
    let promptMessage =
      "Delete a category by typing the numbers splitted by commas ',': \n\n";

    for (let i = 0; i < allCategories.length; i++) {
      promptMessage += `${i}: ${allCategories[i]} \n`;
      categoriesDictionary[i] = allCategories[i];
    }
    promptMessage += "\n";

    const categories = prompt(promptMessage, "").trim().split(",").map(Number);
    if (!categories || categories === "") {
      throw new Error("Invalid categories!");
    }

    for (let i = 0; i < categories.length; i++) {
      let number = categories[i];
      let category = categoriesDictionary[number];
      await deleteCategory(category);
    }

    console.log(
      "Twitch Custom Categories - storage categories:",
      await getCategories()
    );
  });
}

function renderDeleteChannelFromCategoryButtonAndEventListeners() {
  renderDeleteChannelFromCategoryButton();

  const deleteChannelFromCategoryButtonId = document.getElementById(
    "deleteChannelFromCategory"
  );
  deleteChannelFromCategoryButtonId.addEventListener(
    "click",
    async function () {
      let channelName =
        document.querySelector(
          "h1.CoreText-sc-1txzju1-0.InjectLayout-sc-1i43xsx-0.tNDkq" // live channel
        )?.innerHTML ||
        document.querySelector(
          "h1.CoreText-sc-1txzju1-0.ScTitleText-sc-d9mj2s-0.hhBVsV.igzOaC" // offline channel
        )?.innerHTML;

      if (!channelName) {
        return alert(
          "Couldn't find this channel's username, please access a channel at twitch.tv/{channel_name}"
        );
      }

      const allCategories = await getCategoriesContainingChannel(channelName);
      if (allCategories.length === 0) {
        return alert(
          "There are NO existing categories for this channel! Add a category first!"
        );
      }

      let categoriesDictionary = {};
      let promptMessage =
        "Delete this channel from a category from below by typing the numbers splitted by commas ',': \n\n";

      for (let i = 0; i < allCategories.length; i++) {
        promptMessage += `${i}: ${allCategories[i]} \n`;
        categoriesDictionary[i] = allCategories[i];
      }
      promptMessage += "\n";

      const categories = prompt(promptMessage, "")
        .trim()
        .split(",")
        .map(Number);
      if (!categories || categories === "") {
        throw new Error("Invalid categories!");
      }

      for (let i = 0; i < categories.length; i++) {
        let number = categories[i];
        let category = categoriesDictionary[number];
        await deleteChannel(channelName, category);
        console.log(
          `Twitch Custom Categories - all users in category ${category}: `,
          await getChannelsInCategory(category)
        );
      }
    }
  );
}

function renderAddChannelToCategoryButtonAndEventListeners() {
  renderAddChannelToCategoryButton();
  const addChannelToCategoryButtonId = document.getElementById(
    "addChannelToCategory"
  );
  addChannelToCategoryButtonId.addEventListener("click", async function () {
    let channelName =
      document.querySelector(
        "h1.CoreText-sc-1txzju1-0.InjectLayout-sc-1i43xsx-0.tNDkq" // live channel
      )?.innerHTML ||
      document.querySelector(
        "h1.CoreText-sc-1txzju1-0.ScTitleText-sc-d9mj2s-0.hhBVsV.igzOaC" // offline channel
      )?.innerHTML;

    if (!channelName) {
      return alert(
        "Couldn't find this channel's username, please access a channel at twitch.tv/{channel_name}"
      );
    }
    const allCategories = await getCategories();
    if (allCategories.length === 0) {
      return alert("There are NO existing categories! Add a category first!");
    }

    let categoriesDictionary = {};
    let promptMessage =
      "Add this channel to a category by typing the numbers splitted by commas ','\nExisting categories:\n\n";

    for (let i = 0; i < allCategories.length; i++) {
      promptMessage += `${i}: ${allCategories[i]} \n`;
      categoriesDictionary[i] = allCategories[i];
    }
    promptMessage += "\n";

    const categories = prompt(promptMessage, "").trim().split(",").map(Number);
    if (!categories || categories === "") {
      throw new Error("Invalid categories!");
    }

    for (let i = 0; i < categories.length; i++) {
      let number = categories[i];
      let category = categoriesDictionary[number];
      await addChannelToCategory(channelName, category);
      console.log(
        `Twitch Custom Categories - all users in category ${category}: `,
        await getChannelsInCategory(category)
      );
    }
  });
}

async function showContentBasedOnPage(currentPageUrl) {
  if (currentPageUrl.endsWith(mainPagePath)) {
    document.querySelector("#addCustomCategory").style.display = "block";
    document.querySelector("#deleteCustomCategory").style.display = "block";
    document.querySelector("#addChannelToCategory").style.display = "none";
    document.querySelector("#deleteChannelFromCategory").style.display = "none";

    await renderLiveChannels();
  } else {
    document.querySelector("#addCustomCategory").style.display = "none";
    document.querySelector("#deleteCustomCategory").style.display = "none";
    document.querySelector("#addChannelToCategory").style.display = "block";
    document.querySelector("#deleteChannelFromCategory").style.display =
      "block";
  }
}

function createMutationObserver() {
  const observer = new MutationObserver(async (mutationsList, observer) => {
    const currentPageUrl = window.location.href;
    if (oldPageUrl !== currentPageUrl) {
      oldPageUrl = currentPageUrl;
      await showContentBasedOnPage(currentPageUrl);
    }
  });

  const observerConfig = {
    childList: true,
    subtree: true,
  };

  observer.observe(document.documentElement, observerConfig);
}
