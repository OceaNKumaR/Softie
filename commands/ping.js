const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    message.channel.send(`🏓 Pinging....`).then((msg) => {
      const _ = new Discord.MessageEmbed()
        .setTitle("🏓Pong!")
        .setDescription(
          `• Latency - ${Math.floor(
            msg.createdTimestamp - message.createdTimestamp
          )}ms\n• API Latency - ${Math.round(bot.ws.ping)}ms`
        )
        .setColor("RANDOM");
      msg.edit(_);
      msg.edit("\u200B");
    });
  }
  module.exports.config = {
    name: "ping",
    description: "Returns latency and API ping",
    usage: "?ping",
    accessableby: "Members",
    aliases: []
}

//Pong ping !!!
