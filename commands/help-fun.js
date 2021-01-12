const Discord = require('discord.js');
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle('__**Fun Commands!**__')
    .setColor('#ffcfcf')
    .addFields(
        { name: 'Use `s!help` followed by a command name to get more information on a command.' , value: 'For example: `s!help hangman`.'},
        { name: ':8ball: - `8ball`' , value: 'Answers your hard questions with a good response, **8ball** sense', inline: true},
        { name: ':laughing: - `joke`' , value: 'Gives you a random **joke**', inline: true},
        { name: '<:hangman:778606629817548801> - `hangman` ' , value: '**Hangman**, a word guessing game', inline: true},
        { name: ':frog: - `meme`' , value: 'Shows a random **meme**', inline: true},
        { name: ':speaking_head: - `say`' , value: 'Bot resends your message', inline: true},
        { name: '<:tictactoe:798545510028935219> - `tictactoe`' , value: 'Play **tictactoe** with your friends.', inline: true},
        { name: ':scissors: - `rps`' , value: 'Plays rock paper scissors with the bot', inline: true},
        { name: ':white_heart: - `advice`' , value: 'Get some usefull advice for yourself! It will help you in future ;)', inline: true},
        { name: ':grey_question: - `coinflip`' , value: 's it heads? Or its Tails? Lets check it!', inline: true},
        { name: '<a:gay:778612202034167808> - `emojify`' , value: 'Converts your text into emoji', inline: true},
 
        )
        .setTimestamp()
    
        message.channel.send(embed);
    }
    
    module.exports.config = {
        name: "help-fun",
        description: "iam gae",
        usage: "s!help-fun",
        accessableby: "Members",
        aliases: []
    }
