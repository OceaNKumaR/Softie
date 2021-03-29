const Discord = require('discord.js');
const botconfig = require("../botsettings.json");
const inlinereply = require('discord-reply');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle('__**Interaction**__')
    .setColor('#ffcfcf')
    .addFields(
        { name: 'Use `s!help` followed by a command name to get more information on a command.' , value: 'For example: `s!help kiss`.'},
        { name: ':person_gesturing_ok: - `hug`' , value: 'Gives someone a **hug**', inline: true},
        { name: ':kissing_heart: - `kiss`' , value: 'Gives someone in your server a **kiss**', inline: true},
        { name: ':raised_hands: - `pat`' , value: 'Gives someone in your server a **pat**', inline: true},
        { name: ':point_up: - `poke`' , value: '**Pokes** someone in your server', inline: true},
        { name: ':persevere: - `slap`' , value: '**Slaps** someone in your server', inline: true},
        { name: ':stuck_out_tongue_winking_eye: - `smug`' , value: '**Smugs** someone in your server', inline: true},
        { name: '☺️ - `cuddle`' , value: '**Cuddles** someone in your server', inline: true},

    )
    .setTimestamp()

    message.lineReply(embed);
}

module.exports.config = {
    name: "help-interaction",
    description: "iam gae",
    usage: "s!help-interaction",
    accessableby: "Members",
    aliases: []
}
