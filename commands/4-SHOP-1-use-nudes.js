const Discord = require('discord.js');
const botconfig = require('../botsettings.json');
const { MessageEmbed } = require('discord.js')

module.exports.run = async (bot, message, args) => {

    let embed = new MessageEmbed()
    .setTitle('👍 You Successfully Used Your Item')
    .setDescription('Your fresh nude is ready [click here](https://youtu.be/dQw4w9WgXcQ) to see it.')
    .setColor('#ffcfcf')
    .setTimestamp()
    message.channel.send(embed)

}
module.exports.config = {
    name: "use-nudes",
    description: "UwU",
    usage: "s!use-nudes",
    accessableby: "Members",
    aliases: []
}