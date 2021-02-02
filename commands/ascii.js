const Discord = require("discord.js");
const botconfig = require("../botsettings.json");
const figlet = require('figlet');

module.exports = {
    async run (client, message, args){
        let text = args.join(" ");
        if(!text) {
     return message.channel.send(`Please provide text for the ascii conversion!`)
     }
        let maxlen = 20
     if(text.length > 20) {
     return message.channel.send(`Please put text that has 20 characters or less because the conversion won't be good!`)
     }
      // AGAIN, MAKE SURE TO INSTALL FIGLET PACKAGE!  
     figlet(text, function(err, data) {
     message.channel.send(data, {
     code: 'AsciiArt' 
     });
     })
     
         }
     };
     
module.exports.config = {
    name: "ascii",
    description: "make a word ascii",
    usage: "s!ascii",
    accessableby: "Members",
    aliases: []
}