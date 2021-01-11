const Discord = require('discord.js');
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {

    if (!message.member.voice.channel) return message.channel.send(`${bot.emotes.error} - You're not in a voice channel !`);

    if (!args[0]) return message.channel.send(`${bot.emotes.error} - Please indicate the title of a song !`);

    bot.player.play(message, args.join(" "));

};

module.exports.config = {
    name: "play",
    description: "Plays a song.",
    usage: "s!play",
    accessableby: "Member",
    aliases: ["p"]
}