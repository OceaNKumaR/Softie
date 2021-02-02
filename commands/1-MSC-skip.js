const Discord = require('discord.js');
const botconfig = require("../botsettings.json");
const { MessageEmbed } = require('discord.js')

module.exports.run = async (bot, message, args) => {

    if (!message.member.voice.channel) return message.channel.send(`${bot.emotes.error} - You're not in a voice channel !`);

    if (!bot.player.getQueue(message)) return message.channel.send(`${bot.emotes.error} - No music currently playing !`);

    bot.player.skip(message);

    let embed = new MessageEmbed()
    .setDescription(`${bot.emotes.success} - The current music has just been **skipped** !`)
    .setColor("#ffcfcf")

    message.channel.send(embed)

};

module.exports.config = {
    name: "skip",
    description: "Skips the song.",
    usage: "s!skip",
    accessableby: "Member",
    aliases: []
}