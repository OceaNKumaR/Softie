const Discord = require('discord.js');
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle('<a:noheckno:770923367074627595> No Type Mentioned')
    .setDescription('**PLEASE ENTER EITHER PC OR MOBILE**\n**For example** <a:GG_Arrow:770924727459250177> `s!wallpaper-pc` , `s!wallpaper-mobile`')
    
    .setColor('RANDOM')
    .setTimestamp()

    message.channel.send(embed);
}

module.exports.config = {
    name: "wallpaper",
    description: "Shows how to use wallpaper command",
    usage: "s!wallpaper",
    accessableby: "Members",
    aliases: []
}
