const Discord = require('discord.js');
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle('__**Others**__')
    .setColor('#ffcfcf')
    .addFields(
        { name: '<:invite_red:779624387607396412> - `invite`' , value: '**invite** this bot to your server', inline: true},
        { name: '<:PEPEsupportEmoji000:779624685594738718> - `support`' , value: 'Need **support**?', inline: true},
        { name: '<:bug_hunter_badge:779626248007188492> - `bug`' , value: 'Report a **bug**', inline: true},
        { name: '<:website:797762420160331796> - `Website`' , value: 'See somthing **cool**', inline: true},
        { name: '🔞 - Nsfw' , value: '`Some NSFW commands`'},
        { name: '<a:sex:779282857578201098> - `porn`' , value: 'Shows you a porn image', inline: true},
        { name: '<a:Hentai:779283191139663872> - `nsfw`' , value: 'Shows you a hentai image', inline: true},
    )

    .setTimestamp()

    message.channel.send(embed);
}

module.exports.config = {
    name: "help-others",
    description: "iam gae",
    usage: "s!help-others",
    accessableby: "Members",
    aliases: []
}