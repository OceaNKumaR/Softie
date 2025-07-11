
const { MessageEmbed } = require('discord.js')
const Discord = require("discord.js");
const botconfig = require("../botsettings.json");

exports.run = async (client, message, args) => {
        const role = message.guild.roles.cache.find((r) => r.name === 'amongus-moderator')
        //--------------------------------------------------------------------------------------------------------
        if (!role) return message.channel.send(`Among Us has not been setup, please run \`${prefix}setup\` to set it up.`)
        if (!message.member.roles.cache.has(role.id)) return message.channel.send(new MessageEmbed()
            .setDescription(`This command can only be used by members that has ${role}, role.`).setColor('RED')
        )
        let channel = message.member.voice.channel;
        for (let member of channel.members.filter((member) => !member.user.bot)) {
            await member[1].voice.setDeaf(true);
        }
        message.channel.send(
            new MessageEmbed()
                .setTitle("The Game Starts!")
                .setDescription(
                    "All users in the voice channel has been deafened, nobody can hear nobody.\nPlay smart :)))))))."
                )
                .setColor("#ffcfcf")
                .setThumbnail("https://i.imgur.com/vKF42bH.png")
                .setTimestamp()
        );

    }

module.exports.config = {
    name: "start",
    description: "Command is used when the game has **started** and it will deafen users in the call.",
    usage: "s!start",
    accessableby: "Admins",
    aliases: []
}