const Discord = require('discord.js');
const botconfig = require('../botsettings.json');
const ownerid = "494738882617933830";
const { MessageEmbed } =require('discord.js')

module.exports.run = async (bot, message, args) => {

    let owner = '494738882617933830'

    if (!owner.includes(message.author.id)) return;

    

    let embed = new MessageEmbed()
    .setTitle("**Owner Only Commands**")
    .setDescription('**No 1: eval \n No 2: addbalance \n No 3: serverlist \n No 4: leave \n No 5: bsize \n No 6: shell**')
    .setColor("#ffcfcf")

    message.channel.send(embed)

    
}
module.exports.config = {
    name: "owner",
    description: "Shows all owner only commands",
    usage: "s!owner",
    accessableby: "Owner",
    aliases: []
}
