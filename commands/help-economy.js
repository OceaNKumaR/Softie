const Discord = require('discord.js');
const botconfig = require("../botsettings.json");
const inlinereply = require('discord-reply');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle('__**Economy Commands!**__')
    .setColor('#ffcfcf')
    .addFields(
        { name: 'Use `s!help` followed by a command name to get more information on a command.' , value: 'For example: `s!help balance`.'},
        { name: '💰 - `balance`' , value: 'Shows Current **Balance** of the user', inline: true},
        { name: '💸 - `deposit`' , value: '**Deposits** Money to the bank', inline: true},
        { name: '<a:HO_pepegawhale:782601040901570582> - `withdraw`' , value: '**Withraws** Money from the bank', inline: true},
        { name: '<a:lol:779260011343904799> - `daily`' , value: 'Gives You Money in every 24 Hours', inline: true},
        { name: '<a:work:806808485143511061> - `work`' , value: '**Work** hard to get money', inline: true},
        { name: '<:ppslav:806809024406355978> - `crime`' , value: 'Do **Crime** to get money', inline: true},
        { name: '🤓 - `beg`' , value: '**begs** For money', inline: true},
        { name: '😈 - `tax`' , value: 'Pays **tax** to the Government', inline: true},
        { name: '🛒 - `shop`' , value: 'Shows all items in the **shop**', inline: true}

        )
        .setFooter('More Commands Soon!')
        .setTimestamp()
    
        message.lineReply(embed);
    }
    
    module.exports.config = {
        name: "help-economy",
        description: "iam gae",
        usage: "s!help-economy",
        accessableby: "Members",
        aliases: []
    }