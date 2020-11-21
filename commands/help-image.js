const Discord = require('discord.js');
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle('__**Image Commands!**__')
    .setColor('#ffcfcf')
    .addFields(
        { name: '🐱 - `cat`' , value: 'Shows a **cat** Image', inline: true},
        { name: '🐶 - `dog`' , value: 'Shows a **dog** Image', inline: true},
        { name: ':snake: - `snake`' , value: 'Shows a **snake** Image', inline: true},
        { name: '<:worryLORDofThunder:779639425562443787> - `thor`' , value: 'Shows a **thor** Image', inline: true},
        { name: '<:BMG_b_SaxiBoi:779639753128935444> - `nora`' , value: 'Shows a **Nora Fatehi** Image', inline: true},
        { name: '<:41413935_actingdrawingironmaniro:779640143174434819> - `ironamn`' , value: 'Shows a **ironman** Image', inline: true},
        { name: '<:pubg:779640708247977984> - `pubg`' , value: 'Shows a **pubg** Image', inline: true},
        { name: '<a:ghostwoo:779640966244073483> - `boo`' , value: 'Shows a **ghost** Image', inline: true},
        { name: ':house: - `house`' , value: 'Shows a **house** Image', inline: true},
        { name: '<:1apple:779641355211243540> - `apple`' , value: 'Shows a **Iphone** Image', inline: true},
        { name: '<:urugly:779641946422771713> - `ugly`' , value: 'Shows a **ugly** Image', inline: true},
        { name: '<:thanos:779642364297609236> - `thanos`' , value: 'Shows a **thanos** Image', inline: true},

        )

        .setTimestamp()
    
        message.channel.send(embed);
    }
    
    module.exports.config = {
        name: "help-image",
        description: "iam gae",
        usage: "s!help-image",
        accessableby: "Members",
        aliases: []
    }
    
    