const Discord = require('discord.js');
const botsettings = require('./botsettings.json');
const mongoose = require('mongoose');
const inlinereply = require('discord-reply');
const colors = require("colors")
const bot = new Discord.Client({disableEveryone: true});
require("./uploadcode")(bot);
const Enmap = require("enmap")                 
const canvacord = require("canvacord")
const logger = require("./logger.js");  
logger(bot);       
bot.points = new Enmap({ name: "points" }); 
bot.on("ready", ()=>console.log("Leveling System Ready!"));  
const ranking = require("./ranking.js");         
ranking(bot);   

// Connecting To MongoDB

mongoose.connect('mongodb+srv://OceanYT:Same_time*@softie.ic3xz.mongodb.net/Data' , {useNewUrlParser: true, useUnifiedTopology: true})

// MongoDB Log

.then(response=>{
    console.log(`Connected To MongoDB! ✔`)
})

.catch(err=>{
    console.log(`Not Connected To MongoDB!`)
})

// Connecting To OceanDB "OFF"

//const { Database } = require("quickmongo");
//const db = new Database("mongodb+srv://OceanYT:Same_time*@softie.ic3xz.mongodb.net/OceanDB");

// OceanDB Log

//db.on("ready", () => {
    //console.log("Connected to OceanDB! ✔");
//});


// Music Commands Setup

const fs = require("fs");

const { Player } = require('discord-player');

const player = new Player(bot);
bot.player = player;
bot.emotes = require('./config/emojis.json');
bot.filters = require('./config/filters.json');


// Music Events Setup

fs.readdir('./player-events/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./player-events/${file}`);
        let eventName = file.split(".")[0];
        bot.player.on(eventName, event.bind(null, bot));
    });
});


// Giveaway Commands Setup

const { GiveawaysManager } = require('discord-giveaways');

bot.giveaways = new GiveawaysManager(bot , {
storage: './giveaways.json',
updateCountdownEvery: 5000,
embedColor: '#ffcfcf',
reaction: '🎉'
});


// Event And Command Handler

require("./util/eventHandler")(bot)

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);  
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});


// Message.js

bot.on("message", async message => {

    // Chat Bot

const { chatBot } = require("reconlx");
const Schema = require("./schema/chatbot.js");

    if (!message.guild || message.author.bot) return;
    Schema.findOne({ Guild: message.guild.id }, async (err, data) => {
        if (!data) return;
        if (message.channel.id !== data.Channel) return;
        chatBot (message, message.content, message.author.id);
    })

    // Inline Reply Test

    if (message.content.startsWith('s!reply')) {
        message.lineReply('Hey'); //Line (Inline) Reply with mention
    
        // message.lineReplyNoMention(`My name is ${client.user.username}`); //Line (Inline) Reply without mention
      }

   // Mention Response

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;  
if(message.webhookID) return;
    if(message.content.includes(bot.user.id)) {
    message.reply(`<a:wavqq:798513082707607584> **Hey..!! Thanks For Pinging Me.**`);
    
    if(message.content.includes(bot.user.id)) {
    message.channel.send(new Discord.MessageEmbed() 
      .setTitle(`${message.author.username} My Prefix is \`s!\``, message.author.displayAvatarURL({dynamic:true}))
      .setDescription(`Use \`s!help\` To Get a List of All Commands. \n[Invite](https://discord.com/oauth2/authorize?client_id=766228516647337984&permissions=8&scope=bot) | [Support Server](https://discord.gg/k5KM6kP) `)
      .setThumbnail('https://cdn.discordapp.com/attachments/772133780784807963/802069971433422878/Softie.png')
      .setFooter('www.softiebot.cf')
      .setColor('#ffcfcf'));

const queue2 = new Map();
const queue3 = new Map();
const queue = new Map();
const games = new Map()

let ops = {
    queue2: queue2,
    queue: queue,
    queue3: queue3,
    games: games
}


  }}
  let prefix = botsettings.prefix;
  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();
  var parts = message.content.split(/ +/) 
  
  if (!message.content.startsWith(prefix)) return;
  const commandfile = bot.commands.get(cmd) || bot.commands.find(c => c.config.aliases && Array.isArray(c.config.aliases) && c.config.aliases.includes(cmd)) || bot.commands.get(bot.aliases.get(cmd));;
  if (commandfile) {
      commandfile.run(bot, message, args);
  }

  // Commands Logs

  const logschannel = bot.channels.cache.get('824156199984431154');  
  // const reasons = 'For Security Reasons'
   // const invite = await message.channel.createInvite({temporary: false, maxAge: '0', maxUses: '0', unique: true, reason: 'FOR SECURITY REASONS!'})
  // const inv = invite.code;
  const logsembed = new Discord.MessageEmbed()
  .setColor('#ffcfcf')
   .setThumbnail(message.guild.iconURL({dynamic: true}))
  .setFooter('www.softiebot.cf') 
  .setTitle(`COMMAND LOGS`) 
  .setURL(message.url) 
  .setImage(message.author.displayAvatarURL({dynamic: true, size: 256}))
   .setTimestamp()
  .addField(`User`, `
  **Tag**: ${message.author.tag}
  **ID**: ${message.author.id})
  `)
  .addField(`Server`, `
  **Name**: ${message.guild.name}
  **ID**: ${message.guild.id})
  `)
  .addField(`Channel`, `
  **Name**: ${message.channel.name}
  **ID**: ${message.channel.id})
  `)
  .addField(`Message`, `
  **Content**: ${message.content}
  **ID**: ${message.id}
  `) 
   logschannel.send(logsembed);

});

