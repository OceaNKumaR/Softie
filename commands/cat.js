const discord = require("discord.js")
const botconfig = require("../botsettings.json");
const { MessageEmbed } = require("discord.js");
const api = require("imageapi.js");

module.exports.run = async (bot, message, args) => {
        let subreddits = ["cat", "cats", "catpics", "kittens"];
        let subreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
        let img = await api(subreddit, true);
        const Embed = new MessageEmbed()
          .setTitle(`A meme from r/${subreddit}`)
          .setURL(`https://reddit.com/r/${subreddit}`)
          .setColor("RANDOM")
          .setImage(img);
        message.channel.send(Embed);
      }
    
    module.exports.config = {
      name: "cat",
      description: "Get a cat picture",
      usage: "?cat",
      accessableby: "Members",
      aliases: []
  }