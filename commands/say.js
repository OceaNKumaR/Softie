const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) {
    return message.channel.send(`You do not have the permission to use that.`)
  }
 
  var text = message.content.split(' ').slice(1).join(' ')
  if(!text) return message.reply('You did not specify your message to send!')
  message.channel.send(text)
}
  module.exports.config = {
    name: "say",
    description: "",
    usage: "?say",
    accessableby: "Admin",
    aliases: []
}

