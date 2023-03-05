async function getCategories() {
  const data = await browser.storage.local.get("categories");
  return data.categories || [];
}

async function addCategory(category) {
  const categories = await getCategories();
  const allCategories = [...categories, category];
  browser.storage.local.set({ categories: allCategories }, function () {});
}

async function doesCategoryExist(category) {
  const categories = await getCategories();
  if (categories.includes(category)) {
    return true;
  }

  return false;
}

async function deleteCategory(category) {
  const categories = await getCategories();
  const categoriesLeft = categories.filter((x) => x !== category);
  browser.storage.local.set({ categories: categoriesLeft }, function () {});
  browser.storage.local.remove([category], function () {});
}

// -----------------------------------------------------------------------

async function getChannelsInCategory(category) {
  const data = await browser.storage.local.get([category]);
  return data[category] || [];
}

async function addChannelToCategory(channel, category) {
  const channels = await getChannelsInCategory(category);
  const allChannels = [...channels, channel];
  browser.storage.local.set({ [category]: allChannels }, function () {});
}

async function isChannelInCategory(channel, category) {
  const channels = await getChannelsInCategory(category);
  if (channels.includes(channel)) {
    return true;
  }

  return false;
}

async function deleteChannel(channel, category) {
  const channels = await getChannelsInCategory(category);
  const channelsLeft = channels.filter((x) => x !== channel);
  browser.storage.local.set({ [category]: channelsLeft }, function () {});
}
