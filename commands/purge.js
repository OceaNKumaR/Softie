const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const amount = args.join(" ");
        
    if(!message.member.hasPermission("ADMINISTRATOR")) {
  return message.channel.send(`You do not have the permission to use that.`)
        }

    if(!amount) return message.reply('please provide an amount of messages for me to delete')

    if(amount > 100) return message.reply(`you cannot clear more than 100 messages at once`)

    if(amount < 1) return message.reply(`you need to delete at least one message`)

    await message.channel.messages.fetch({limit: amount}).then(messages => {
        message.channel.bulkDelete(messages
)});


message.channel.send('Success!')

}


module.exports.config = {
    name: "purge",
    description: "deletes messages in a channel!",
    usage: "?purge",
    accessableby: "Admin",
    aliases: []
}
