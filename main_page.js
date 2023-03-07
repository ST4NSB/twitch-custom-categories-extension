async function main() {
  try {
    //const allRegisteredChannels = await getAllChannels();
    //const token = await getOAUTH2Token();
    //const liveChannels = await getLiveChannels(allRegisteredChannels, token);
    const channels = [
      {
        id: "40543496664",
        user_id: "48201326",
        user_login: "missmikkaa",
        user_name: "MissMikkaa",
        game_id: "512953",
        game_name: "ELDEN RING",
        type: "live",
        title:
          "LVL 1 NAKED & Only Club Run | @MissMikkaa on socials | NEW EMOTE mikkaaUwU",
        viewer_count: 2527,
        started_at: "2023-03-07T13:47:04Z",
        language: "en",
        thumbnail_url:
          "https://static-cdn.jtvnw.net/previews-ttv/live_user_missmikkaa-{width}x{height}.jpg",
        tag_ids: [],
        tags: [
          "ADHD",
          "Chatty",
          "Woman",
          "Interactive",
          "Girl",
          "Swedish",
          "Sweden",
          "English",
          "Challenge",
          "HardMode",
        ],
        is_mature: false,
        profile_image_url:
          "https://static-cdn.jtvnw.net/jtv_user_pictures/fc7b15b2-e400-4e74-8c8b-2ad3725e5770-profile_image-300x300.png",
      },
      {
        id: "48087320253",
        user_id: "26301881",
        user_login: "sodapoppin",
        user_name: "sodapoppin",
        game_id: "488190",
        game_name: "Poker",
        type: "live",
        title:
          "!acr Poker tournament time #ad and Elden Ring After| @ StarforgePCs | am dad",
        viewer_count: 12714,
        started_at: "2023-03-06T18:32:40Z",
        language: "en",
        thumbnail_url:
          "https://static-cdn.jtvnw.net/previews-ttv/live_user_sodapoppin-{width}x{height}.jpg",
        tag_ids: [],
        tags: ["Anime", "Vtuber", "Furry", "Veteran", "English"],
        is_mature: true,
        profile_image_url:
          "https://static-cdn.jtvnw.net/jtv_user_pictures/fc7b15b2-e400-4e74-8c8b-2ad3725e5770-profile_image-300x300.png",
      },
      {
        id: "48087320253",
        user_id: "26301881",
        user_login: "sodapoppin",
        user_name: "sodapoppin",
        game_id: "488190",
        game_name: "Poker",
        type: "live",
        title:
          "!acr Poker tournament time #ad and Elden Ring After| @ StarforgePCs | am dad",
        viewer_count: 12714,
        started_at: "2023-03-06T18:32:40Z",
        language: "en",
        thumbnail_url:
          "https://static-cdn.jtvnw.net/previews-ttv/live_user_sodapoppin-{width}x{height}.jpg",
        tag_ids: [],
        tags: ["Anime", "Vtuber", "Furry", "Veteran", "English"],
        is_mature: true,
        profile_image_url:
          "https://static-cdn.jtvnw.net/jtv_user_pictures/fc7b15b2-e400-4e74-8c8b-2ad3725e5770-profile_image-300x300.png",
      },
      {
        id: "48087320253",
        user_id: "26301881",
        user_login: "sodapoppin",
        user_name: "sodapoppin",
        game_id: "488190",
        game_name: "Poker",
        type: "live",
        title:
          "!acr Poker tournament time #ad and Elden Ring After| @ StarforgePCs | am dad",
        viewer_count: 12714,
        started_at: "2023-03-06T18:32:40Z",
        language: "en",
        thumbnail_url:
          "https://static-cdn.jtvnw.net/previews-ttv/live_user_sodapoppin-{width}x{height}.jpg",
        tag_ids: [],
        tags: ["Anime", "Vtuber", "Furry", "Veteran", "English"],
        is_mature: true,
        profile_image_url:
          "https://static-cdn.jtvnw.net/jtv_user_pictures/fc7b15b2-e400-4e74-8c8b-2ad3725e5770-profile_image-300x300.png",
      },
      {
        id: "48087320253",
        user_id: "26301881",
        user_login: "sodapoppin",
        user_name: "sodapoppin",
        game_id: "488190",
        game_name: "Poker",
        type: "live",
        title:
          "!acr Poker tournament time #ad and Elden Ring After| @ StarforgePCs | am dad",
        viewer_count: 12714,
        started_at: "2023-03-06T18:32:40Z",
        language: "en",
        thumbnail_url:
          "https://static-cdn.jtvnw.net/previews-ttv/live_user_sodapoppin-{width}x{height}.jpg",
        tag_ids: [],
        tags: ["Anime", "Vtuber", "Furry", "Veteran", "English"],
        is_mature: true,
        profile_image_url:
          "https://static-cdn.jtvnw.net/jtv_user_pictures/fc7b15b2-e400-4e74-8c8b-2ad3725e5770-profile_image-300x300.png",
      },
      {
        id: "48087320253",
        user_id: "26301881",
        user_login: "sodapoppin",
        user_name: "sodapoppin",
        game_id: "488190",
        game_name: "Poker",
        type: "live",
        title:
          "!acr Poker tournament time #ad and Elden Ring After| @ StarforgePCs | am dad",
        viewer_count: 12714,
        started_at: "2023-03-06T18:32:40Z",
        language: "en",
        thumbnail_url:
          "https://static-cdn.jtvnw.net/previews-ttv/live_user_sodapoppin-{width}x{height}.jpg",
        tag_ids: [],
        tags: ["Anime", "Vtuber", "Furry", "Veteran", "English"],
        is_mature: true,
        profile_image_url:
          "https://static-cdn.jtvnw.net/jtv_user_pictures/fc7b15b2-e400-4e74-8c8b-2ad3725e5770-profile_image-300x300.png",
      },
    ];
    renderCategoryChannels("TEST", channels);
    renderCategoryChannels("Cat2", channels);

    renderDeleteCategoryButton();
    renderAddCategoryButton();
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

window.onload = function () {
  main();
};
