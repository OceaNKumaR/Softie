const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const { hangman } = require('reconlx')

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('<a:noheckno:770923367074627595> **You need manage messages permission.**')
    const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
    if(!channel) return message.reply('<a:noheckno:770923367074627595> **Please specify a channel.** `s!hangman <channel> <your word>`')
    const word = args.slice(1).join(" ")
    if(!word) return  message.reply('<a:noheckno:770923367074627595> **Please specify a word to guess.** s!hangman <channel> <your word>')

    const hang = new hangman({
        message: message,
        word: word,
        client: bot,
        channelID: channel.id,
    })

    hang.start();
}

module.exports.config = {
    name: "hangman",
    description: "Lets play hangman game :D",
    usage: "s!hangman",
    accessableby: "Members",
    aliases: []
}