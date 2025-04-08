# Twitch.TV Custom Categories Extension

## Description
Extension for users to add custom categories on twitch.tv that will appear on their main following page.

Works for Chrome & FireFox (tested on LibreWolf).

## How to install (and use it in Developer mode)
- Download the latest Release from the Releases tab
- Move the **manifest.json** from chrome/firefox directory into the root directory
- (FOR LIBREWOLF to save your add-on) You will need to include the temporary extension id (ex. **1fb129adb9693509cb1b34ba0e9ff4f4fcc0d7e6@temporary-addon**) in applications.gecko.id after loading the add-on as temporary and then loading the add-on fully
- Create an .env file with CLIENT_ID & CLIENT_SECRET: 
![image](https://github.com/ST4NSB/twitch-custom-categories-extension/assets/38291834/7a029602-b42b-49aa-ba25-783d0d7a8a56)
- Generate and include the CLIENT_ID & CLIENT_SECRET into the .env file from https://dev.twitch.tv (this article describes the steps https://support.streamweasels.com/article/12-how-to-setup-a-client-id-and-client-secret)
- (OPTIONAL step to load categories on the first load) Create a **saved_categories.json** file, category name as the root, channel names for the array, example below:

```json
{
  "Casual": [
    "TwitchRivals",
    "LIRIK"
  ],
  "LeagueOfLegends": [
    "loltyler1",
    "LEC",
    "LCK",
    "LCS"
  ],
  "Programming": ["pajlada", "IndieHorrorDev", "UnrealEngine", "ThePrimeagen"],
  "Speedrun": [
    "The_Happy_Hob",
    "Distortion2",
    "Elajjaz",
    "LilAggy",
    "GamesDoneQuick",
    "Squillakilla"
  ]
}
```
  
- (FOR CHROME) Go to **Manage extensions** tab
- (FOR CHROME) Enable **Developer mode**
- (FOR CHROME) Click **Load unpacked**, select the folder where you unzipped the files from this project
- (FOR FIREFOX/LIBREWOLF) After you added your temporary extension id, zip the file and load the extension on the **about:addons** -> "Install Add-on From File.."
- Done

## Demo
- Add category: ![image](https://github.com/ST4NSB/twitch-custom-categories-extension/assets/38291834/fe73b3d5-41b4-4a8f-9edb-6c6f09dbaa66)

- Add channel to a custom category (by going to the channel page): ![image](https://github.com/ST4NSB/twitch-custom-categories-extension/assets/38291834/ed36dd19-5f58-4248-a4aa-81b2fdbd8336)

- Categories appear like: ![image](https://github.com/ST4NSB/twitch-custom-categories-extension/assets/38291834/3cc27e6f-a207-416d-bb26-89d44a74d526)
