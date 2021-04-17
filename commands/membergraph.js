const Discord = require('discord.js');
const botconfig = require('../botsettings.json');

module.exports.run = async (bot, message, args) => {

    const guildJoins = bot.joins.ensure(message.guild.id, {
        "monday": 0,
        "tuesday": 0,
        "wednesday": 0,
        "thursday": 0,
        "friday": 0,
        "saturday": 0,
        "sunday": 0,
    })

    const chart = {
        type: 'line',
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [{
                label: 'Joins',
                data: Object.values(guildJoins)
            }]
        }
    }

    let enChart = encodeURIComponent(JSON.stringify(chart))
    const chartUrl = `https://quickchart.io/chart?c=${enChart}&backgroundColor=(rgb(47,%2049,%2054))`;
    message.channel.send(new Discord.MessageAttachment(chartUrl, "chart.png"))


}
module.exports.config = {
    name: "membergraph",
    description: "Shows the graph of members joined in a week.",
    usage: "s!membergraph",
    accessableby: "Member",
    aliases: ["mg"]
}