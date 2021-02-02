const Discord = require('discord.js');
const botconfig = require('../botsettings.json');
const {MessageEmbed} = require("discord.js")

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("You dont have perms to use this command")

    let user = message.mentions.users.first();
    if(!user) return message.channel.send("you need to mention a user")

    let nick = args.slice(1).join(" ")
    if(!nick) return message.channel.send("You need to input a nickname")

    let member = message.guild.members.cache.get(user.id)
    await member.setNickname(nick).catch(err => message.channel.send({embed:{color:"RED",description:`error: ${err}`}}));
    let embed = new MessageEmbed()
    .setTitle("Nickname changed")
    .setDescription(`${user.tag}'s nickname was changed to ${nick}`)
    .setColor("#ffcfcf")

    message.channel.send(embed)

    
}


module.exports.config = {
    name: "nickname",
    description: "Changes user nickname",
    usage: "s!nickname",
    accessableby: "Members",
    aliases: ["nick"]
}