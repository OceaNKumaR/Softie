const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('My Prefix is `s!`')
        .setDescription('Use `>help` To Get a List of All Commands. Use `s!help <command>` For a Specific Command Help.')
        .setColor('#ffcfcf')
        .addFields(
        { name: 'INVITE ME', value: 'https://discord.com/oauth2/authorize?client_id=766228516647337984&permissions=8&scope=bot'})
        .setTimestamp()

        message.channel.send(embed);

    }

    module.exports.config = {
        name: "<@766228516647337984>",
        description: "useless info",
        usage: "<@766228516647337984>",
        accessableby: "Members",
        aliases: []
    }