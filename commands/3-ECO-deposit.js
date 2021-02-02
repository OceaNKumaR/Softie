const Discord = require('discord.js');
const botconfig = require('../botsettings.json');
const mongoose = require("mongoose")
const {MessageEmbed} = require("discord.js")
const Data = require('../schema/data')
const data = require('../schema/data')
const ms = require('ms')

module.exports.run = async (bot, message, args) => {


    let reward = 500

    Data.findOne({
        id:message.author.id
    },(err,data)=>{
        if(err) console.log(err);
        if(!data){
            const newD = new Data({
                id:message.author.id,
                Money:0,
                Bank:reward,
                lb:"all",

                shop:Date.now()
            })
            newD.save().catch(err => console.log(err));
            
        }else{

                data.Money -=reward
                data.Bank +=reward
                data.shop = Date.now()
                data.save().catch(err => console.log(err));
                let member = message.guild.members.cache.random();
                let embed = new MessageEmbed()
                .setDescription(`👍 **You Successfully Added $${reward} to Your Bank Account.**`)
                .setColor("#ffcfcf")
                .setTimestamp()
                message.channel.send(embed)

            }
        }
    )

    }


module.exports.config = {
    name: "deposit",
    description: "Adds money to bank",
    usage: "s!deposit",
    accessableby: "Member",
    aliases: ["dep"]
}