const Discord = require("discord.js");
const botconfig = require("../botsettings.json");
const pagination = require('discord.js-pagination');

module.exports.run = async (bot, message, args) => {
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    if(helpArgs[0] === 'gaming') {
        return message.reply("This is a Gaming information Command.")
    }

    if(helpArgs[0]) {
        let command = helpArgs[0];

        if(bot.commands.has(command)) {
            
            command = bot.commands.get(command);
            var embed = new Discord.MessageEmbed()
            .setAuthor(`s!${command.config.name} Command`)
            .setDescription(`
            <a:chahal_arrow:741240733029236756> **Description** ${command.config.description || "There is no Description for this command."}
            <a:chahal_arrow:741240733029236756> **Usage:** ${command.config.usage || "No Usage"}
            <a:chahal_arrow:741240733029236756> **Permissions:** ${command.config.accessableby || "Members"}
            <a:chahal_arrow:741240733029236756> **Aliases:** ${command.config.aliases || "No Aliases"}`)
            .setColor('#2EFF00')

        message.channel.send(embed);
    }}


    const main = new Discord.MessageEmbed()
    .setTitle(':mailbox_with_mail: Need help?')
    .setDescription('My prefix `s!` **[Support Server](https://discord.gg/k5KM6kP)**--**[Invite me](https://discord.com/oauth2/authorize?client_id=766228516647337984&permissions=8&scope=bot)** ')
    .setColor('#ffcfcf')
    .addFields({ name:'New Commands - ' , value: 'translate, embed, shorturl'},
        { name:'<:softie:778158491004567552> - Softie : `s!help-softie`' , value: '__**Catergories**__'},
        { name: ':eyeglasses: - Moderation', value: '`s!help-mod`', inline: true},
        { name: ':video_game: - Fun/Games', value: '`s!help-fun`', inline: true},
        { name: ':gift: - Giveaway', value: '`s!help-giveaway`', inline: true},
        { name: ':tools: - Utilities', value: '`s!help-util`', inline: true},
        { name: ':scroll: - Information', value: '`s!help-info`', inline: true},
        { name: ':question: Others', value: '`s!help-others`', inline: true},
        { name: '<:6011_among_us_cyan:778163803007221770> - Among-Us', value: '`s!help-among-us`', inline: true},
        { name: ':woman_juggling: - Interaction', value: '`s!help-interaction`', inline: true},
        { name: '<:music:804267954690719794> - Soundboard' , value: '`s!help-soundboard`', inline: true},
        { name: '<:blobcamera:779627607338778654> - Image' , value: '`s!help-image`', inline: true},
        { name: ':musical_note: - Music', value: '`s!help-music`', inline: true},
        { name: '<a:dollar2:798454639657746462> - Economy', value: '`s!help-economy`', inline: true}
    )
    .setTimestamp()


    const info = new Discord.MessageEmbed()
    .setTitle('Information per command')
    .setDescription('Run command `s!help` followed by the command you want to get more information on! Example: ```s!help ban```')
    .setColor('#ffcfcf')
    .setImage('https://cdn.discordapp.com/attachments/716674369358790766/778167833234374656/info.PNG')
    .setTimestamp()

    const pages = [
       main,
       info
]

   const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }


module.exports.config = {
    name: "help",
    description: "",
    usage: "s!help",
    accessableby: "Members",
    aliases: []
}