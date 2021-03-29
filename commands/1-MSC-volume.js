const Discord = require('discord.js');
const botconfig = require("../botsettings.json");
const { MessageEmbed } = require('discord.js')
const inlinereply = require('discord-reply');

module.exports.run = async (bot, message, args) => {

    if (!message.member.voice.channel) return message.channel.send(`${bot.emotes.error} - You're not in a voice channel !`);

    if (!bot.player.getQueue(message)) return message.channel.send(`${bot.emotes.error} - No music currently playing !`);

    if (!args[0]) return message.channel.send(`${bot.emotes.error} - Please enter a number !`);

    if (isNaN(args[0]) || 100 < args[0] || args[0] <= 0) return message.channel.send(`${bot.emotes.error} - Please enter a valid number (between 1 and 100) !`);

    if (message.content.includes('-') || message.content.includes('+') || message.content.includes(',') || message.content.includes('.')) return message.channel.send(`${bot.emotes.error} - Please enter a valid number !`);

    bot.player.setVolume(message, parseInt(args[0]));

    let embed = new MessageEmbed()
    .setDescription(`${bot.emotes.success} - Volume set to **${args.join(" ")}%** !`)
    .setColor("#ffcfcf")

    message.lineReply(embed)

};

module.exports.config = {
    name: "volume",
    description: "Changes the volume of the song.",
    usage: "s!volume",
    accessableby: "Member",
    aliases: ["vol"]
}