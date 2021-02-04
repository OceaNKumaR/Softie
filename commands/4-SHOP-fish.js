const Discord = require('discord.js');
const botconfig = require('../botsettings.json');
const mongoose = require("mongoose");
const Data = require('../schema/data')
const { model } = require('../schema/data')
const { MessageEmbed } = require('discord.js')
const ms = require('ms')

module.exports.run = async (bot, message, args) => {


    let responses = ["You cast out your line and brought back 2 Common Fish and sold it in",
"You cast out your line and brought back 4 Common Fish and sold it in",
"You cast out your line and brought back 1 Common Fish and sold it in",
"You cast out your line and brought back a Whale and sold it in",
"You cast out your line and brought back Golden fish and sold it in"]

let response = Math.floor(Math.random() * responses.length)

    let timeout = 30000;
    let reward = Math.floor(Math.random()* Math.floor(150))
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
                fish:Date.now()
            })
            newD.save().catch(err => console.log(err))
     
        }else{
            if(timeout -(Date.now()-data.fish)>0){

                let embed = new MessageEmbed()
                .setTitle("Slow down Im not made of money dude")
                .setDescription(`<:slowmode:805818971881996359> You need to wait 30s to get more money`)
                .setColor("#ffcfcf") 

                message.channel.send(embed)
            }else{
                data.Money +=reward
                data.fish =Date.now()
                data.save().catch(err => console.log(err))

                let embed = new MessageEmbed()
                .setDescription(`${responses[response]} **$${reward}** <:katdalega:806425816782340116>`)
                .setColor("#ffcfcf")
                .setTimestamp()
                message.channel.send(embed)
            }
        }
    })
}


module.exports.config = {
    name: "fish",
    description: "Do fishing and sell them to get money.",
    usage: "s!fish",
    accessableby: "Members",
    aliases: []
}