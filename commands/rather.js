const Discord = require('discord.js');
const botconfig = require('../botsettings.json');

module.exports.run = async (bot, message, args) => {

    const {
        data
    } = await (require("axios").default).get("http://either.io/", {
        responseType: "text"
    });
    
    const $ = await (require("cheerio")).load(data);
    
    const blue = $("div.result.result-1").children(),
        red = $("div.result.result-2").children();
    
    const obj = {
        blue: {
            line: blue.eq(3).text(),
            percentage: blue.eq(1).text(),
            votes: blue.eq(2).text()
        },
        red: {
            line: red.eq(3).text(),
            percentage: red.eq(1).text(),
            votes: red.eq(2).text()
        }
    };
    
    return message.channel.send({
        embed: {
            color: "FFCFCF",
            url: $("span.contents > input[type=text]").attr("value"),
            title: "Would You Rather",
            description: `${obj.blue.line}\n**Or**\n${obj.red.line}\n\n**Results**\n1st - ||${obj.blue.votes} (${obj.blue.percentage})||\n2nd - ||${obj.red.votes} (${obj.red.percentage})||`,
            timestamp: new Date()
        }
    })


}
module.exports.config = {
    name: "rather",
    description: "Would You Rather Command.",
    usage: "s!rather",
    accessableby: "Members",
    aliases: []
}