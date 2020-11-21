const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

exports.run = async (client, message, args) => {

    const embed = new Discord.MessageEmbed()
    .setColor('#ffcfcf')
    .setTitle(`SUPPORT SERVER INVITE`)
    .setDescription(`[Click Here To Join Support Server !](https://discord.gg/k5KM6kP)`)
    .setThumbnail('https://images-ext-1.discordapp.net/external/bNKUPg-G4niewp0HBawHWb-hNF8FG5iqOhWDK5NEiuA/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/766228516647337984/b64a609c5eec1830d987ce2bceb4f7ac.webp?width=474&height=474')
    message.channel.send(embed);

}

module.exports.config = {
    name: "support",
    description: "need support?",
    usage: "s!support",
    accessableby: "Members",
    aliases: []
}