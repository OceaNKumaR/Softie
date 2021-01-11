const Discord = require('discord.js');
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {

    if (!message.member.voice.channel) return message.channel.send(`${bot.emotes.error} - You're not in a voice channel !`);

    if (!bot.player.getQueue(message)) return message.channel.send(`${bot.emotes.error} - No music currently playing !`);

    const repeatMode = bot.player.getQueue(message).repeatMode;

    if (repeatMode) {
        client.player.setRepeatMode(message, false);
        return message.channel.send(`${bot.emotes.success} - Repeat mode **disabled** !`);
    } else {
        client.player.setRepeatMode(message, true);
        return message.channel.send(`${bot.emotes.success} - Repeat mode **enabled** !`);
    };

};

module.exports.config = {
    name: "loop",
    description: "loops the song",
    usage: "s!loop",
    accessableby: "Member",
    aliases: []
}