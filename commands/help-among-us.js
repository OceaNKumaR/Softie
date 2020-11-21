const Discord = require('discord.js');
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle('__**Among Us Commands**__')
    .setColor('#ffcfcf')
    .addFields(
        { name: 'Use `s!help` followed by a command name to get more information on a command.' , value: 'For example: `s!help start`.'},
        { name: ':gear: - `setup`' , value: '**Sets up** among us commands. (necessary)', inline: true},
        { name: ':love_letter: - `guide`' , value: '**Guide** on how to use among us commands.', inline: true},
        { name: ':arrows_clockwise: - `reset`' , value: '**Resets** among us game!', inline: true},
        { name: ':golf: - `start`' , value: 'Command is used when the game has **started** and it will deafen users in the call.', inline: true},
        { name: ':envelope_with_arrow: - `vote`' , value: '**Undeafened** everyone in the voice chat.', inline: true},
        { name: '<:cyan:779306200860459018> - `dead`' , value: 'Marks a player as **dead** and mute them from the discord call.', inline: true},
        { name: ':x:<:cyan:779306200860459018> - `revive`' , value: 'Used for making a player **alive.**', inline: true},

    )

    .setTimestamp()

    message.channel.send(embed);
}

module.exports.config = {
    name: "help-among-us",
    description: "iam gae",
    usage: "s!help-among-us",
    accessableby: "Members",
    aliases: []
}