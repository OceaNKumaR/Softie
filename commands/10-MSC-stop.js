const Discord = require('discord.js');
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {

    if (!message.member.voice.channel) return message.channel.send(`${bot.emotes.error} - You're not in a voice channel !`);

    if (!bot.player.getQueue(message)) return message.channel.send(`${bot.emotes.error} - No music currently playing !`);

    bot.player.setRepeatMode(message, false);
    bot.player.stop(message);

    message.channel.send(`${bot.emotes.success} - Music **stopped** into this server !`);

};

module.exports.config = {
    name: "stop",
    description: "Stops the Music in the server.",
    usage: "s!stop",
    accessableby: "Member",
    aliases: ["dc"]
}