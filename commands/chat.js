const discord = require("discord.js")
const botconfig = require("../botsettings.json");
const { chatBot } = require('reconlx') 

module.exports.run = async (bot, message, args) => {
    chatBot(message, args.join(" "))
}

module.exports.config = {
    name: "chat",
    description: "the bots chats with you.",
    usage: "s!chat",
    accessableby: "Members",
    aliases: []
}