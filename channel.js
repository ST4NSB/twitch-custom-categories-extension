async function main() {
  try {
    renderDeleteChannelFromCategoryButton();
    renderAddChannelToCategoryButton();
    const addChannelToCategoryButtonId = document.getElementById(
      "addChannelToCategory"
    );
    const deleteChannelToCategoryButtonId = document.getElementById(
      "deleteChannelFromCategory"
    );

    addChannelToCategoryButtonId.addEventListener("click", async function () {
      const allCategories = await getCategories();
      if (allCategories.length === 0) {
        alert("There are NO existing categories! Add a category first!");
        return;
      }

      let channelName = document.querySelector(
        "h1.CoreText-sc-1txzju1-0"
      ).innerHTML;

      let categoriesDictionary = {};
      let promptMessage =
        "Add this channel to a category by typing the numbers splitted by commas ','\nExisting categories:\n\n";

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
        await addChannelToCategory(channelName, category);
        console.log(
          `Twitch Custom Categories - all users in category ${category}: `,
          await getChannelsInCategory(category)
        );
      }
    });

    deleteChannelToCategoryButtonId.addEventListener(
      "click",
      async function () {
        let channelName = document.querySelector(
          "h1.CoreText-sc-1txzju1-0"
        ).innerHTML;

        const allCategories = await getCategoriesContainingChannel(channelName);
        if (allCategories.length === 0) {
          alert(
            "There are NO existing categories for this channel! Add a category first!"
          );
          return;
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
  } catch (err) {
    const msg = `Twitch Custom Categories - channel.js - ${err}`;
    console.log(msg);
    alert(msg);
  }
}

main();
