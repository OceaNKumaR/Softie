const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const request = require ('node-superfetch')

module.exports.run = async (bot, message, args) => {
    let googleKey = "AIzaSyDUjVDpYYPgK4uZJlHY6isXSR9fTPAHS9A";

    let csx = "d8600f1459e81d694"; // Search engine ID.

    let query = args.join(" ");

    let result;



    if (!query) return message.channel.send("Please enter the query.");



    href = await search(query);

    if (!href) return message.channel.send("Unknown search.");



    const embed = new Discord.MessageEmbed()

    .setTitle(href.title)

    .setDescription(href.snippet)

    .setImage(href.pagemap ? href.pagemap.cse_thumbnail[0].src : null) // Sometimes, the thumbnail might be unavailable in variant site. Return it to null.

    .setURL(href.link)

    .setColor('RANDOM')

    .setFooter("Powered by Google" , "https://cdn.discordapp.com/emojis/778909809705615361.png?v=1")



    return message.channel.send(embed);



    async function search(query) {

        const { body } = await request.get("https://www.googleapis.com/customsearch/v1").query({

            key: googleKey, cx: csx, safe: "off", q: query

        });



        if (!body.items) return null;

        return body.items[0];

    }
}

module.exports.config = {
    name: "google",
    description: "Googling somthing",
    usage: "s!google",
    accessableby: "Members",
    aliases: []
}