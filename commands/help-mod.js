const Discord = require('discord.js');
const botconfig = require("../botsettings.json");
const inlinereply = require('discord-reply');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle('__**Moderation Commands!**__')
    .setColor('#ffcfcf')
    .addFields(
        { name: 'Use `s!help` followed by a command name to get more information on a command.' , value: 'For example: `s!help ban`.'},
        { name: '<:purge:778589750055010325> - `purge`' , value: '**Purge/Delete** a specific amount of messages', inline: true},
        { name: '<:BanHammer:778588685313769482> - `ban`' , value: '**Ban** a user so they cant reenter the server', inline: true},
        { name: '<:kick:778589703695106049> - `kick`' , value: '**Kick** a user from the server/guild', inline: true},
        { name: ':stopwatch: - `slowmode`' , value: 'Changes a specific channel **slowdown**', inline: true},
        { name: ':face_with_raised_eyebrow: - `nick`' , value: 'Changes a server member **nickname**', inline: true},
        { name: ':no_mouth: - `mute`' , value: '**mutes** a user', inline: true},
        { name: ':cowboy: - `role`' , value: 'Add/remove a user to a role or roles.', inline: true},
        { name: ':x::no_mouth: - `unmute`' , value: '**Unmutes** a server member.', inline: true},
        
    )
    .setTimestamp()

    message.lineReply(embed);
}

module.exports.config = {
    name: "help-mod",
    description: "iam gae",
    usage: "s!help-mod",
    accessableby: "Members",
    aliases: []
}