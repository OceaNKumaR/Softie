const Discord = require('discord.js');
const botconfig = require("../botsettings.json");
const inlinereply = require('discord-reply');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle('__**Giveaway Commands!**__')
    .addFields(
        { name: 'Use `s!help` followed by a command name to get more information on a command.' , value: 'For example: `s!help gstart`.'},
        { name: ':gift: - `gstart`' , value: 'Starts a **giveaway** with your custom details', inline: true},
        { name: ':octagonal_sign: - `gend`' , value: '**Ends** the giveaway', inline: true},
        { name: '⚙️ - `gedit`' , value: '**Edits** your giveaway with your new details', inline: true},
 
        )
        .setTimestamp()
    
    .setColor('#ffcfcf')
    

    message.lineReply(embed);
}

module.exports.config = {
    name: "help-giveaway",
    description: "iam gae",
    usage: "s!help-giveaway",
    accessableby: "Members",
    aliases: []
}