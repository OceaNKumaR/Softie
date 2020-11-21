
const { MessageEmbed } = require('discord.js')
const Discord = require("discord.js");
const botconfig = require("../botsettings.json");

exports.run = async (client, message, args) => {

        const role = message.guild.roles.cache.find((r) => r.name === 'amongus-moderator')
        //--------------------------------------------------------------------------------------------------------
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You need ` MANAGE_MESSAGES ` permission to use this command.')
        if(!message.guild.me.hasPermission('ADMINISTRATOR')) return message.channel.send('I need ` ADMINISTRATOR ` permissions to continue.')
        if(!role) {
        let auRole = await message.guild.roles.create({
            data: {
              name: 'amongus-moderator'
            }
          })
          message.channel.send(new MessageEmbed()
            .setTitle('AmongUs Setup Completed')
            .setDescription('For command list do `s!help-among-us`').setColor('#ffcfcf')
          )
        } else {
            message.channel.send('` Among-Us Role ` has already been created!')
        }
    }

    module.exports.config = {
      name: "setup",
      description: "**Sets up** among us commands. (necessary)",
      usage: "s!setup",
      accessableby: "Admins",
      aliases: []
  }