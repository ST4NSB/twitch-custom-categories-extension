// fetch(chrome.runtime.getURL(".env"))
//   .then((response) => response.text())
//   .then((text) => {
//     const env = Object.fromEntries(
//       text.split("\r\n").map((line) => line.split("="))
//     );
//     console.log("environment vars: ", env);
//   });

async function main() {
  await deleteCategory("test");
  await deleteChannel("xqc", "test");
  //await addCategory("test");

  //await addChannelToCategory("xqc", "test");

  console.log("categories:", await getCategories());
  console.log("channels in categories: ", await getChannelsInCategory("test"));

  console.log("does category exist: ", await doesCategoryExist("test"));
  console.log(
    "is channel in category: ",
    await isChannelInCategory("xqc", "test")
  );
}

main();
