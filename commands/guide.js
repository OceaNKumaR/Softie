const Discord = require("discord.js");
const botconfig = require("../botsettings.json");
const pagination = require('discord.js-pagination');

module.exports.run = async (bot, message, args) => {

    const page = new Discord.MessageEmbed()
    .setTitle('Pages!')
    .setDescription('Page 1: Setup roles \nPage 2: Starting the game \nPage 3: Voting session \nPage 4: If someone is dead \nPage 5: Game ended')
    .setColor('#ffcfcf')
    .setTimestamp()


    const setup = new Discord.MessageEmbed()
    .setTitle('Setup roles for among-us bot commands')
    .setDescription('You need  `MANAGE_MESSAGES`  permission to use this command. Run command `s!setup` to get started.')
    .setColor('#ffcfcf')
    .setTimestamp()


    const start = new Discord.MessageEmbed()
    .setTitle('Starting the game....')
    .setDescription('When the game has started, \nrun command `s!start` to deafen everyone so that it will be a fair game')
    .setImage('https://images-ext-2.discordapp.net/external/pFl2fRuDAOQqMA4_0AKq1yYWFmo7vA6Nd4p6E9GTzVk/https/i.imgur.com/Oo9Hr6E.png?width=843&height=474')
    .setColor('#ffcfcf')
    .setTimestamp()


    const vote = new Discord.MessageEmbed()
    .setTitle('Voting session....')
    .setDescription('When its the voting session, \nrun command `s!vote` to undeafen everyone and discuss about the imposter')
    .setImage('https://images-ext-1.discordapp.net/external/mWLWZDpWGoeRyLIBGFh7GtL-UqtiWXl8lxSq5XbVzNs/https/i.imgur.com/Yx4QAp7.png')
    .setColor('#ffcfcf')
    .setTimestamp()


    const dead = new Discord.MessageEmbed()
    .setTitle('If someone is dead')
    .setDescription('If someone is dead, \nrun command `s!dead [@user]` to mute the dead player.')
    .setImage('https://images-ext-2.discordapp.net/external/5LQH7j4K9tWOBqaVM-i5wCCjJ5RhHrQctE_vHVHn-80/https/i.imgur.com/dobirEd.png?width=843&height=474')
    .setColor('#ffcfcf')
    .setTimestamp()


    const end = new Discord.MessageEmbed()
    .setTitle('Game ended....')
    .setDescription('When the game is ended, \nrun command `s!reset` to reset the voice channel status.')
    .setImage('https://images-ext-1.discordapp.net/external/fU7w_q8g1WA_ADJ-zIkokfi8BIeyFYyNEvXFH6_46ZM/https/i.imgur.com/yygXMxf.png?width=632&height=474')
    .setColor('#ffcfcf')
    .setTimestamp()

    const pages = [
        page,
        setup,
        start,
        vote,
        dead,
        end
 ]
 
    const emojiList = ["⏪", "⏩"];
 
         const timeout = '120000';
 
         pagination(message, pages, emojiList, timeout)
     }


module.exports.config = {
    name: "guide",
    description: "Tells you how to use among us commands",
    usage: "s!guide",
    accessableby: "Members",
    aliases: []
}
