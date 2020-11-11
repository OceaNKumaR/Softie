const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()

    .setTitle('Click me to invite me to your server!')
    .setURL('https://discord.com/oauth2/authorize?client_id=766228516647337984&permissions=8&scope=bot')
    .setColor ('GREEN')

    message.channel.send(embed);
}

module.exports.config = {
    name: "invite",
    description: "Gives you invite link of the bot.",
    usage: "s!invite",
    accessableby: "Members",
    aliases: []
}