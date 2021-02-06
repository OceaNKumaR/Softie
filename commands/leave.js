const Discord = require('discord.js');
const botconfig = require('../botsettings.json');
const ownerid = "494738882617933830";
const { MessageEmbed } =require('discord.js')

module.exports.run = async (bot, message, args) => {

    let owner = '494738882617933830'

    if (!owner.includes(message.author.id)) return;

    

    if (!message.guild.available) return this.client.logger.info(`Guild "${message.guild.name}" (${message.guild.id}) is unavailable.`);

    message.reply("Are you sure you want me to leave this guild? I can only be added back by users with the `MANAGE_GUILD` (Manage Server) permission. **(Y/N)**");

    return message.channel.awaitMessages(m => m.author.id === message.author.id, {
        "errors": ["time"],
        "max": 1,
        time: 20000
    }).then(resp => {
        if (!resp) return message.channel.send("Timed out.");
        resp = resp.array()[0];
        const validAnswers = [
            "Y",
            "N",
            "y",
            "n"
        ];
        if (validAnswers.includes(resp.content)) {
            if (resp.content === "N" || resp.content === "n") {
                return message.channel.send("Yay, looks like I won't be leaving. :D");
            } else if (resp.content === "Y" || resp.content === "y") {
                message.guild.leave()
                .then(g => this.client.log.info(`☑️ | Left guild via command: ${g}`))
                .catch(e => {
                    this.client.log.error(e);
                    returnmessage.channel.send(`I tried to leave, but couldn't. An error occurred:\n\```${e.message}\````);
                });
            }
        }
    });
}

module.exports.config = {
    name: "leave",
    description: "Leaves the current server",
    usage: "s!leave",
    accessableby: "Owner",
    aliases: []
}
