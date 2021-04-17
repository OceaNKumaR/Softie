const Discord = require('discord.js');
const botconfig = require('../botsettings.json');
const ms = require("ms")
const humanize = require("humanize-duration")

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You do not have permissions to use this command')

  String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10);
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if(hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}

let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.guild.channels.cache.find(c => c.name.toLowerCase() === args.slice(1).join(" ")) || message.channel;
if(!channel) return message.channel.send("Unknown Channel."); 
if(channel.type !== "text") return message.channel.send(channel.toString() +"channel is not a **text** channel.");

  const time = args[0];
  if(!time) { return message.channel.send(`${message.author}, specify a time.\nUsage: \`s!slowmode <time> [channel]\``); }
 if(time.toLowerCase() === "reset" || time.toLowerCase() === "off") {
            if(channel.rateLimitPerUser < 1) return message.channel.send(channel.toString()+" channel doesn't have a slowmode.")
            await channel.setRateLimitPerUser(0);
          return message.channel.send(`<#${channel.id}> slowmode has been lifted. (Set to 0)`)}
        
        let toMS = ms(time);
        let result  = Math.floor(toMS / 1000);
        
        if(!result) return message.channel.send(`**${args[0]}** is not a number.\n Usage: \`s!slowmode <time> [channel]\``);
        
        if(result > 21600) return message.channel.send("Time should be less than or equal to 6 hours (21600 seconds) .");
        else if(result < 1) return message.channel.send("Time should be more than or equal to 1 second. (you can use **off** or **reset** to disable the slowmode.)")
        
        await channel.setRateLimitPerUser(result);

  message.channel.send(`${channel.toString()} **|** Slowmode has been set to \`${`${result}s`.toHHMMSS()}\` (${humanize(toMS)})`);  
    } 

   

module.exports.config = {
    name: "slowmode",
    description: "Sets/Shows The Current Channel Slowmode In Seconds.",
    usage: "s!slowmode",
    accessableby: "Admin",
    aliases: []
}