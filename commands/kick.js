const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const { MessageEmbed } = require("discord.js")


module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("KICK_MEMBERS")  && message.author.id !== "761469922563063818") return message.channel.send("Sorry, you don't have permissions to use this!");
    
    let xdemb = new MessageEmbed()
    .setColor("#00ff00")
    .setTitle("Kick Command")
    .addField("Description:", `Kick a member`, true)
    .addField("Usage:", "!kick [user] [reason]", true)
    .addField("Example:" ,"!kick @fool spam")
  
      let member = message.mentions.members.first();
      if(!member) return message.channel.send(xdemb)
        
      if(!member.kickable) 
        return message.channel.send("<:nie:778532563446661160> I cannot kick this user!");
     if(member.user.id === "494738882617933830") return message.channel.send("<:nie:778532563446661160> I can't kick my owner!")
  
      
      let reason = args.slice(1).join(' ');
      if(!reason) {
        res = "No reason given";
      }
      else {
        res = `${reason}`
      }
      
      await member.kick(reason)
        .catch(error => message.reply(`Sorry, I couldn't kick because of : ${error}`));
  
        let kick = new MessageEmbed()
        .setColor("#ffcfcf")
        .setDescription(`<:TickYES:778532157001957390> ***${member.user.tag} was kicked*** | ${res}`)
     
  
        message.channel.send(kick)
  
      message.delete();
      
  }
        

module.exports.config = {
    name: "kick",
    description: "Kicks a user",
    usage: "s!kick",
    accessableby: "Admins",
    aliases: []
}
