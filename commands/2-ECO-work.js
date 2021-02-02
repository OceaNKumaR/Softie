const Discord = require('discord.js');
const botconfig = require('../botsettings.json');
const mongoose = require("mongoose");
const Data = require('../schema/data')
const { model } = require('../schema/data')
const { MessageEmbed } = require('discord.js')
const ms = require('ms')

module.exports.run = async (bot, message, args) => {


    let responses = ["You streamed fortnite and got", 
"Thanks for helping by giving the kids Christmas presents they thanked you with a song and a donation of",
"You catch fish for a few hours and give them to your boss. He pays you",
"Work at the ice-cream shop of your childhood dreams and earn",
"You worked for a game studio as their program team member and earned",
"You milk cows for a few hours because the farmer is sick! You are paid",
"You work at a winery and crush grapes for awhile. You are paid",
"Instead of going to work, you decided to look for money on the ground. Fortunately enough, you found",
"You had a fruitful day at the office today and earned",
"You help a newcomer set up a camp and he pays you",
"You work as a child birth educator and earn",
"You make a YouTube video, and get 3 views! Someone tipped",
"You enter a website contest and beat Club Penguin, Twitter, and Facebook. Receive",
"You come home full of sweat after a hard day of boxing, the sponsors give you",
"You see someone struggling to lift a box into their car, you rush over to help them before they hurt themselves. After helping them, they graciously give you",
"You work as a professional snuggler and earn",
"You meet Mia Khalifa and she gave a you night with her ;) and",
"You work as a zombie for The Walking Dead AMC show and earn",
"You create and launch a game on Roblox, it becomes a hit! You get money from people buying early access, in-game passes, and currency in-game, you convert the Robux you earn into server money you got",
"You cleaned 200 toilets in the prison. The lazy janitor thanked you and gave you",
"You work extra hard at the office today, but instead of gaining a promotion, you earn a donut and",
"You work as a paper towel sniffer and earn",
"You work as a toy manufacturer and sell toys to kids for",
"You bake cupcakes and receive",
"Somehow you managed to get a job. Milking space cows. Here's",
"You gave yourself some money that you didn't even have! What is this wizardry...",
"You work as an Irish dancer and earn",
"You work as a human scarecrow (yes.. you're that ugly) and earn",
"You work as an ostrich baby sitter and earn",
"You are kidnapped and taken to an underground coliseum where you fought off monsters with people you've never met before. You earn"]

let response = Math.floor(Math.random() * responses.length)

    let timeout = 3600000
    let reward = Math.floor(Math.random()* Math.floor(500))
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
                work:Date.now()
            })
            newD.save().catch(err => console.log(err))
             return message.channel.send("Here are your first Work reward")
        }else{
            if(timeout -(Date.now()-data.work)>0){

                let embed = new MessageEmbed()
                .setTitle("Slow down Im not made of money dude")
                .setDescription(`<:slowmode:805818971881996359> You need to wait 30m to get more money`)
                .setColor("#ffcfcf") 

                message.channel.send(embed)
            }else{
                data.Money +=reward
                data.work =Date.now()
                data.save().catch(err => console.log(err))

                let embed = new MessageEmbed()
                .setDescription(`${responses[response]} **$${reward}** 😀`)
                .setColor("#ffcfcf")
                .setTimestamp()
                message.channel.send(embed)
            }
        }
    })
}


module.exports.config = {
    name: "work",
    description: "Work hard to get Money.",
    usage: "s!work",
    accessableby: "Members",
    aliases: []
}