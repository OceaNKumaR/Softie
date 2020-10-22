const discord = require("discord.js")
const botconfig = require("../botsettings.json");
const client = require("nekos.life");
const neko = new client();

module.exports.run = async (bot, message, args) => {
    if (message.channel.nsfw == false) {
        message.reply("this channel isn't nsfw");
        return;
    }
    var nneko;
    var chance = Math.random();
    if (chance == 1) {
        nneko = await neko.nsfw.neko();
    } else {
        nneko = await neko.nsfw.nekoGif();
    }

    console.log(nneko);
    var ws = new discord.MessageEmbed()
        .addField("neko", "nya~", true)
        .setColor("#FF69B4")
        .setImage(nneko.url)
        .setFooter("powered by nekos.life <3");
    message.channel.send(ws);
}

module.exports.config = {
    name: "nekonsfw",
    description: "nsfw neko",
    usage: "?nekonsfw",
    accessableby: "Members",
    aliases: []
}
