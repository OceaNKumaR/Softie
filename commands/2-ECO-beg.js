const Discord = require('discord.js');
const botconfig = require('../botsettings.json');
const mongoose = require("mongoose")
const {MessageEmbed} = require("discord.js")
const Data = require('../schema/data')
const data = require('../schema/data')
const ms = require('ms')

module.exports.run = async (bot, message, args) => {

    let timeout = 120000;
    let reward = Math.floor(Math.random()* Math.floor(100)) //You can set any number

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

                beg:Date.now()
            })
            newD.save().catch(err => console.log(err));
            let member = message.guild.members.cache.random();
            return message.channel.send(`**You beg for the first time and you receive $${reward} from ${member}**`)
        }else{
            if(timeout- (Date.now()-data.beg) >0){
                let time = ms(timeout -(Date.now()-data.beg));

                let embed = new MessageEmbed()
                .setDescription(`You can beg again in **2m**`)
                .setColor("#ffcfcf")

                message.channel.send(embed)
            }else{
                data.Money +=reward
                data.beg = Date.now()
                data.save().catch(err => console.log(err));
                let member = message.guild.members.cache.random();
                let embed = new MessageEmbed()
                .setDescription(`**You beg for some money and ${member} finally gives you $${reward}**`)
                .setColor("#ffcfcf")
                message.channel.send(embed)

            }
        }
    })
}


module.exports.config = {
    name: "beg",
    description: "Begs for Money",
    usage: "s!beg",
    accessableby: "Members",
    aliases: []
}