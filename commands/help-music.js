const Discord = require('discord.js');
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle('THIS CATERGORY IS UNDER MAINTENANCE!')
    .setDescription('<a:nikallvde:778617648497688606> Please try some other Catergories by doing `s!help`')
    .setColor('#ffcfcf')
    .setTimestamp()

    message.channel.send(embed);
}

module.exports.config = {
    name: "help-music",
    description: "iam gae",
    usage: "s!help-music",
    accessableby: "Members",
    aliases: []
}