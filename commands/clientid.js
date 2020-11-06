const discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    message.channel.send("`" + message.author + "`");
}

module.exports.config = {
    name: "clientid",
    description: "Gets your clientid",
    usage: "s!clientid",
    accessableby: "Members",
    aliases: []
}