const Discord = require('discord.js');
const botconfig = require("../botsettings.json");
const pagination = require('discord.js-pagination');

module.exports.run = async (bot, message, args) => {

    const main = new Discord.MessageEmbed()
    .setTitle('__**Plugins**__')
    .setDescription(`**Info About Pages**\n\n📕 **Page 1: Chat Bot**\n📔 **Page 2: Welcome System**\n📙** Page 3: Logging System**\n📘 **Page 4: Server Stats**\n📔 **Page 5: Chat Bot**`)
    .setColor("#ffcfcf")
    .setTimestamp()

    const chatbot = new Discord.MessageEmbed()
    .setTitle('**ChatBot**')
    .setDescription(' The Bot chats with you lol.\n\n Usage: ```s!set-chatbot```')
    .setImage('https://cdn.discordapp.com/attachments/825597696793509918/827780193099317299/Capture.PNG')
    .setColor("#ffcfcf")
    .setTimestamp()

    const welcome = new Discord.MessageEmbed()
    .setTitle('**Welcome system**')
    .setDescription('A Welcomer system with custom welcome messages.\n\n Usage: ```s!set-welcome```')
    .setImage('https://cdn.discordapp.com/attachments/805432268310577164/833279323184037898/23.PNG')
    .setColor("#ffcfcf")
    .setTimestamp()

    const logging = new Discord.MessageEmbed()
    .setTitle('**Logging System**')
    .setDescription('This System allows you to log all events in a Channel.\n\n Usage: ```s!set-logchannel```')
    .setImage('https://cdn.discordapp.com/attachments/827770875255980032/833281572920098836/3.PNG')
    .setColor("#ffcfcf")
    .setTimestamp()

    const serverstats = new Discord.MessageEmbed()
    .setTitle('**Server Stats**')
    .setDescription('Track the amount of people in your server at all times.\n\n Usage: ```Under Maintenance!```')
    .setImage('https://cdn.discordapp.com/attachments/827770875255980032/833282333469704192/232323.PNG')
    .setColor("#ffcfcf")
    .setTimestamp()



const pages = [
    main,
    chatbot,
    welcome,
    logging,
    serverstats
]

const emojiList = ["⏪", "⏩"];

     const timeout = '120000';

     pagination(message, pages, emojiList, timeout)
 

}

module.exports.config = {
    name: "help-plugins",
    description: "iam gae",
    usage: "s!help-plugins",
    accessableby: "Members",
    aliases: []
}