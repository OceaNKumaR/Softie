const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You do not have permissions to use this command')
    if(!args[0]) return message.channel.send('Please specify a number of messages to delete ranging from 1 - 99')
    if(isNaN(args[0])) return message.channel.send('Numbers are only allowed')
    if(parseInt(args[0]) > 99) return message.channel.send('The max amount of messages that I can delete is 99')
    await message.channel.bulkDelete(parseInt(args[0]) + 1)
        .catch(err => console.log(err))
    message.channel.send('**Deleted ' + args[0]  + " messages.**")

}


module.exports.config = {
    name: "purge",
    description: "deletes messages in a channel!",
    usage: "s!purge",
    accessableby: "Admin",
    aliases: ["clear"]
}