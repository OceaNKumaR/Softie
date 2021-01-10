const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()

    .setTitle('www.softiebot.cf')
    .setURL('https://www.softiebot.cf/')
    .setColor ('#ffcfcf')

    message.channel.send(embed);
}

module.exports.config = {
    name: "website",
    description: "Gives you invite link of the bot's website.",
    usage: "s!website",
    accessableby: "Members",
    aliases: []
}