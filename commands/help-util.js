const Discord = require('discord.js');
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle('__**Utility**__')
    .setColor('#ffcfcf')
    .addFields(
        { name: 'Use `s!help` followed by a command name to get more information on a command.' , value: 'For example: `s!help google`.'},
        { name: ':partly_sunny: - `weather`' , value: 'Checks a weather for a specific city.', inline: true},
        { name: '<:Google:778909809705615361> - `google`' , value: 'Googling somthing', inline: true},
        { name: '<:News:803193225573302303> - `news`' , value: 'Replies with the 5 latest world **news** headlines', inline: true},
        { name: '👤 - `avatar`' , value: 'Display a user **avatar**', inline: true},
        { name: '<a:CheckDms:778911087923560459> - `dm`' , value: '**dm** a user', inline: true},
        { name: '<a:juejuejuejue:778911772265807892> - `ascii`' , value: 'Converts your text into **ascii**', inline: true},
        { name: '🎙️ - `tts`' , value: 'Text To Speech', inline: true},
        { name: '🌅 - `wallpaper`' , value: 'Get a cool **wallpaper** for yourself', inline: true},
        { name: '<:Wikipedia:803536696305647617> - `wikipedia`' , value: 'Shows Info From **Wikipedia**', inline: true},
        { name: '<:googleplaystore:778913243875770388> - `playstore`' , value: 'Shows **Playstore** app', inline: true},
        { name: '<:spotify:778913711514976286> - `spotify`' , value: 'Show a Listening **Spotify** user status.', inline: true},
        { name: '<:ocean_instagram:729572981189115935> - `instagram`' , value: 'Find out some nice **instagram** statistics', inline: true},
 
    )

    .setTimestamp()

    message.channel.send(embed);
}

module.exports.config = {
    name: "help-util",
    description: "iam gae",
    usage: "s!help-util",
    accessableby: "Members",
    aliases: []
}
