const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const translate = require('translate-google')

module.exports.run = async (bot, message, args) => {
    translate(args.join(" "), {to : 'en'}).then(res => {
    message.channel.send(res)
}).catch(err => {
    message.channel.send('An error has occured')
    console.log(err)
})
}

module.exports.config = {
    name: "translate",
    description: "translate your word to english",
    usage: "s!translate",
    accessableby: "Members",
    aliases: []
}