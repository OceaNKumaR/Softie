const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const moment = require('moment')
const os = require('os')
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {

    const embed = new MessageEmbed()
    .setAuthor('Softie', client.user.displayAvatarURL())
    .setTitle('**Stats**')
    .addField('**Uptime**', `${moment(process.uptime() * 1000).format('D [days], H [hrs], m [mins], s [secs]', { trim: 'both mid' })}`, true)
    .addField('**Guilds**', `${client.guilds.cache.size}`, true)
    .addField('**Channels**', `${client.channels.cache.size}`, true)
    .addField('**Users**', `${client.users.cache.size}`, true)
   
    .addField('**Bot Version**', 'v1.1.0', true)
    .setColor("RANDOM")
    .setFooter(message.author.username)
    .setTimestamp();

message.channel.send(embed);
}

module.exports.config = {
    name: "stats",
    description: ":D",
    usage: "s!stats",
    accessableby: "Members",
    aliases: []
}