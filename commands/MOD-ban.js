const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const { MessageEmbed } = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let xdemb = new MessageEmbed()
    .setColor("#00ff00")
    .setTitle("Ban Command")
    .addField("Description:", `Ban a member`, true)
    .addField("Usage:", `!ban [user] [reason]`, true)
    .addField("Example:", `!ban @fool spam`)

    if(!message.member.hasPermission("BAN_MEMBERS") && message.author.id !== "291221132256870400") return message.channel.send("<:nie:778532563446661160> Sorry you don't have permission to use this!");

    let member = message.mentions.members.first();
    if(!member) return message.channel.send(xdemb)
    if(!member.bannable) return message.channel.send("<:nie:778532563446661160> I can't ban this user!")
    if(member.user.id === "494738882617933830") return message.channel.send("<:nie:778532563446661160> I can't ban my owner!")

    if(member.id === message.author.id) return message.channel.send("<:nie:778532563446661160> You can't ban your self")

    let reason = args.slice(1).join(" ");

    if(!reason) {
        res = "No reason given";
    } else {
        res = reason
    }

    await member.ban({reason: reason}).catch(error => message.channel.send(`Sorry, I couldn't ban because of: ${error}`));

    let bean = new MessageEmbed()
    .setColor("#ffcfcf")
  .setDescription(`<:TickYES:778532157001957390> ***${member.user.tag} was banned*** | ${res}`)

    message.channel.send(bean)

    message.delete()

}


module.exports.config = {
    name: "ban",
    description: "Bans a Users",
    usage: "s!ban",
    accessableby: "Admins",
    aliases: []
}