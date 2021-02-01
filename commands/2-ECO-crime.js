const Discord = require('discord.js');
const botconfig = require('../botsettings.json');
const mongoose = require("mongoose");
const Data = require('../schema/data')
const { model } = require('../schema/data')
const { MessageEmbed } = require('discord.js')
const ms = require('ms')

module.exports.run = async (bot, message, args) => {


    let responses = ["You do a heist on the EU bank for",
"You jump the old lady walking down the street. She had"]

let response = Math.floor(Math.random() * responses.length)

    let timeout = 3600000000
    let reward = Math.floor(Math.random()* Math.floor(300))
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
                crime:Date.now()
            })
            newD.save().catch(err => console.log(err))
             return message.channel.send("Here are your first Work reward")
        }else{
            if(timeout -(Date.now()-data.crime)>0){

                let embed = new MessageEmbed()
                .setTitle("Slow down")
                .setDescription(`<:slowmode:805818971881996359> You need to wait 1h to get more money`)
                .setColor("#ffcfcf") 

                message.channel.send(embed)
            }else{
                data.Money +=reward
                data.work =Date.now()
                data.save().catch(err => console.log(err))

                let embed = new MessageEmbed()
                .setDescription(`${responses[response]} **$${reward}** 😈`)
                .setTimestamp()
                .setColor("#ffcfcf")
                message.channel.send(embed)
            }
        }
    })
}


module.exports.config = {
    name: "crime",
    description: "Work hard to get Money.",
    usage: "s!crime",
    accessableby: "Members",
    aliases: []
}