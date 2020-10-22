const Discord = require("discord.js")
const botconfig = require("../botsettings.json");


const { MessageEmbed } = require("discord.js");

module.exports = {
    execute(bot, message, args){
        const replies = ["Hell, yes", "no", "okay", "Not in a million years"];

        const reply = replies[Math.floor(Math.random() * replies.length)];
    if(!reply){
            message.channel.send("you need to specify your question!")
        }else
       {
        const embed = new MessageEmbed()
            .setTitle("8ball")
            .setTitle(`🎱 ${reply}`)
            .setColor("ORANGE")
            .setFooter(message.author.username)
            .setTimestamp();
        
        message.channel.send(embed);
       }
    }
};

  module.exports.config = {
    name: "8ball",
    description: "There is a big chance I insult you",
    usage: "?8ball",
    accessableby: "Members",
    aliases: []
}
