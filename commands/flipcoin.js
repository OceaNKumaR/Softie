const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    var chance = Math.random();
    if (chance == 0) {
        message.channel.send(message.author + ",`Your coin landed on head!`");
    } else {
        message.channel.send(message.author + "`Your coin landed on tail!`");
    }
}
module.exports.config = {
    name: "flip",
    description: "Throws a coin for you!",
    usage: "?flipcoin",
    accessableby: "Members",
    aliases: []
}