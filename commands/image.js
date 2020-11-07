const discord = require("discord.js");
const botconfig = require("../botsettings.json");
const img = require('images-scraper')

const google = new img({
    puppeteer : {
        headless : true,
    }
})

module.exports.run = async (bot, message, args) => {
    const query = args.join(" ")
    if(!query) return message.channel.send('Please enter a search query')

    const results = await google.scrape(query, 1)
    message.channel.send(results[0].url);
}

module.exports.config = {
    name: "image",
    description: "google a image for you.",
    usage: "s!image",
    accessableby: "Members",
    aliases: []
}