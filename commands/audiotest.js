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
      connection.play(path.join(__dirname, 'heheboi.mp3'))
    })
  }
  module.exports.config = {
    name: "audiotest",
    description: "this is a test babe",
    usage: "?audiotest",
    accessableby: "Admins",
    aliases: []
}