const Discord = require('discord.js');
const botconfig = require('../botsettings.json');
const mongoose = require("mongoose")
const {MessageEmbed} = require("discord.js")
const Data = require('../schema/data')
const data = require('../schema/data')
const ms = require('ms')

module.exports.run = async (bot, message, args) => {

    let reward = 20000

    Data.findOne({
        id:message.author.id
    },(err,data)=>{
        if(err) console.log(err);
        if(!data){
            const newD = new Data({
                id:message.author.id,
                Money:reward,
                Bank:0,
                lb:"all",

                shop:Date.now()
            })
            newD.save().catch(err => console.log(err));
            
        }else{

                data.Money -=reward
                data.shop = Date.now()
                data.save().catch(err => console.log(err));
                let member = message.guild.members.cache.random();
                let embed = new MessageEmbed()
                .setDescription(`👍 **You Successfully Purchased a Fishing Pole in $${reward}**\n\nNow you can do s!fish To hunt animal.`)
                .setColor("#ffcfcf")
                .setTimestamp()
                message.channel.send(embed)

            }
        }
    )

    }

module.exports.config = {
    name: "buy-fishingpole",
    description: "Buys a Fishing Pole",
    usage: "s!buy-fishingpole",
    accessableby: "Members",
    aliases: []
}