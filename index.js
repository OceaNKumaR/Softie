const Discord = require('discord.js');
const botsettings = require('./botsettings.json');
const mongoose = require('mongoose');
const inlinereply = require('discord-reply');
const colors = require("colors")
const bot = new Discord.Client({disableEveryone: true});
// "OFF" require("./uploadcode")(bot);
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

//--------------------------------------------------------------------------------------------------------------------\\

// Welcome and Goodbye System 

const Canvas = require("canvas");
const WelcomeSchema = require('./models/welcome-schema.js');

bot.on("guildMemberAdd", async (member, guild) => {
    WelcomeSchema.findOne({ guildId: member.guild.id }, async (err, data) => {
        if(!data) return;

        let responses = ["Luckily the weather is on our side today! The sun and I are pleased to offer you a warm welcome.",
                         "Here's a hearty welcome, big and warm enough to encompass you all! To say we are thrilled to see you is an understatement.",
                         "It's my pleasure to extend a cheerful welcome to you all! Your presence makes us very happy.",
                         "Fellow members, please join me in giving our guests the most cordial of welcomes.",
                         "Let's hear it for a sociable welcome! On the count of three, turn to your neighbor and say 'hello'. There are no strangers here, only friends we are yet to meet.",
                         "It's my pleasant duty to bid you all a genial welcome.",
                         "On behalf of my colleagues, I wish you all a convivial welcome. We are going to have a merry and enjoyable time together.",
                         "The flags are flying. The balloons are ready for release. It's a great day, one we've been planning and waiting for. I'm sure you'll concur, this is an agreeable welcome.",
                         "It's gratifying to look around and see so many familiar faces. That's a pleasing welcome to what I know is a going to be a great conference.",
                         "It's a glad welcome we bring to you this morning, filled with the desires, hopes and dreams we all share.",
                         "We're delighted to offer the most hospitable welcome we can.",
                         "Dear guests, look around you! An amiable welcome full of friendship is yours.",
                         "Our desire is to extend a gracious and inclusive welcome to all of you. For now let's put aside our differences and instead celebrate what brings us together!",
                         "The flags are flying. The balloons are ready for release. It's a great day, one we've been planning and waiting for. I'm sure you'll concur, this is an agreeable welcome.",
                         "You know what's great about these events? You are always assured of a pleasant welcome. This is feel-good central and we aim.",
                         "Many of you have made a huge effort to join us today. On behalf of us all, we are deeply appreciative and offer you our most grateful welcome.",
                         "Today is the day we begin to learn to look through the eyes of others; to find out and experience what the world is like for them. It is also the day we grow bigger than our differences and offer to everyone regardless of historical rights and wrongs, a friendly welcome, an outstretched hand.",
                         "Wow, what a gathering we have here tonight. We've got dignitaries, celebrities, fans, and organizational members all brought together for one cause. Ours. Here's an appreciative welcome to you.",
                         "Ladies and gentlemen, the room is ready. The tables are set. The band is playing our theme song. And the waiting staff are preparing to take your orders. This is a superb welcome, fit for royalty, and that's what you are to us.",
                         "To our special guests; look around. See the smiles of everyone's faces? We are truly delighted to welcome you here today.",
                         "Ladies and gentlemen, tonight we have stars in the sky, and on stage. We are favored to welcome some the brightest the world has seen.",
                         "I look around the stage and am in awe with the collected expertise gathered here. We are deeply honored to welcome you.",
                         "Ladies and gentlemen, please give a huge welcome to.",
                         "Do you hear the applause? The audience joins me in a rapturous welcome! We are thrilled to have you with us today."]

        let response = Math.floor(Math.random() * responses.length)

        const user = member.user;
        const channel = member.guild.channels.cache.get(data.channelId);
        const welcomemsg = data.welcomeMsg;

        const canvas = Canvas.createCanvas(1772, 633);
        //make it "2D"
        const ctx = canvas.getContext('2d');
        //set the Background to the welcome.png
        const background = await Canvas.loadImage(`./assets/pics/welcome.png`);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = '#f2f2f2';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
        //set the first text string 
        var textString3 = `${member.user.username}`;
        //if the text is too big then smaller the text
        if (textString3.length >= 14) {
          ctx.font = 'bold 100px Genta';
          ctx.fillStyle = '#f2f2f2';
          ctx.fillText(textString3, 720, canvas.height / 2 + 20);
        }
        //else dont do it
        else {
          ctx.font = 'bold 150px Genta';
          ctx.fillStyle = '#f2f2f2';
          ctx.fillText(textString3, 720, canvas.height / 2 + 20);
        }
        //define the Discriminator Tag
        var textString2 = `#${member.user.discriminator}`;
        ctx.font = 'bold 40px Genta';
        ctx.fillStyle = '#f2f2f2';
        ctx.fillText(textString2, 730, canvas.height / 2 + 58);
        //define the Member count
        var textString4 = `Member #${member.guild.memberCount}`;
        ctx.font = 'bold 60px Genta';
        ctx.fillStyle = '#f2f2f2';
        ctx.fillText(textString4, 750, canvas.height / 2 + 125);
        //get the Guild Name
        var textString4 = `Welcome To ${member.guild.name}`;
        ctx.font = 'bold 60px Genta';
        ctx.fillStyle = '#f2f2f2';
        ctx.fillText(textString4, 700, canvas.height / 2 - 150);
        //create a circular "mask"
        ctx.beginPath();
        ctx.arc(315, canvas.height / 2, 250, 0, Math.PI * 2, true);//position of img
        ctx.closePath();
        ctx.clip();
        //define the user avatar
        const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
        //draw the avatar
        ctx.drawImage(avatar, 65, canvas.height / 2 - 250, 500, 500);
        //get it as a discord attachment
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

        //define the welcome embed
        const welcomeembed = new Discord.MessageEmbed()
          .setColor("#ffcfcf")
          .setTimestamp()
          .setFooter("Welcome", member.guild.iconURL({ dynamic: true }))
          .setDescription(`<a:Bemvindo:832980086835118080> **Hey ${user} welcome to ${member.guild.name}!** <a:Bemvindo:832980086835118080> \n\n ${welcomemsg} \n\n "*${responses[response]}*"`)
          .setImage("attachment://welcome-image.png")
          .attachFiles(attachment);
        //send the welcome embed to there
        channel.send(welcomeembed);

        // Test // channel.send(`Welcome ${user}!`)
    })
})

//--------------------------------------------------------------------------------------------------------------------\\

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
