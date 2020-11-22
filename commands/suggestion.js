const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const { WebhookClient, MessageEmbed } = require('discord.js')

exports.run = async (bot, message, args) => {
    //https://discordapp.com/api/webhooks/780014023336787978/Hf1QXfzWARvED3FOupNXSeB9MYDMiBgTtkbcfsgE6r4YSjH1q7xYfsTUWA13dcCiGY7p

    const wc = new WebhookClient('780014023336787978', 'Hf1QXfzWARvED3FOupNXSeB9MYDMiBgTtkbcfsgE6r4YSjH1q7xYfsTUWA13dcCiGY7p')
    const embed = new MessageEmbed()
        .setTitle("Video suggestion").setColor('GREEN').setTimestamp().setDescription(args.join(" "))
wc.send({
    username : message.author.tag,
    avatarURL : message.author.displayAvatarURL({ dynamic : true }),
    embeds : [embed]
})
}

module.exports.config = {
    name: "suggest",
    description: "suggest a video topic",
    usage: "s!suggest",
    accessableby: "Members",
    aliases: []
}