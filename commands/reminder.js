const { Client, Message, MessageEmbed, Discord } = require('discord.js');
const botconfig = require('../botsettings.json');
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('<a:noheckno:770923367074627595> You do not have permission to use this command. You must have `MANAGE_MESSAGES` perm to use this command!')

    let time = args[0]
    if (!time) return message.channel.send('What is the time when the reminder should be off? **Usage:** `s!reminder <time>`')

    if (ms(time) > ms('1w')) return message.reply(`${message.author.tag} You cannot set your reminder more than 1w.`)

    let alert = args.slice(1).join(" ")
    if (!alert) return message.channel.send('What is the rimnder for? **Usage:** `s!reminder <time> <reason>`')

    let embed = new MessageEmbed()
    .setAuthor(`<:Tick:776376662862462976> ${message.author.tag} Your reminder has been set!`)
    .setColor('#ffcfcf')
    .addField(`Time:`, `\`${time}\``, true )
    .addField(`For:`, `\`${alert}\``, true)
    message.channel.send(embed)

    setTimeout(() => {
        let DP = new MessageEmbed()
        .setAuthor(`<:slowmode:805818971881996359> ${message.author.tag} Your reminder is off`)
        .setColor('#ffcfcf')
        .addField(`Duration:`, `\`${time}\``, true)
        .addField(`Reason:`, `\`${alert}\``, true)
        message.channel.send(DP)
    }, ms(time))


}
module.exports.config = {
    name: "reminder",
    description: "Sets Reminder",
    usage: "s!reminder",
    accessableby: "Admin",
    aliases: []
}