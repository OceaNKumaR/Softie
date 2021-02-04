const Discord = require('discord.js');
const botconfig = require('../botsettings.json');
const mongoose = require("mongoose");
const Data = require('../schema/data')
const { model } = require('../schema/data')
const { MessageEmbed } = require('discord.js')
const ms = require('ms')

module.exports.run = async (bot, message, args) => {


    let responses = ["You went hunting in the woods and brought back a Skunk :skunk:! and sold it in",
"You went hunting in the woods and brought back a Duck and sold it in",
"You went hunting in the woods and brought back a Snake and sold it in",
"You went hunting in the woods and brought back a Lion (LMFAO) and sold it in",
"You went hunting in the woods and brought back a Deer and sold it in",
"lmao you are terrible, you found nothing to hunt but you found",
"lol you suck, you found nothing but the magic princess gave you :0",
"You went hunting in the woods and brought back a Panda and sold it in",
"You went hunting in the woods and brought back a Baby Elephant and sold it in",
"You went hunting in the woods and brought back a Chimpanzee and sold it in"]

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
                hunt:Date.now()
            })
            newD.save().catch(err => console.log(err))
     
        }else{
            if(timeout -(Date.now()-data.hunt)>0){

                let embed = new MessageEmbed()
                .setTitle("Slow down Im not made of money dude")
                .setDescription(`<:slowmode:805818971881996359> You need to wait 30s to get more money`)
                .setColor("#ffcfcf") 

                message.channel.send(embed)
            }else{
                data.Money +=reward
                data.hunt =Date.now()
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
    name: "hunt",
    description: "Hunt animal get sell them to get money.",
    usage: "s!hunt",
    accessableby: "Members",
    aliases: []
}