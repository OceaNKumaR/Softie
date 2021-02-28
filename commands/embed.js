const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

message.channel.startTyping() 
message.channel.stopTyping()

message.channel.send("What shall the title be?").then(msg3 => {
    let urdadcasueyes = message.channel.createMessageCollector(c => c.author.id === message.author.id, {max: 1})
              .on('collect', c => {
                let cod = c.content
 message.channel.send("How about the description?").then(msg3 => {
 let urmomcauseyes = message.channel.createMessageCollector(d => d.author.id === message.author.id, {max: 1})
           .on('collect', d => {
             let desc = d.content
             message.channel.send("How about the footor?").then(msg3 => {
                let urmomcauseyes = message.channel.createMessageCollector(d => d.author.id === message.author.id, {max: 1})
                .on('collect', f => {
                  let footor = f.content
                  const embed = new Discord.MessageEmbed()
                  .setTitle(`${cod}`)
                  .setDescription(`${desc}`)
                  .setColor('#ffcfcf')
                  .setFooter(`${footor}`)
                  message.channel.send(embed);
             }
                )
            })


       });
    })
 })
 })
}
    

module.exports.config = {
    name: "embed",
    description: "example of an Embed.",
    usage: "s!embed",
    accessableby: "Members",
    aliases: []
}