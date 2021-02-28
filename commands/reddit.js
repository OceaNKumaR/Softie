const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (bot, message, args) => {
  const subReddit = args[0];
  if(!message.channel.nsfw) {
      return message.reply('Because of some subreddits that have nsfw content this command is nsfw marked! Please use a nsfw channel to use this command.')
  }

  if (!subReddit) {
    return message.channel.send("Please provide a subreddit.");
  }

  const data = await fetch(
    `https://www.reddit.com/r/${encodeURIComponent(subReddit)}/random.json`
  ).then((res) => res.json());

  try {
    const randomIndex = Math.floor(
      Math.random() * data[0].data.children.length
    );
    const children = data[0].data.children[randomIndex];
    const permaLink = children.data.permalink;
    const url = `https://reddit.com${permaLink}`;
    const image = children.data.url;

    const embed = new MessageEmbed()
      .setTitle(children.data.subreddit)
      .setURL(url)
      .setImage(image)
      .setColor("#ffcfcf")
      .setFooter(message.author.username)
      .setTimestamp();

    message.channel.send(embed);
  } catch {
    return message.channel.send(
      "Subreddit was not found or an error occurred"
    );
  }
},

module.exports.config = {
    name: "reddit",
    description: "Get a meme from a subreddit of your choice!",
    usage: "s!reddit",
    accessableby: "Members",
    aliases: []
}
