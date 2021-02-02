const Discord = require("discord.js");
const botconfig = require("../botsettings.json");
const path = require('path')

exports.run = async (client, message, args) => {
    const { voice } = message.member

    if (!voice.channelID) {
      message.reply('You must be in a voice channel')
      return
    }

    voice.channel.join().then((connection) => {
      connection.play(path.join(__dirname, 'Doremon.mp3'))
      message.react("🔉");
    })
  }
  module.exports.config = {
    name: "miakhalifa",
    description: "umm lets see XD",
    usage: "s!miakhalifa",
    accessableby: "Members",
    aliases: []
}