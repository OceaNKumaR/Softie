const Discord = require('discord.js');
const botconfig = require('../botsettings.json');
const { MessageEmbed } = require('discord.js');
const translate = require("@k3rn31p4nic/google-translate-api");

module.exports.run = async (bot, message, args) => {

    if (!args[0])
    return message.channel.send(
      "**<a:noheckno:770923367074627595> Usage: `s!translate <language> <sentence>` **"
    );

    const result = await translate(args.slice(1).join(" "), { to: args[0] });
    const embed = new MessageEmbed()
        .setDescription(result.text)
        .setColor("#ffcfcf")
        .setFooter(message.author.username)
        .setTimestamp()
        .setTitle("Google Translate");

    message.channel.send(embed);
}


module.exports.config = {
    name: "translate",
    description: "Translate a sentence",
    usage: "s!translate",
    accessableby: "Members",
    aliases: ["trans"]
}