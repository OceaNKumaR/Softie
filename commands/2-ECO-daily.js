const Discord = require('discord.js');
const botconfig = require('../botsettings.json');
const mongoose = require("mongoose");
const Data = require('../schema/data')
const { model } = require('../schema/data')
const { MessageEmbed } = require('discord.js')
const ms = require('ms')
const inlinereply = require('discord-reply');

module.exports.run = async (bot, message, args) => {

    let timeout = 86400000
    let reward = 1500
    Data.findOne ({
        id:message.author.id

    },(err,data) =>{
        if(err) console.log(err);
        if(!data){
            const newD = new Data({
                id:message.author.id,
                Money:reward,
                Bank:0,
                lb:"all",
                daily:Date.now()
            })
            newD.save().catch(err => console.log(err))
             return message.channel.send("Here are your first daily reward")
        }else{
            if(timeout -(Date.now()-data.daily)>0){
                let embed = new MessageEmbed()
                .setTitle("Slow down")
                .setDescription(`<:slowmode:805818971881996359> You need to wait 24h to get more money`)
                .setColor("#ffcfcf") 

                message.lineReply(embed)
            }else{
                data.Money +=reward
                data.daily =Date.now()
                data.save().catch(err => console.log(err))

                let embed = new MessageEmbed()
                .setTitle("Your daily reward 😇")
                .setDescription(`You received your daily reward of $${reward}`)
                .setColor("#ffcfcf")
                message.lineReply(embed)
            }
        }
    })
}


module.exports.config = {
    name: "daily",
    description: "Gives you money in every 24 hours.",
    usage: "s!daily",
    accessableby: "Members",
    aliases: []
}