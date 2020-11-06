const discord = require("discord.js");
const botconfig = require("../botsettings.json");
const client = require("nekos.life");
const neko = new client();

module.exports.run = async (bot, message, args) => {
    let target = message.guild.member(message.mentions.users.first());
    if (!target) {
        message.channel.send("You have to mention a user!");
        return;
    }
    var hug = await neko.sfw.hug();
    console.log(hug);
    if (target.user == message.author) {
        var selfcuddle = new discord.MessageEmbed()
            .addField(message.author.username + " hugs himself", ":3", true)
            .setColor("#FF69B4")
            .setImage(hug.url)
            .setFooter("powered by nekos.life <3");
        message.channel.sendEmbed(selfcuddle);
        return;
    }
    var ws = new discord.MessageEmbed()
        .addField(
            message.author.username + " hugs " + target.user.username,
            ":3",
            true
        )
        .setColor("#FF69B4")
        .setImage(hug.url)
        .setFooter("powered by nekos.life <3");
    message.channel.send(ws);
}

module.exports.config = {
    name: "hug",
    description: "Hugs a user",
    usage: "s!hug",
    accessableby: "Members",
    aliases: []
}