const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const { Message } = require('discord.js')

module.exports.run = async (bot, message, args) => {
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

    if(!Member) return message.channel.send('Member not found')

    const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');

    await Member.roles.remove(role)

    message.channel.send(`${Member.displayName} is now unmuted`)
}

module.exports.config = {
    name: "unmute",
    description: "unmutes the user",
    usage: "s!mute",
    accessableby: "Admin",
    aliases: []
}