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
