const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {

    let reason = args.slice(1).join(' ');
    let embed = new Discord.MessageEmbed()
    .setTitle(`Bug Found !`)
    .setDescription(`Reported by ${message.author} | Id: ${message.author.id} \n Server : ${message.guild.name} | Id: ${message.guild.id} \n Reason : ${reason}`)
    .setColor('#ffcfcf')
    .setTimestamp()

message.reply(`Bug Reported !`)
let chan = await bot.channels.cache.get('779594809441910804');
await chan.send(embed).catch(err=>{
    console.log(err);
})

}

module.exports.config = {
    name: "bug",
    description: "report a bug",
    usage: "s!bug",
    accessableby: "Members",
    aliases: []
}