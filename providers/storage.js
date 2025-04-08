const isFirefox =
  typeof browser !== "undefined" && typeof browser.storage !== "undefined";
const storage = {
  get: (keys) => {
    return isFirefox
      ? browser.storage.local.get(keys)
      : new Promise((resolve, reject) => {
          chrome.storage.local.get(keys, (result) => {
            if (chrome.runtime.lastError) reject(chrome.runtime.lastError);
            else resolve(result);
          });
        });
  },

  set: (items) => {
    return isFirefox
      ? browser.storage.local.set(items)
      : new Promise((resolve, reject) => {
          chrome.storage.local.set(items, () => {
            if (chrome.runtime.lastError) reject(chrome.runtime.lastError);
            else resolve();
          });
        });
  },

  remove: (keys) => {
    return isFirefox
      ? browser.storage.local.remove(keys)
      : new Promise((resolve, reject) => {
          chrome.storage.local.remove(keys, () => {
            if (chrome.runtime.lastError) reject(chrome.runtime.lastError);
            else resolve();
          });
        });
  },
};

async function getCategories() {
  const result = await storage.get("categories");
  return result.categories || [];
}

async function moveCategoryToFront(category) {
  const categories = await getCategories();
  const filteredCategories = categories.filter((x) => x !== category);
  const newOrderCategories = [category, ...filteredCategories];
  await storage.set({ categories: newOrderCategories });
}

async function doesCategoryExist(category) {
  const categories = await getCategories();
  return categories.includes(category);
}

async function addCategory(category) {
  const catExist = await doesCategoryExist(category);
  if (catExist) return;

  const categories = await getCategories();
  const allCategories = [...categories, category];
  await storage.set({ categories: allCategories });
}

async function deleteCategory(category) {
  const catExist = await doesCategoryExist(category);
  if (!catExist) return;

  const categories = await getCategories();
  const categoriesLeft = categories.filter((x) => x !== category);
  await storage.set({ categories: categoriesLeft });
  await storage.remove(category);
}

async function getChannelsInCategory(category) {
  const result = await storage.get(category);
  return result[category] || [];
}

async function isChannelInCategory(channel, category) {
  const channels = await getChannelsInCategory(category);
  return channels.includes(channel);
}

async function addChannelToCategory(channel, category) {
  const channelInCat = await isChannelInCategory(channel, category);
  if (channelInCat) return;

  const channels = await getChannelsInCategory(category);
  const allChannels = [...channels, channel];
  await storage.set({ [category]: allChannels });
}

async function deleteChannel(channel, category) {
  const channelInCat = await isChannelInCategory(channel, category);
  if (!channelInCat) return;

  const channels = await getChannelsInCategory(category);
  const channelsLeft = channels.filter((x) => x !== channel);
  await storage.set({ [category]: channelsLeft });
}

async function getAllChannels() {
  let allChannels = [];
  const categories = await getCategories();

  for (const category of categories) {
    const channels = await getChannelsInCategory(category);
    allChannels = [...allChannels, ...channels];
  }

  return [...new Set(allChannels)];
}

async function getCategoriesContainingChannel(channel) {
  const categories = await getCategories();
  let assignedCategories = [];

  for (const category of categories) {
    const channelsForCategory = await getChannelsInCategory(category);
    if (channelsForCategory.includes(channel)) {
      assignedCategories.push(category);
    }
  }

  return assignedCategories;
}

async function renameCategory(oldCategory, newCategory) {
  const channels = await getChannelsInCategory(oldCategory);
  await deleteCategory(oldCategory);
  await addCategory(newCategory);

  for (const channel of channels) {
    await addChannelToCategory(channel, newCategory);
  }
}
