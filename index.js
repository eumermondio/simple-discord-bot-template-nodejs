// Basic global variables
const Discord = require("discord.js");
const client = new Discord.Client({
    intents: ["AutoModerationConfiguration", "AutoModerationExecution", "DirectMessageReactions", "DirectMessageTyping", "DirectMessages", "GuildBans", "GuildEmojisAndStickers", "GuildIntegrations", "GuildInvites", "GuildMembers", "GuildMessageReactions", "GuildMessageTyping", "GuildMessages", "GuildPresences", "GuildScheduledEvents", "GuildVoiceStates", "GuildWebhooks", "Guilds", "MessageContent"],
});

// Fires when bot is online
client.on("ready", () => {
    console.clear();
    console.log(`Bot Online\nLogged as: ${client.user.username}#${client.user.discriminator}`);
    client.user.setPresence({
        status: "online"
    });
    client.user.setActivity("Bot's activity");
    // You can set a custom activity as well
})

// Fires when bot gets in a guild
client.on("guildCreate", server => {
    // Your code here...
})

// Fires when a member sends a message to chat
client.on("messageCreate", (message) => {
    // Console log
    console.log(message.author.username + "#" + message.author.discriminator + ": " + message.content);

    // Example command
    if (message.content === "!myCommand") {
        message.reply("Hi there! You've executed my command!");
    }

    // Your code here...

});


// Fires when a member join a guild
client.on("guildMemberAdd", member => {
    // Your code here...
});

// LogIn
client.login("BOT'S TOKEN HERE");