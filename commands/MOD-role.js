const Discord = require('discord.js');
const botconfig = require('../botsettings.json');

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_ROLES") && message.author.id !== "291221132256870400") return message.channel.send("<:nie:778532563446661160> Sorry you don't have permission to use this!");

    const user = message.mentions.members.last() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0])

        const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]) || message.guild.roles.cache.find(x => x.name.toLowerCase() === args.slice(1).join(" ") || x.name === args[1])

        if (!user) {
            return message.channel.send(`You need to specify a valid member`)
        }

        if (!role) {
            return message.channel.send(`You need to specify a valid role`)
        }

        if (message.guild.me.roles.highest.id === role.id) {
            return message.channel.send(`I cannot add or remove that role because that is my highest role`)
        }

        if (user.roles.cache.has(role.id)) {
            try {
                user.roles.remove(role.id)
                return message.channel.send(`<:Tick:776376662862462976> Changed roles for **${user.user.tag}**, removed **${role.name}**`)
            }
            catch (e) {
                return message.channel.send(`There was an error: ${e}`)
            }
        } else {
            try {
                user.roles.add(role.id)
                return message.channel.send(`<:Tick:776376662862462976> Changed roles for **${user.user.tag}**, added **${role.name}**`)
            }
            catch (e) {
                return message.channel.send(`There was an error: ${e}`)
            }
        }


}
module.exports.config = {
    name: "role",
    description: "Add/remove a user to a role or roles.",
    usage: "s!role <target's mention, id or username> <role's mention, id or name>",
    accessableby: "Admin",
    aliases: []
}