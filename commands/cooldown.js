const usedCommand = new Set();
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if(usedCommand.has(message.author.id)){
        message.reply('You cannot use the command beacuse of the cooldown.')
    } else {
        message.reply('Your not in a cooldown anymore.')
        
        
        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 4000); 
    }
}

module.exports.config = {
    name: "cooldown",
    description: "a Simple test of the Cooldown Command.",
    usage: "s!cooldown",
    accessableby: "Members",
    aliases: []
}
