const Discord = require('discord.js');
const botsettings = require('../botsettings.json');
let prefix = botsettings.prefix;
const pagination = require('discord.js-pagination');

const { MessageEmbed } = require('discord.js')

module.exports.run = async (bot, message, args) => {


    const main = new Discord.MessageEmbed()
    .setTitle('🛒 Shop')
    .setDescription(`**Welcome to Softie's Shop**\n\n📕 **Page 1: Lifestyle Items**\n📗 **Page 2: Tools**\n📘 **Page 3: Fruits**`)
    .setColor("#ffcfcf")
    .setTimestamp()


    const lifestyle = new Discord.MessageEmbed()
    .setTitle('📕 Lifestyle Items')
    .setDescription(`You can do flex with these items.\n\n🥵 **Fresh Nudes: 1500** [${prefix}buy-nudes]\n🚗 **Car: 10k**[${prefix}buy-car]\n🏍️ **Bike: 5k** [${prefix}buy-bike]\n🏰 **Mansion: 100k** [${prefix}buy-mansion]`)
    .setColor("#ffcfcf")
    .setTimestamp()


    const tools = new Discord.MessageEmbed()
    .setTitle('📗 Tools')
    .setDescription(`You can use these tools to get some money.\n\n<:pole:806134237681025045> **Fishing Pole: 20k** [${prefix}buy-fishingpole]\n<:hunting:806133976397643776> **Hunting Rifle: 20k** [${prefix}buy-huntingrifle]`)
    .setColor("#ffcfcf")
    .setTimestamp()
    

    const fruits = new Discord.MessageEmbed()
    .setTitle('📘 Fruits')
    .setDescription(`These items provides you energy.\n\n🍎 **Apple: 50** [${prefix}buy-apple]\n🍑 **Peach: 80** [${prefix}buy-peach]\n🍌 **Banana: 40** [${prefix}buy-banana]\n🍇 **Grapes: 100** [${prefix}buy-grapes]`)
    .setColor('#ffcfcf')
    .setTimestamp()
    




const pages = [
    main,
    lifestyle,
    tools,
    fruits
]

const emojiList = ["⏪", "⏩"];

     const timeout = '120000';

     pagination(message, pages, emojiList, timeout)
 

}
module.exports.config = {
    name: "shop",
    description: "Show list of items.",
    usage: "s!shop",
    accessableby: "Members",
    aliases: ["store"]
}