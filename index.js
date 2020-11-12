const Discord = require('discord.js');
const botsettings = require('./botsettings.json');
const mongoose = require('mongoose');
const Levels = require('discord-xp')

const bot = new Discord.Client({disableEveryone: true});

mongoose.connect('mongodb+srv://OceanYT:Same_time*@softie.ic3xz.mongodb.net/Data' , {useNewUrlParser: true} , {useUnifiedTopology: true})

bot.on("ready", async () => { 
    console.log(`${bot.user.username} is online`)
    bot.user.setActivity("s!help | s!invite", {type: "STREAMING" , url: "https://twitch.tv/OceanYT" });
})


const { GiveawaysManager } = require('discord-giveaways');

bot.giveawaysManager = new GiveawaysManager(bot, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        exemptPermissions: ["MANAGE_MESSAGES", "ADMINISTRATOR"],
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});

require("./util/eventHandler")(bot)

const fs = require("fs");
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

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let prefix = botsettings.prefix;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    var parts = message.content.split(" ");
    
    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args)

})


const usersMap = new Map();
const LIMIT = 5;
const TIME = 300000;
const DIFF = 3000;

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


Levels.setURL("mongodb+srv://OceanYT:Same_time*@softie.ic3xz.mongodb.net/Data")


bot.on("message", async message => {
        if (!message.guild) return;
        if (message.author.bot) return;
    
        const prefix = 's!';
    
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
    
        const randomXp = math.floor(math.random() * 9) + 1; //Random amont of XP until the number you want + 1
        const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);
        if (hasLeveledUp) {
            const user = await Levels.fetch(message.author.id, message.guild.id);
            message.channel.send(`You leveled up to ${user.level}! Keep it going!`);
        }
        
        //Rank
        if(command === "rank") {
            const user = await Levels.fetch(message.author.id, message.guild.id);
            message.channel.send(`You are currently level **${user.level}**!`)
        }
        
        //Leaderboard
        if(command === "leaderboard" || command === "lb") {
            const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 5);
            if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");
    
            const leaderboard = Levels.computeLeaderboard(bot, rawLeaderboard); 
    
            const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`);
    
            message.channel.send(`${lb.join("\n\n")}}`)
        }
    })

bot.login(botsettings.token);
