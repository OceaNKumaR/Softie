 
const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
    let epicRole = message.guild.roles.cache.get('746750362689732700');
    const member = message.mentions.members.first();

    member.roles.add(epicRole);
    message.channel.send('Role Added')
}

module.exports.config = {
    name: "addrole",
    description: "",
    usage: "s!addrole",
    accessableby: "Members",
    aliases: []
}