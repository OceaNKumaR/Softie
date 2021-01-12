const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const { tictactoe } = require('reconlx')

module.exports.run = async (bot, message, args) => {

    const member = message.mentions.members.first() 
    if(!member)  return  message.channel.send('Please specify a member')

new tictactoe({
    player_two: member, 
    message: message
})

}

module.exports.config = {
    name: "tictactoe",
    description: "play tictactoe with softie :D",
    usage: "s!tictactoe",
    accessableby: "Members",
    aliases: []
}