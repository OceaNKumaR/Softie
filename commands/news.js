const Discord = require('discord.js');
const botconfig = require('../botsettings.json');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports.run = async (bot, message, args) => {

    let news_API = "7dbe6eb877b74dc4b6e34fe6ec6da86e"

    try {
        const response = await fetch(
            `https://newsapi.org/v2/top-headlines?sources=reuters&pageSize=5&apiKey=${news_API}`
        );
        const json = await response.json();
        const articleArr = json.articles;
        let processArticle = article => {
            const embed = new MessageEmbed()
                .setColor('#ffcfcf')
                .setTitle(article.title)
                .setURL(article.url)
                .setAuthor(article.author)
                .setDescription(article.description)
                .setThumbnail(article.urlToImage)
                .setTimestamp(article.publishedAt)
                .setFooter(message.guild.name, message.guild.iconURL());
            return embed;
        };
        async function processArray(array) {
            for (const article of array) {
                const msg = await processArticle(article);
                message.channel.send(msg);
            }
        }
        await processArray(articleArr);
    } catch (e) {
        message.channel.send('Something failed along the way');
    }
}

module.exports.config = {
    name: "news",
    description: "Replies with the 5 latest world news headlines",
    usage: "s!news",
    accessableby: "Members",
    aliases: []
}