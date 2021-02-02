const discord = require("discord.js");
const botconfig = require("../botsettings.json");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (bot, message, args) => {

    const data = await fetch("https://nekos.life/api/v2/img/pat").then((res) =>
      res.json()
    );
    const user = message.mentions.users.first() || message.author;
    const patted = message.author.id === user.id ? "themselfs" : user.username;

    const embed = new MessageEmbed()
      .setColor("#ffcfcf")
      .setTitle(`${message.author.username} Patted ${patted}`)
      .setDescription(`[Click here if the image failed to load.](${data.url})`)
      .setImage(`${data.url}`)
      .setTimestamp();

    message.channel.send({ embed });
  },


  module.exports.config = {
    name: "pat",
    description: "Pat somebody",
    usage: "s!pat",
    accessableby: "Members",
    aliases: []
}