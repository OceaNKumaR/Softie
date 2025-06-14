const Discord = require('discord.js');
const botconfig = require("../botsettings.json");
const inlinereply = require('discord-reply');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle('__**Information**__')
    .setColor('#ffcfcf')
    .addFields(
        { name: 'Use `s!help` followed by a command name to get more information on a command.' , value: 'For example: `s!help serverinfo`.'},
        { name: ':boy: - `whois`' , value: 'Shows all details of a certain user in the guild', inline: true},
        { name: ':map: - `serverinfo`' , value: 'Shows all details in this server/guild', inline: true},
        { name: '👤 - `about`' , value: 'Shows some information **about** the bot', inline: true},
        { name: '<:Blob_ping:778932436636794911> - `ping`' , value: 'Shows the **ping** of the bot', inline: true},
        { name: '👥 - `clientid`' , value: 'Shows the id of the client', inline: true},
        { name: ':inbox_tray: - `membergraph`' , value: 'Shows the graph of members joined in a week.', inline: true},
        { name: '🎭 - `poll`' , value: 'Make a simple **poll** and its easy', inline: true},
        { name: '😷 - `covid`' , value: 'Track a country or worldwide **COVID-19** cases', inline: true},
        { name: '<:cooldown:778970390679781406> - `cooldown`' , value: 'Shows your **cooldown**', inline: true},
        { name: ':man_detective: - `perms`' , value: 'Shows user **permissions**', inline: true},
        { name: '<:MW_members:778971298465447976> - `membercount`' , value: 'Tell how many members are in the server', inline: true},
        { name: '😳 - `emoji`' , value: 'Shows the all **emojis** in the server', inline: true},

    )

    .setTimestamp()

    message.lineReply(embed);
}

module.exports.config = {
    name: "help-info",
    description: "iam gae",
    usage: "s!help-info",
    accessableby: "Members",
    aliases: []
}



