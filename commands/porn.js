const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const fetch = require("node-fetch");

module.exports.run = async (bot, message, args) => {

  let res = await fetch(encodeURI(`https://nekobot.xyz/api/image?type=4k`));
  let json = await res.json();
  let attachment = new Discord.MessageAttachment(json.message, "4k.png");


if(!message.channel.nsfw) {
message.reply("NSFW is not enabled in this channel")
} else {
message.channel.send(attachment)}
},


module.exports.config = {
    name: "porn",
    description: "shows a porn gif",
    usage: "s!porn",
    accessableby: "Members",
    aliases: []
}