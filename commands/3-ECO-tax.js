const Discord = require('discord.js');
const botconfig = require('../botsettings.json');
const mongoose = require("mongoose");
const Data = require('../schema/data')
const { model } = require('../schema/data')
const { MessageEmbed } = require('discord.js')
const ms = require('ms')

module.exports.run = async (bot, message, args) => {


    let timeout = 86400000
    let reward = 100000
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
                tax:Date.now()
            })
            newD.save().catch(err => console.log(err))
             
        }else{
            if(timeout -(Date.now()-data.tax)>0){

                let embed = new MessageEmbed()
                .setTitle("Slow down")
                .setDescription(`<:slowmode:805818971881996359> You need to wait 24h to pay us more money. 😈`)
                .setColor("#ffcfcf") 

                message.channel.send(embed)
            }else{
                data.Money -=reward
                data.tax =Date.now()
                data.save().catch(err => console.log(err))

                let embed = new MessageEmbed()
                .setTitle(`Taxes are good...`)
                .setDescription(`**You paid $${reward} to the Government LMFAO**`)
                .setFooter('Paying taxes regularly provide you discount in shop.')
                .setColor("#ffcfcf")
                .setTimestamp()
                message.channel.send(embed)
            }
        }
    })
}


module.exports.config = {
    name: "tax",
    description: "Pays Tax to the Government.",
    usage: "s!tax",
    accessableby: "Members",
    aliases: []
}