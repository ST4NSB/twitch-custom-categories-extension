async function main() {
  try {
    deleteCategorryButton();
    addCategoryButton();
    const addCategoryButtonId = document.getElementById("addCustomCategory");
    const deleteCategoryButtonId = document.getElementById(
      "deleteCustomCategory"
    );

    addCategoryButtonId.addEventListener("click", async function () {
      const category = prompt(
        "Please enter a custom category name:",
        ""
      ).trim();
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
        "Delete a category by typing the numbers splitted by comma ',': \n";

      for (let i = 0; i < allCategories.length; i++) {
        promptMessage += `${i}: ${allCategories[i]} \n`;
        categoriesDictionary[i] = allCategories[i];
      }

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
