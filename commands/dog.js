const discord = require("discord.js")
const botconfig = require("../botsettings.json");
const { MessageEmbed } = require("discord.js");
const api = require("imageapi.js");

module.exports.run = async (bot, message, args) => {
        let subreddits = ["dog", "dogs", "puppy", "dogpics"];
        let subreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
        let img = await api(subreddit, true);
        const Embed = new MessageEmbed()
          .setTitle(`🐶 Woof!`)
          .setURL(`https://reddit.com/r/${subreddit}`)
          .setColor("RANDOM")
          .setImage(img);
        message.channel.send(Embed);
      }
    
    module.exports.config = {
      name: "dog",
      description: "Get a dog picture",
      usage: "?dog",
      accessableby: "Members",
      aliases: []
  }
