const Discord = require('discord.js');
const botconfig = require("../botsettings.json");
const inlinereply = require('discord-reply');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle('**Music**')
    .setColor('#ffcfcf')
    .addFields(
        { name: ':notes: - `play`' , value: '**Plays** a song of your choice', inline: true},
        { name: ':play_pause: - `np`' , value: 'Sends the **current playing song title** to message channel', inline: true},
        { name: ':pause_button: - `pause`' , value: '**Pauses** current playing music', inline: true},
        { name: ':stop_button: - `stop`' , value: '**Stops** current playing music', inline: true},
        { name: ':arrow_forward: - `resume`' , value: '**Resumes** paused music', inline: true},
        { name: ':arrows_clockwise: - `loop`' , value: '**Loops/replays** a song repeatedly', inline: true},
        { name: ':fast_forward: - `skip`' , value: '**Skips** to the next song on the queue', inline: true},
        { name: ':loud_sound: - `volume`' , value: 'Sets audio volume ranging from **1-100%**', inline: true},
        { name: ':abcd: - `queue`' , value: 'Displays all current **queued** songs', inline: true},
    )

    .setTimestamp()

    message.lineReply(embed);
}

module.exports.config = {
    name: "help-music",
    description: "iam gae",
    usage: "s!help-music",
    accessableby: "Members",
    aliases: []
}