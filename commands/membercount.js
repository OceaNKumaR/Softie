const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const Members = message.guild.memberCount;
    const bots = message.guild.members.cache.filter(
      member => member.bot === true
    ).size;
    const humans = message.guild.members.cache.filter(
      member => !member.user.bot
    ).size;
    const online = message.guild.members.cache.filter(
      member => member.presence.status === "online"
    ).size;
    const offline = message.guild.members.cache.filter(
      member => member.presence.status === "offline"
    ).size;
    const dnd = message.guild.members.cache.filter(
      member => member.presence.status === "dnd"
    ).size;
    const idle = message.guild.members.cache.filter(
      member => member.presence.status === "idle"
    ).size;

    const embed = new MessageEmbed()
      .setColor(`RANDOM`)
      .setTitle(`Members Information`)
      .addField(`All Members`, Members)
      .addField(`Humans`, humans)
      .addField(`Bots`, bots)
      .addField(
        `Members Status`,
        `Online: ${online} | Do Not Disturb: ${dnd} | Idle: ${idle} | Offline: ${offline}`
      )
      .setTimestamp();

    message.channel.send(embed);
  }
  module.exports.config = {
    name: "membercount",
    description: "Shows the membercount of the server",
    usage: "s!membercount",
    accessableby: "Members",
    aliases: ['userinfo']
}