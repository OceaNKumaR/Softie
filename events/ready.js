const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports = bot => { 
    console.log(`${bot.user.username} is online`)
    bot.user.setActivity("s!help | s!invite", {type: "STREAMING" , url: "https://twitch.tv/OceanYT" });
}
