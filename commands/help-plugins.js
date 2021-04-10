const Discord = require('discord.js');
const botconfig = require("../botsettings.json");
const pagination = require('discord.js-pagination');

module.exports.run = async (bot, message, args) => {

    let owner = '494738882617933830'

    if (!owner.includes(message.author.id)) return;

    const main = new Discord.MessageEmbed()
    .setTitle('__**Plugins**__')
    .setDescription(`**Info About Pages**\n\n📕 **Page 1: Reaction-Roles**\n📗 **Page 2: Word Blacklist System**\n📘 **Page 3: Server Stats**\n📙** Page 4: Logging System**\n📔 **Page 5: Chat Bot**\n📓 **Page 6: Ticket System**`)
    .setColor("#ffcfcf")
    .setTimestamp()

    const chatbot = new Discord.MessageEmbed()
    .setTitle('**ChatBot')
    .setDescription(' The Bot chats with you lol.\n\n Usage: ```s!set-chatbot```')
    .setImage('https://cdn.discordapp.com/attachments/825597696793509918/827780193099317299/Capture.PNG')
    .setTimestamp()

    const serverstats = new Discord.MessageEmbed()
    .setTitle('**Server Stats')
    .setDescription('Track the amount of people in your server at all times.\n\n Usage: ```s!set-membercount```')
    .setTimestamp()

    const logging = new Discord.MessageEmbed()
    .setTitle('**Logging System**')
    .setDescription('This System allows you to log all events in a Channel.\n\n Usage: ```s!set-logchannel```')
    .setTimestamp()



const pages = [
    main,
    chatbot,
    serverstats,
    logging
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