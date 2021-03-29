const Discord = require('discord.js');
const botconfig = require("../botsettings.json");
const { MessageEmbed } =require('discord.js')
const inlinereply = require('discord-reply');

module.exports.run = async (bot, message, args) => {

    if (!message.member.voice.channel) return message.channel.send(`${bot.emotes.error} - You're not in a voice channel !`);

    const queue = bot.player.getQueue(message);

    if (!bot.player.getQueue(message)) return message.channel.send(`${bot.emotes.error} - No songs currently playing !`);

    let embed = new MessageEmbed()
    .setTitle(`Server queue - ${message.guild.name} ${bot.emotes.queue}`) 
    .setDescription(`Current : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
        return `**#${i + 1}** - ${track.title} | ${track.author} (requested by : ${track.requestedBy.username})`
    }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `And **${queue.tracks.length - 5}** other songs...` : `In the playlist **${queue.tracks.length}** song(s)...`}`))
    .setColor("#ffcfcf")

    message.lineReply(embed)

};

module.exports.config = {
    name: "queue",
    description: "Shows the all list of the song you have queued.",
    usage: "s!queue",
    accessableby: "Member",
    aliases: ["q"]
}
