const Discord = require('discord.js');
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle('__**Soundboard Commands!**__')
    .setDescription('**Note:** These commands only works when the bot is running with **Visual Studio Code** so if the command is not working thats means the bot is not running with Visual Studio Code')
    .setColor('#ffcfcf')
    .addFields(
        { name: '<:heheh_boi:779267064963530754> - `heheboi`' , value: 'Plays **hehe boi** sound in the vc', inline: true},
        { name: '😌 - `dilwale`' , value: 'Plays **Dilwale** sound in the vc', inline: true},
        { name: '<:miakhalifapog:779267865735725056> - `miakhalifa`' , value: 'Not really comfortable to say what this command does xD', inline: true},
        { name: '<a:GPS_Sialan:779269514881531944> - `ahshit`' , value: 'Plays **ah shit** sound in the vc', inline: true},
        { name: '<a:myj_JohnCena:779270667073093663> - `cena`' , value: 'Plays **cena** sound in the vc', inline: true},
        { name: '<a:FBI_OpenUp:779273155478159382> - `fbi`' , value: 'Plays **fbi** sound in the vc', inline: true},
        { name: '<:test:776323339848384552> - `doof`' , value: 'Plays **doof** sound in the vc', inline: true},
        { name: '<:DynamoTatta:779277626308296705> - `pattseheadshot`' , value: 'Plays **pattseheadshot** sound in the vc', inline: true},

    )
    .setTimestamp()

    message.channel.send(embed);
}

module.exports.config = {
    name: "help-soundboard",
    description: "iam gae",
    usage: "s!help-soundboard",
    accessableby: "Members",
    aliases: []
}
