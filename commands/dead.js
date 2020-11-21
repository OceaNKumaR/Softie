const { Message } = require("discord.js");
const Discord = require("discord.js");
const botconfig = require("../botsettings.json");
const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
  /**
   * @param {Message} message
   */
    const role = message.guild.roles.cache.find((r) => r.name === 'amongus-moderator')
    //--------------------------------------------------------------------------------------------------------
    if (!role) return message.channel.send(`Among Us has not been setup, please run \`${prefix}setup\` to set it up.`)
    if (!message.member.roles.cache.has(role.id)) return message.channel.send(new MessageEmbed()
        .setDescription(`This command can only be used by members that has ${role}, role.`).setColor('RED')
    )
    const target = message.mentions.members.first();

    if (!target) return message.channel.send("user not found");

    await target.voice.setMute(true);
    message.channel.send(
      `. 　　　。　　　　•　 　ﾟ　　。 　　.\n\n　　　.　　　 　　.　　　　　。　　 。　. 　\n\n.　　 。　　　ﾟ　　<:cyan:779306200860459018>。 . 　　 • 　　　　•\n\n'　　ﾟ　　           **${target.displayName}** was ejected 　 。　•\n\n　.　　　'　　　。　　ﾟ。　　ﾟ。　　ﾟ。　　ﾟ\n\n　　。　　ﾟ　　　•　　　. 　ﾟ　　　　'　 .`
    )
  }


module.exports.config = {
  name: "dead",
  description: "Marks a player as **dead** and mute them from the discord call.",
  usage: "s!dead",
  accessableby: "Admins",
  aliases: []
}