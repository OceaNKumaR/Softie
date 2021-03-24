const Discord = require('discord.js');
const botconfig = require('../botsettings.json');
const { MessageEmbed , user } = require('discord.js')

module.exports.run = async (bot, message, args) => {

    let responses = [
    "8D",
    "8=D",
    "8==D",
    "8===D",
    "8====D",
    "8=====D",
    "8======D",
    "8=======D",
    "8========D",
    "8=========D",
    "8==========D",
    "8===========D",
    "8============D",
    ]
    let response = Math.floor(Math.random() * responses.length)
   const target = message.mentions.users.first() || message.author;
    const embed = new MessageEmbed()
    .setTitle('peepee size machine')
    .setDescription(`${target.username}'s pp\n${responses[response]}`)
    .setColor("#ffcfcf")
    message.channel.send(embed)

  }


module.exports.config = {
    name: "pp",
    description: "Shows you your pp size",
    usage: "s!pp",
    accessableby: "Members",
    aliases: []
}