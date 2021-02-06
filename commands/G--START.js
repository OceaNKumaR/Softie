const Discord = require("discord.js")
const prefix = require("../botsettings.json");
const { MessageEmbed } = require('discord.js')
const ms = require("ms");


module.exports.run = async (bot, message, args) => {
  const database = require('../giveaways.json');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You dont have manage messages permission.')
const embeds = new Discord.MessageEmbed()
.setColor('#ffcfcf')
.addField(`Usage:`,`\`s!gstart <#channel> <duration> <amountOfWinners>  <Prize>\``, false)
.addField(`Example:`,`\`s!gstart #giveaway 2d 1  Test Giveaway\``, false);

  if(!args[3]) return message.channel.send(embeds);

  if(args[3]) { const channel = message.mentions.channels.first()
if(!channel) return message.channel.send('Please specify a channel')

const duration = args[1]
if(!duration) return message.channel.send('please enter a valid duration')
if(
  !args[1].endsWith('d') &&
  !args[1].endsWith('h') &&
  !args[1].endsWith('m') &&
  !args[1].endsWith('s')
)
  return message.channel.send('You need to use d (days), h (hours), m (minutea), s (seconds)')
const winners = args[2]
if(!winners) return message.channel.send('Please specify an amount of winners')

const prize = args.slice(3).join(" ")
if(!prize) return message.channel.send('Please sepcify a prize to win')

bot.giveaways.start(channel, {
  time : ms(duration),
  prize : prize,
  winnerCount: winners,
  hostedBy: message.author ,
  messages: {
      giveaway:"🎉 **GIVEAWAY** 🎉",
      giveawayEnded: "🎉 **GIVEAWAY ENDED** 🎉",
      timeRemaining: "Time Remaining: **{duration}**",
      inviteToParticipate: "React with 🎉 to join the giveaway!",
      winMessage: `Congratulations {winners}, you have won the **${prize}** giveaway!`,
      embedFooter: "Ends At",
      noWinner: "Could not determine a winner",
      hostedBy: 'Hosted by: {user}',
      winners: "Winner(s)",
      endedAt: 'Ended at',
      units: {
          seconds: "seconds",
          minutes: "minutes",
          hours: 'hours',
          days: 'days',
          pluralS: false
      }
  },
 
})
.catch(err => {
  console.log(err)
  message.channel.send(err)
})

message.channel.send(`Giveaway is starting in ${channel}`) }


}

  module.exports.config = {
    name: "gstart",
    description: "Starts the giveaway",
    usage: "s!gstart",
    accessableby: "Admin",
    aliases: []
}

