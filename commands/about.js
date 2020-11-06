const discord = require("discord.js");
const botconfig = require("../botsettings.json");

exports.run = async (client, message, args) => {
    var myinfo = new discord.MessageEmbed()
    .setColor("E0FF00")
    .setTitle("<a:animated_heart:748452368504455178> **About Me** <a:animated_heart:748452368504455178>")
    .addField("The day of my Birth: Oct 15, 2020", "<a:warn:768364939118116874>You can use `?help` command to see a list of all commands. You can use `?help CommandName` for a specific command help. (for example `?help weather`) ")
    .addField("<a:chahal_bluestar:748452334450900993> Hosted and Maintained by", "Ocean YT")
    .addField(
        "<:instagram:768376949999009822> You can follow me on Instagram",
        "https://www.instagram.com/ocean_youtube_24/"
    )
    .setThumbnail(
        "https://cdn.discordapp.com/attachments/716674369358790766/768369189949538324/OCEAN_YT_d.png"
    )
    .setFooter("Thank you for reading c;")
    .setURL("https://www.youtube.com/c/OceanYTOP")
    .setTimestamp();
message.channel.send(myinfo);
}

module.exports.config = {
    name: "about",
    description: "Find something out about the bot!",
    usage: "s!about",
    accessableby: "Members",
    aliases: []
}