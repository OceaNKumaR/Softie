const Discord = require('discord.js');
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {


    if (!message.member.voice.channel) return message.channel.send(`${bot.emotes.error} - You're not in a voice channel !`);

    if (!bot.player.getQueue(message)) return message.channel.send(`${bot.emotes.error} - No music currently playing !`);

    bot.player.resume(message);

    message.channel.send(`${bot.emotes.success} - Song ${bot.player.getQueue(message).playing.title} **resumed** !`);

};

module.exports.config = {
    name: "resume",
    description: "Resumes your song.",
    usage: "s!resume",
    accessableby: "Member",
    aliases: []
}