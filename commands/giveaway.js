const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const { MessageEmbed } = require('discord.js')
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You dont have manage messages permission.')
        
  const channel = message.mentions.channels.first()
  if(!channel) return message.channel.send('Please specify a channel')

  const duration = args[1]
  if(!duration) return message.channel.send('please enter a valid duration')

  const winners = args[2]
  if(!winners) return message.channel.send('Please specify an amount of winners')

  const prize = args.slice(3).join(" ")
  if(!prize) return message.channel.send('Please sepcify a prize to win')

  bot.giveaways.startGiveaway(channel, {
      time : ms(duration),
      prize : prize,
      winnerCount: winners,
      hostedBy: bot.config.hostedBy ? message.author : null,
      messages: {
          giveaway: (bot.config.everyoneMention ? "@everyone\n\n" : '') + "Giveaway",
          giveawayEnd: (bot.config.everyoneMention ? "@everyone\n\n" : '') + "Giveaway Ended",
          timeRemaining: "Time Remaining **{duration}**",
          inviteToParticipate: "React with 🎉 to join the giveaway",
          winMessage: "Congrats {winners}, you have  won the giveaway",
          embedFooter: "Giveaway Time!",
          noWinner: "Could not determine a winner",
          hostedBy: 'Hosted by {user}',
          winners: "winners",
          endedAt: 'Ends at',
          units: {
              seconds: "seconds",
              minutes: "minutes",
              hours: 'hours',
              days: 'days',
              pluralS: false
          }
      },
     
  })
  message.channel.send(`Giveaway is starting in ${channel}`)
}

  module.exports.config = {
    name: "giveaway",
    description: "test",
    usage: "s!giveaway",
    accessableby: "Admin",
    aliases: []
}

