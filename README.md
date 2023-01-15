# Discord Bot Template

A simple and easy discord bot template ready to use!

Made with ❤ by eumermondio

## Table of contents

- [Requirements](#Requirements)

    * [Git](#Git)
    * [NodeJS](#NodeJS)
    * [Visual Studio Code](#Visual-Studio-Code)

- [Getting started](#Getting-started)

    * [Fork this repo](#Fork-this-repo)
    * [Create a folder](#Create-a-folder)
    * [Open that folder with Visual Studio Code](#Open-that-folder-with-Visual-Studio-Code)
    * [Initialize git on that folder](#Initialize-git-on-that-folder)
    * [Clone the forked repo](#Clone-the-forked-repo)
    * [Setting up npm](#Setting-up-npm)
    * [Create a discord application](#Create-a-discord-application)
    * [Bot token](#Bot-token)
    * [Run your bot](#Run-your-bot)

- [License](#License)

## Requirements

### Git
[Download git here](https://git-scm.com/downloads)
<img src="./git.png" width="200" style="display: block;">

### NodeJS
[Download nodejs here](https://nodejs.org/en/)
<img src="./node.png" width="200" style="display: block;">

### Visual Studio Code
[Download visual studio code here](https://code.visualstudio.com/download)
<img src="./vsc.png" width="200" style="display: block;">

## Getting started

<br>

### Fork this repo
First of all you must fork this repo. Later you will need it to upload your own bot to github. Fork it by clicking on ***fork*** button
<img src="./fork.png" width="150" style="display: block;">

<br>

### Create a folder
Once forked this repo go to your desktop and create a folder. Name doesn't matter by the way

<br>

### Open that folder with Visual Studio Code
Then you'll need to open that folder with ***visual studio code***. Open ***visual studio code*** and do this shortcut `CTRL + K + O`. Once you have done this look for your folder and select it.

<br>

### Initialize git on that folder
Ok you have completed the 50 of this guide so... Congrats! Go on!

To initialize git on your folder you must go to the ***left toolbar*** of visual studio code and click the ***source control button***. It looks like a `Y`. Once done this click the ***initialize*** button and wait. If you see a commit button you are going ok.

<br>

### Clone the forked repo
Now click the ***source control button*** again and click the `...` button. It appears on top. Now click on clone and paste the ***URL*** of the forked repo. It's on your github profile. Once done this you should look the repo files.

<br>

### Setting up npm
Open a terminal on ***visual studio code*** by clicking on terminal button and run these commands.

```batch
npm init
```
```batch
npm install discord.js
```
You should see new files like `package.json`.

<br>

### Create a discord application
Ok, you've set up the files. Now you need a discord app active to complete your bot.

[Create your discord app here](https://discord.com/developers/applications)

Once you done it create a bot and reset his token. Copy the token.

<br>

### Bot token
Now you have the bot's token in your clipboard. Go to ***visual studio code*** and open this folder `index.js`. Go to bottom and you'll see something like this

```javascript
// LogIn
client.login("BOT'S TOKEN HERE");
```

Paste your token there

<br>

### Run your bot
Congratulations dude! This is the final step so keep calm. Now open a terminal and run this command.

```batch
node .
```
You should see this in console.

```
Bot Online
Logged as: BOT'S NAME
```
If you see that your bot is now running!!!

<br>

## License

MIT
