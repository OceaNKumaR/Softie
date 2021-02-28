const Discord = require('discord.js');
const botconfig = require('../botsettings.json');
const fetch = require("node-fetch");

module.exports.run = async (bot, message, args) => {

    const url = args.join(" ");
    if (!url)
      return message.reply(
        "You forgot an url! EG s!shorturl https://yourmom.com"
      );
    const data = await fetch(
      `https://is.gd/create.php?format=json&url=${encodeURIComponent(url)}`
    ).then((res) => res.json());

    return message.reply("The shortened url is....  " + data.shorturl);


}
module.exports.config = {
    name: "shorturl",
    description: "Shorten an url",
    usage: "s!shorturl",
    accessableby: "Members",
    aliases: []
}