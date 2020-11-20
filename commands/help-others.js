const Discord = require('discord.js');
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle('__**Others**__')
    .setColor('#ffcfcf')
    .addFields(
        { name: ':art: - `ascii`' , value: 'Turns a text into text art', inline: true},
        { name: ':abacus: - `math`' , value: '**Calculates** and solves questions', inline: true},
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