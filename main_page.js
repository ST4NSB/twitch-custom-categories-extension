async function main() {
  await deleteCategory("test");
  // await deleteChannel("xqc", "test");
  // await deleteChannel("forsen", "test");

  // await deleteCategory("test2");
  // await deleteChannel("xqc", "test2");

  // await addCategory("test");
  // await addChannelToCategory("xqc", "test");
  // await addChannelToCategory("forsen", "test");

  // await addCategory("test2");
  // await addChannelToCategory("xqc", "test2");

  //const token = await getOAUTH2Token();
  //const liveUsers = await getLiveChannels(["forsen", "AustinShow"], token);

  //console.log("live users: ", liveUsers);
  //console.log("all channels: ", await getAllChannels());

  try {
    //throw new Error("Cannot divide by zero.");
  } catch (err) {
    const msg = `Twitch Custom Categories - main_page.js - ${err}`;
    console.log(msg);
    alert(msg);
  }
}

main();
