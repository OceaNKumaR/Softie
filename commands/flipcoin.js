const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const replies = ["<a:12coin:771690131975438346> **You landed on Heads**", "<a:12coin:771690131975438346> **You landed on Tails**"];

    const reply = replies[Math.floor(Math.random() * replies.length)];

    const embed = new MessageEmbed()
        .setTitle("Flipcoin")
        .setTitle(`${reply}`)
        .setColor("ORANGE")
        .setFooter(message.author.username)
        .setTimestamp();

    message.channel.send(embed);
}

module.exports.config = {
    name: "flipcoin",
    description: "Throws a coin for you!",
    usage: "?flipcoin",
    accessableby: "Members",
    aliases: []
}
