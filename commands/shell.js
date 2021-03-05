const Discord = require('discord.js');
const botconfig = require('../botsettings.json');
const process = require('child_process');

module.exports.run = async (bot, message, args) => {

    if(message.author.id === '494738882617933830') {
        const msg = await message.channel.send(`Please wait, this may take a white.`);
        msg.delete({timeout: 4000});
        process.exec(args.join(" ") , (error, stdout) => { let result = (stdout || error);
        message.channel.send(result, { code: "asciidoc", split: "\n"}).catch(err => message.channel.send(err))
        }) 
        } else { 
        return message.reply(`Developers Only !`); 
        }
        
}
module.exports.config = {
    name: "shell",
    description: "Sasta Terminal",
    usage: "s!shell",
    accessableby: "Admin",
    aliases: ['console', 'terminal']
}