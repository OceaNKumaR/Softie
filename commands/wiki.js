const Discord = require('discord.js');
const botconfig = require('../botsettings.json');
const wiki = require("wikijs").default();
const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {

    if (!args[0]) return message.channel.send("**Enter A Query!**")
    let m = await message.channel.send({
        embed: {
            color: "#ffcfcf",
            title: `Searching Wikipedia just for you ⌛`,
            description: `Please stand by...`,
        },
    });
    let result;
    const search = await wiki.search(args.join(' '));
    if (!search.results.length) {
        return m.edit({
            embed: {
                color: "#ffcfcf",
                title: "What was that again? 📚🤓",
                description: "Even Wikipedia doesn't seem to know what you're talking about.",
                footer: {
                    text: "Check for typos or try searching for something else!",
                },
            },
        });
    }
    result = await wiki.page(search.results[0]);
    try {
        let description = await result.summary();
        if (description.length > 8192) {
            const FirstEmbed = new MessageEmbed()
                .setAuthor(result.raw.title)
                .setColor("#ffcfcf")
                .setDescription(`${description.substring(0, 1950)}...\nArticle is too long, click [**here**](${result.raw.fullurl}) to read more!`);
            return m.edit(FirstEmbed);
        } if (description.length < 2048) {
            const SecondEmbed = new MessageEmbed()
                .setAuthor(result.raw.title)
                .setColor("#ffcfcf")
                .setDescription(`${description.slice(0, 2048)}`)
            return m.edit('', SecondEmbed)
        } if (description.length > 2048) {
            const ThirdEmbed = new MessageEmbed()
                .setAuthor(result.raw.title)
                .setColor("#ffcfcf")
                .setDescription(description.slice(0, 2048))
            const FourthEmbed = new MessageEmbed()
                .setColor("#ffcfcf")
                .setDescription(description.slice(2048, 4096))
            m.edit('', ThirdEmbed)
            message.channel.send('', FourthEmbed)
        } if (description.length > 4096 && description.length < 6144) {
            const FifthEmbed = new MessageEmbed()
                .setAuthor(result.raw.title)
                .setColor("#ffcfcf")
                .setDescription(description.slice(0, 2048))
            const SixthEmbed = new MessageEmbed()
                .setColor("#ffcfcf")
                .setDescription(description.slice(2048, 4096))
            const SeventhEmbed = new MessageEmbed()
                .setColor("#ffcfcf")
                .setDescription(description.slice(4096, description.length))
            await m.edit('', FifthEmbed)
            message.channel.send(SixthEmbed)
            message.channel.send(SeventhEmbed)
        } if (description.length > 6144 && description.length < 8192) {
            const EightEmbed = new MessageEmbed()
                .setColor('#ffcfcf')
                .setDescription(description.slice(0, 2048));
            const NinthEmbed = new MessageEmbed()
                .setColor('#ffcfcf')
                .setDescription(description.slice(2048, 4096));
            const TenthEmbed = new MessageEmbed()
                .setColor("#ffcfcf")
                .setDescription(description.slice(4096, 6144));
            const EleventhEmbed = new MessageEmbed()
                .setColor("#ffcfcf")
                .setDescription(description.slice(6144, description.length))
            await m.edit('', EightEmbed);
            message.channel.send(NinthEmbed);
            message.channel.send(TenthEmbed);
            message.channel.send(EleventhEmbed);
        }
    } catch (e){
        return m.edit("Not Available!")
    }
}

module.exports.config = {
    name: "wiki",
    description: "Shows Results From Wikipedia",
    usage: "s!wikipedia",
    accessableby: "Members",
    aliases: ["wiki"]
}