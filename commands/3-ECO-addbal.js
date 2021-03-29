const Discord = require('discord.js');
const botconfig = require('../botsettings.json');
const mongoose = require("mongoose")
const {MessageEmbed} = require("discord.js")
const Data = require('../schema/data')
const data = require('../schema/data')
const ms = require('ms')
const ownerid = "494738882617933830";
const inlinereply = require('discord-reply');

module.exports.run = async (bot, message, args) => {

    if (message.author.id == ownerid) {
        if (!message.guild.me.hasPermission("ADMINISTRATOR"))
          return message.channel
            .send("I Dont Have Permissions")
            .then(msg => msg.delete({ timeout: 5000 }));

    let reward = 10000

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

                data.Money +=reward
                data.shop = Date.now()
                data.save().catch(err => console.log(err));
                let member = message.guild.members.cache.random();
                let embed = new MessageEmbed()
                .setDescription(`👍 **You Successfully Added $${reward} Into Your Account.**`)
                .setColor("#ffcfcf")
                .setTimestamp()
                message.lineReply(embed)

            }
        }
    )

    }
}

module.exports.config = {
    name: "addbalance",
    description: "Adds money",
    usage: "s!addbalance",
    accessableby: "Owner",
    aliases: ["addbal"]
}