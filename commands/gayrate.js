const Discord = require('discord.js');
const botconfig = require('../botsettings.json');
const { MessageEmbed , user } = require('discord.js')

module.exports.run = async (bot, message, args) => {

    const min = Math.ceil(1);
	const max = Math.floor(100);
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    const target = message.mentions.users.first() || message.author;
   
    const embed = new MessageEmbed()
    .setTitle('Gayr8 machine')
    .setDescription(`${target.username} is ${num}% gay 🏳️‍🌈`)
    .setColor("#ffcfcf")
    message.channel.send(embed)

  }


module.exports.config = {
    name: "gayrate",
    description: "what is the percentage of your gayness?",
    usage: "s!gayrate",
    accessableby: "Members",
    aliases: []
}