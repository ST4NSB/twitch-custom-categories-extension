async function main() {
  try {
    //const allRegisteredChannels = await getAllChannels();
    //const token = await getOAUTH2Token();
    //const liveChannels = await getLiveChannels(allRegisteredChannels, token);
    const liveChannels = [];
    //renderCategoryChannels(liveChannels);

    // chrome.storage.local.set({ exampleKey: "exampleValue" }, function () {
    //   console.log('Value of exampleKey set to "exampleValue"');
    // });

    // // Get the value of the 'exampleKey' key
    // chrome.storage.local.get("exampleKey", function (result) {
    //   console.log("Value of exampleKey is:", result.exampleKey);
    // });

    //console.log("da, ", await getData());

    renderDeleteCategoryButton();
    renderAddCategoryButton();
    const addCategoryButtonId = document.getElementById("addCustomCategory");
    const deleteCategoryButtonId = document.getElementById(
      "deleteCustomCategory"
    );

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

main();
