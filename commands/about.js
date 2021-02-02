const discord = require("discord.js");
const botconfig = require("../botsettings.json");

exports.run = async (client, message, args) => {
    var myinfo = new discord.MessageEmbed()
    .setColor("#ffcfcf")
    .setTitle("<a:2min_maggie:782601925408587788> **About Me**")
    .addField("The day of my Birth: Oct 15, 2020", "<a:warn:768364939118116874>You can use `s!help` command to see a list of all commands. You can use `s!help CommandName` for a specific command help. (for example `s!help weather`) ")
    .addField("<:softie:778158491004567552> Hosted and Maintained by", "`Ocean YT ᶦᶰᵈ#1608`")
    .addField(
        "<:instagram:768376949999009822> You can follow me on Instagram",
        "https://www.instagram.com/ocean_youtube_24/"
    )
    .setThumbnail(
        "https://cdn.discordapp.com/attachments/716674369358790766/768369189949538324/OCEAN_YT_d.png"
    )
    .setFooter("www.softiebot.cf")
    .setURL("https://www.softiebot.cf")
    .setTimestamp();
message.channel.send(myinfo);
}

module.exports.config = {
    name: "about",
    description: "Find something out about the bot!",
    usage: "s!about",
    accessableby: "Members",
    aliases: ['help-softie']
}