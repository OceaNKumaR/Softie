const Discord = require("discord.js");
const botconfig = require("../botsettings.json");
const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {

        const role = message.guild.roles.cache.find((r) => r.name === 'amongus-moderator')
        //--------------------------------------------------------------------------------------------------------
        if (!role) return message.channel.send(`Among Us has not been setup, please run \`${prefix}setup\` to set it up.`)
        if (!message.member.roles.cache.has(role.id)) return message.channel.send(new MessageEmbed()
            .setDescription(`This command can only be used by members that has ${role}, role.`).setColor('#ffcfcf')
        )
        let channel = message.member.voice.channel;
        for (let member of channel.members.filter((member) => !member.user.bot)) {
            await member[1].voice.setDeaf(false).then(member[1].voice.setMute(false));
        }
        message.channel.send('Reset Complete')
    }


module.exports.config = {
    name: "reset",
    description: "**Resets** among us game!",
    usage: "s!reset",
    accessableby: "Admins",
    aliases: []
}