const Discord = require('discord.js');
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    let epicRole = message.guild.roles.cache.get('766223209980493845');
    const member = message.mentions.members.first();

    member.roles.add(epicRole);
    message.channel.send('Role Added')
}

module.exports.config = {
    name: "addvip",
    description: "Gives member vip role",
    usage: "s!addvip",
    accessableby: "Admin",
    aliases: []
}