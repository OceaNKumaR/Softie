const Discord = require("discord.js");
const botconfig = require("../botsettings.json");
const ms = require("ms");

exports.run = async (bot, message, args) => {
  if (!args[0])
  return message.channel.send(
    `You did not specify the time in seconds you wish to set this channel's slow mode too!`
  );
if (isNaN(args[0])) return message.channel.send(`Hold Up. You really think that is actually a number? Got To School :facepalm:`);
let reason = message.content.slice(
  bot.prefix.length + 9 + args[0].length + 1
);
if (!reason) {
  reason == "No reason provided!";
}
message.channel.setRateLimitPerUser(args[0], reason);
message.channel.send(
  `Set the slowmode of this channel too **${args[0]}** with the reason: **${reason}**`);
}
module.exports.config = {
  name: "slowmode",
  description: "Sets/Shows The Current Channel Slowmode In Seconds.",
  usage: "s!slowmode ",
  accessableby: "Admins",
  aliases: []
}