const Discord = require('discord.js');
const botconfig = require('../botsettings.json');
const { MessageEmbed } = require("discord.js");
const mongoose = require("mongoose")
const Data = require('../schema/data')
const { model } = require('../schema/data')

module.exports.run = async (bot, message, args) => {

    Data.findOne({
        id: message.author.id
    },(err,data)=>{
        if(!data){
            const newD = new Data ({
                id:message.author.id,
                Money:100,
                daily:0,
                Bank:0,
            })
            newD.save().catch(err => console.log(err));
            let user = message.mentions.users.first() || message.author ;
            return message.channel.send({embed:{color:"#ffcfcf",description:`${user.tag} you have been 100 coins as starter`}})
        }else{
            let user = message.mentions.users.first() || message.author ;
            let embed = new MessageEmbed()
            .setTitle(`Balance of ${user.tag}`)
            .setDescription(`💵 **Money: ${data.Money}\n🏦 Bank: ${data.Bank}**` )
            .setColor("#ffcfcf")
            message.channel.send(embed)
        }
    })
}


module.exports.config = {
    name: "balance",
    description: "Shows Current Balance",
    usage: "s!balance",
    accessableby: "Members",
    aliases: ["bal"]
}