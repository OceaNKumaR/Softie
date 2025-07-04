const Discord = require('discord.js');
const botconfig = require('../botsettings.json');
const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const question = args.join(" ");

    if (!question) return message.reply("Please provide a poll");

    const embed = new MessageEmbed()
      .setTitle(question)
      .setDescription(`Poll created by ${message.author.tag}`)
      .setFooter(message.author.username)
      .setColor("#ffcfcf")
      .setTimestamp();

    const sendMessage = await message.channel.send(embed);

    message.delete(); //Added this to make it better.

    sendMessage.react("👍🏻");
    sendMessage.react("👎🏻");
    sendMessage.react("🤷🏻");

}
module.exports.config = {
    name: "poll",
    description: "make a simple poll and is easy",
    usage: "s!poll",
    accessableby: "Members",
    aliases: []
}