const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission(['ADMINISTRATOR'])) return;
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
    if(member.hasPermission(['ADMINISTRATOR']) && !message.member.hasPermission('ADMINISTRATOR')) return;

        let mutedRole = message.guild.roles.cache.get('766554449845551106');
        let verifiedRole = message.guild.roles.cache.get('715086965770289232');
        if(mutedRole) {
            member.roles.remove(mutedRole);
            member.roles.add(verifiedRole);
            message.channel.send("User was Successfully Unmuted.");
        }
}

module.exports.config = {
    name: "unmute",
    description: "",
    usage: "s!unmute",
    accessableby: "Members",
    aliases: []
}