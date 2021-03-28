const discord = require("discord.js")
const botconfig = require("../botsettings.json");
const Schema = require("../schema/chatbot.js")


module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You do not have permissions to use this command')

    const channel = message.mentions.channels.first() || message.channel;
    Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
        if(data) data.delete();
        new Schema ({
            Guild: message.guild.id,
            Channel: channel.id,
            }).save();
    message.channel.send(`Saved chatbot channel to ${channel}`)
});

}

module.exports.config = {
    name: "set-chatbot",
    description: "Sets the chat bot's channel.",
    usage: "s!set-chatbot",
    accessableby: "Members",
    aliases: []
}