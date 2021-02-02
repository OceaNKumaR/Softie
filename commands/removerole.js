const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let epicRole = message.guild.roles.cache.get('746750362689732700');
    const member = message.mentions.members.first();

    member.roles.remove(epicRole);
    message.channel.send('Role Removed')
}

module.exports.config = {
    name: "removerole",
    description: "",
    usage: "s!removerole",
    accessableby: "Members",
    aliases: []
}