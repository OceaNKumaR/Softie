const discord = require("discord.js")
const botconfig = require("../botsettings.json");
const client = require("nekos.life");
const neko = new client();

module.exports.run = async (bot, message, args) => {
    let target = message.guild.member(message.mentions.users.first());
    if (!target) {
        message.channel.send("You have to mention a user!");
        return;
    }
    var cuddle = await neko.sfw.kiss();

    console.log(cuddle);
    if (message.author == target.user) {
        var selfcuddle = new discord.MessageEmbed()
            .addField(message.author.username + " kisses himself", "??", true)
            .setColor("#FF69B4")
            .setImage(cuddle.url)
            .setFooter("powered by nekos.life <3");
        message.channel.sendEmbed(selfcuddle);
        return;
    }
    var ws = new discord.MessageEmbed()
        .addField(
            message.author.username + " kisses " + target.user.username,
            "o.o",
            true
        )
        .setColor("#FF69B4")
        .setImage(cuddle.url)
        .setFooter("powered by nekos.life <3");
    message.channel.send(ws);
}

module.exports.config = {
    name: "kiss",
    description: "",
    usage: "?kiss",
    accessableby: "Members",
    aliases: []
}
