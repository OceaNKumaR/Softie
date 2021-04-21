const Discord = require('discord.js');
const botconfig = require('../botsettings.json');
const Schema = require('../models/welcome-schema.js');
const { MessageEmbed } = require('discord.js')
const inlinereply = require('discord-reply');

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You do not have permissions to use this command!");

    const channel = message.mentions.channels.first();
    if(!channel) return message.reply("Please specify a channel you would like to be your welcome channel! `Usage: s!set-welcome <channel>`");

 const msg = args.slice(1).join(" ");
   if(!msg) return message.reply("Please specify a welcome message! `Usage: s!set-welcome <channel> <message>`");

    Schema.findOne({ guildId: message.guild.id }, async (err, data) => {
        if (data){
            data.channelId = channel.id;
            data.welcomeMsg = msg;
            data.save();
        } else {
            new Schema({
                guildId: message.guild.id,
                welcomeMsg: msg,
                channelId: channel.id,
            }).save();
        }
        let embed = new MessageEmbed()
        .setTitle('<:Tick:776376662862462976> Success!')
        .setDescription(`**Welcome channel is now set as:**\n ${channel}! \n\n **Welcome message is now set as:**\n ${msg}`)
        .setColor("#ffcfcf")
        message.lineReply(embed)

    })
}


module.exports.config = {
    name: "set-welcome",
    description: "Sets Welcome Channel",
    usage: "s!set-welcome",
    accessableby: "Admin",
    aliases: []
}