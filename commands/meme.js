const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const data = await fetch(
        "https://www.reddit.com/r/dankmemes/random/.json"
      ).then((res) => res.json());
  
      const children = data[0].data.children[0];
      const permaLink = children.data.permalink;
      const url = `https://reddit.com${permaLink}`;
      const image = children.data.url;
      const title = children.data.title;
      const upvotes = children.data.ups;
      const comments = children.data.num_comments;
  
      const embed = new MessageEmbed()
        .setColor("ORANGE")
        .setTitle(`${title}`)
        .setURL(url)
        .setImage(image)
        .setFooter(`👍 ${upvotes} | 💬 ${comments}`);
  
      message.channel.send({ embed });
    },
   

module.exports.config = {
    name: "meme",
    description: "shows meme",
    usage: "s!meme",
    accessableby: "Members",
    aliases: []
}