async function main() {
  try {
    renderDebugButtonAndEventListeners();
    renderDeleteCategoryButton();
    renderAddCategoryButton();

    const liveChannelsInEveryCategory = await getLiveChannelsInEveryCategory();
    for (let category in liveChannelsInEveryCategory) {
      console.log(category);
      if (liveChannelsInEveryCategory[category].length === 0) {
        continue;
      }
      renderCategoryChannels(category, liveChannelsInEveryCategory[category]);
    }

    const addCategoryButtonId = document.getElementById("addCustomCategory");
    const deleteCategoryButtonId = document.getElementById(
      "deleteCustomCategory"
    );
    const showMoreButtonsClass = document.querySelectorAll(
      "button.showMoreBttn"
    );
    showMoreButtonsClass.forEach((button) => {
      button.addEventListener("click", showMoreEvent);
    });

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

      await addCategory(category);
      console.log(
        "Twitch Custom Categories - storage categories:",
        await getCategories()
      );
    });
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
        await deleteCategory(category);
      }

      console.log(
        "Twitch Custom Categories - storage categories:",
        await getCategories()
      );
    });
  } catch (err) {
    const msg = `Twitch Custom Categories - main_page.js - ${err}`;
    console.log(msg);
    alert(msg);
  }
}

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

window.onload = function () {
  main();
};
