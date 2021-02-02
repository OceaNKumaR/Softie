const Discord = require('discord.js');
const botconfig = require("../botsettings.json");
const request = require('superagent');

module.exports.run = async (bot, message, args) => {
   
    request
    .get('http://api.adviceslip.com/advice')
    .end((err, res) => {
        if (!err && res.status === 200) {
            try {
                JSON.parse(res.text)
            } catch (e) {
                return message.channel.send('An api error occurred.');
            }
            const advice = JSON.parse(res.text)
            message.channel.send(advice.slip.advice)
        } else {
        console.error(`REST call failed: ${err}, status code: ${res.status}`)
        }
    });

}

module.exports.config = {
    name: "advice",
    description: "Send a Life Advice",
    usage: "s!advice",
    accessableby: "Members",
    aliases: []
}