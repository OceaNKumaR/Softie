const Discord = require('discord.js');
const botconfig = require('../botsettings.json');
const mongoose = require("mongoose");
const Data = require('../schema/data')
const { model } = require('../schema/data')
const { MessageEmbed } = require('discord.js')
const ms = require('ms')

module.exports.run = async (bot, message, args) => {


    let responses = ["You do a heist on the EU bank for",
"You jump the old lady walking down the street. She had",
"You went to rob a bank and failed miserably, although you did escape the cops and made it back to your apartment. You found",
"You download and repost an art tutorial on YouTube that gets a lot of hits, next day a mail arrives with.",
"You stole a Mi-24 Helicopter and sold it for",
"You start up a detective service for a few days, but when you finally get business you end up robbing your client for",
"You stole a dog and sold it to the old lady next door for",
"You rob a McDonald's and take",
"You did a crime and for some reason you now have",
"You rob a squirrel of his nuts and pawn them for",
"You steal the Queen's crown and sell it on the black market for",
"You stole a fish and sell it second hand for",
"You decided to embrace your inner dark side, and promptly massacre an entire nation, netting you",
"You post nudes on the internet for",
"You stole a mystery box from Walmart, it was full of turtlenecks valued at",
"You steal a child's piggy bank for",
"You see an old woman drop some money, and take it!",
"You steal someone's Halloween candy and give your friend half of it. He pays you",
"You stole from the cookie jar and gave them to your friend for",
"You're hired as a hitman for",
"You were a hacker and stole Robux",
"You successfully complete a heist and earn",
"You call a few friends and raid a newspaper shop with machetes. The operation is successful, and from the loot you earn",
"What me? No, I didn't commit a crime. Crime-who? Crime-what? Got some money for something that definitely wasn't illegal",
"You start up a detective service for a few days, but when you finally get business you end up robbing your client for",
"You kidnap a citizen and take them hostage for"]

let response = Math.floor(Math.random() * responses.length)

    let timeout = 3600000
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
                .setTitle("Slow down Im not made of money dude")
                .setDescription(`<:slowmode:805818971881996359> You need to wait 30m to get more money`)
                .setColor("#ffcfcf") 

                message.channel.send(embed)
            }else{
                data.Money +=reward
                data.crime =Date.now()
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