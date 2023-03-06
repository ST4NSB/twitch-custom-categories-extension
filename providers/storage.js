async function getCategories() {
  const data = await browser.storage.local.get("categories");
  return data.categories || [];
}

async function doesCategoryExist(category) {
  const categories = await getCategories();
  if (categories.includes(category)) {
    return true;
  }

  return false;
}

async function addCategory(category) {
  const catExist = await doesCategoryExist(category);
  if (catExist) {
    return;
  }

  const categories = await getCategories();
  const allCategories = [...categories, category];
  browser.storage.local.set({ categories: allCategories }, function () {});
}

async function deleteCategory(category) {
  const catExist = await doesCategoryExist(category);
  if (!catExist) {
    return;
  }

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

async function isChannelInCategory(channel, category) {
  const channels = await getChannelsInCategory(category);
  if (channels.includes(channel)) {
    return true;
  }

  return false;
}

async function addChannelToCategory(channel, category) {
  const channelInCat = await isChannelInCategory(channel, category);
  if (channelInCat) {
    return;
  }

  const channels = await getChannelsInCategory(category);
  const allChannels = [...channels, channel];
  browser.storage.local.set({ [category]: allChannels }, function () {});
}

async function deleteChannel(channel, category) {
  const channelInCat = await isChannelInCategory(channel, category);
  if (!channelInCat) {
    return;
  }

  const channels = await getChannelsInCategory(category);
  const channelsLeft = channels.filter((x) => x !== channel);
  browser.storage.local.set({ [category]: channelsLeft }, function () {});
}

// -----------------------------------------------------------------------

async function getAllChannels() {
  let allChannels = [];
  const categories = await getCategories();

  for (let i = 0; i < categories.length; i++) {
    let channels = await getChannelsInCategory(categories[i]);
    allChannels = [...allChannels, ...channels];
  }

  return [...new Set([...allChannels])];
}

async function getCategoriesContainingChannel(channel) {
  const categories = await getCategories();
  let assignedCategories = [];

  for (let i = 0; i < categories.length; i++) {
    let channelsForCategory = await getChannelsInCategory(categories[i]);
    if (channelsForCategory.includes(channel)) {
      assignedCategories = [...assignedCategories, categories[i]];
    }
  }

  return assignedCategories;
}
