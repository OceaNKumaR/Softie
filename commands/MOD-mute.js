const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const {Message, MessageEmbed}= require('discord.js')
const ms = require('ms')

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You do not have permissions to use this command')
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!Member) return message.channel.send('Member is not found.')
    const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
    if(!role) {
        try {
            message.channel.send('Muted role is not found, attempting to create muted role.')

            let muterole = await message.guild.roles.create({
                data : {
                    name : 'muted',
                    permissions: []
                }
            });
            message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                await channel.createOverwrite(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                })
            });
            message.channel.send('Muted role has sucessfully been created.')
        } catch (error) {
            console.log(error)
        }
    };
    let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
    if(Member.roles.cache.has(role2.id)) return message.channel.send(`${Member.displayName} has already been muted.`)
    await Member.roles.add(role2)
    message.channel.send(`${Member.displayName} is now muted.`)
}

module.exports.config = {
    name: "mute",
    description: "mutes the user",
    usage: "s!mute",
    accessableby: "Admin",
    aliases: []
}