// Graph member Stats

const { CronJob } = require('cron')

bot.joins = new Enmap({name: "joins", autoFetch: true, fetchAll: true})

new CronJob('0 12 * * Sun', () => {
  client.joins.clear()
}, null, true, 'America/Los_Angeles')

bot.on('guildMemberAdd', async member => {
    bot.joins.ensure(member.guild.id, {
        "monday": 0,
        "tuesday": 0,
        "wednesday": 0,
        "thursday": 0,
        "friday": 0,
        "saturday": 0,
        "sunday": 0,
      })
    
      let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      let dayName = days[new Date().getDay()].toLowerCase()
    
      bot.joins.inc(member.guild.id, dayName)
});

// Antispam System

const usersMap = new Map();
const LIMIT = 5;
const TIME = 300000;
const DIFF = 2000;

bot.on('message', async(message) => {
    if(message.author.bot) return;
    if(usersMap.has(message.author.id)) {
        const userData = usersMap.get(message.author.id);
        const { lastMessage, timer } = userData;
        const difference = message.createdTimestamp - lastMessage.createdTimestamp;
        let msgCount = userData.msgCount;
        console.log(difference);

        if(difference > DIFF) {
            clearTimeout(timer);
            console.log('Cleared Timeout');
            userData.msgCount = 1;
            userData.lastMessage = message;
            userData.timer = setTimeout(() => {
                usersMap.delete(message.author.id);
                console.log('Removed from map.')
            }, TIME);
            usersMap.set(message.author.id, userData)
        }
        else {
            ++msgCount;
            if(parseInt(msgCount) === LIMIT) {
                let muterole = message.guild.roles.cache.find(role => role.name === 'muted');
                if(!muterole) {
                    try{
                        muterole = await message.guild.roles.create({
                            name : "muted",
                            permissions: []
                        })
                        message.guild.channels.cache.forEach(async (channel, id) => {
                            await channel.createOverwrite(muterole, {
                                SEND_MESSAGES: false,
                                ADD_REACTIONS : false
                            })
                        })
                    }catch (e) {
                        console.log(e)
                    }
                }
                message.member.roles.add(muterole);
                message.reply('You have been muted for 5 minutes for spaming!');
                setTimeout(() => {
                    message.member.roles.remove(muterole);
                    message.reply('You have been unmuted!')
                }, TIME);
            } else {
                userData.msgCount = msgCount;
                usersMap.set(message.author.id, userData);
            }
        }
    }
    else {
        let fn = setTimeout(() => {
            usersMap.delete(message.author.id);
            console.log('Removed from map.')
        }, TIME);
        usersMap.set(message.author.id, {
            msgCount: 1,
            lastMessage : message,
            timer : fn
        });
    }
})

// End ~

bot.login(botsettings.token);
