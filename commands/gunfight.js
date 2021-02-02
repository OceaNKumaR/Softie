const Discord = require('discord.js');
const botconfig = require('../botsettings.json');
const { delay, randomRange, verify } = require('../functions.js');
const words = ['fire', 'draw', 'shoot', 'bang', 'pull', 'boom', 'ambitious', 'eyes', 'bite-sized', 'languid', 'cycle', 'pale', 'smoggy', 'decorous', 'rural', 'long-term', 'decorous', 'snotty', 'nonstop', 'merciful', 'steep', 'group', 'unequaled', 'fortunate', 'vanish', 'slippery'];

module.exports.run = async (bot, message, args) => {

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



    if (!args[0]) return message.channel.send("**Please Enter A User To Play With!**")
    let opponent = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase());
    if (!opponent) return message.channel.send("**Please Enter A Valid User!**")
    if (opponent.user.bot) return message.channel.send('**Cannot Fight Bots!**');
    if (opponent.user.id === message.author.id) return message.channel.send('**Cannot Fight Yourself!**');
    const current = ops.games.get(message.channel.id);
    if (current) return message.channel.send(`**Please Wait Until The Current Game of \`${current.name}\` is Finished!**`);
    ops.games.set(message.channel.id, { name: 'testing-channel-no3' });
    try {
        await message.channel.send(`**${opponent}, Do You Accept This Challenge?**`);
        const verification = await verify(message.channel, opponent);
        if (!verification) {
            ops.games.delete(message.channel.id);
            return message.channel.send(`**Looks like ${opponent} Doesnt Wants To Play!**`);
        }
        await message.channel.send('**Get Ready, Game Will Start At Any Moment!**');
        await delay(randomRange(1000, 10000));
        const word = words[Math.floor(Math.random() * words.length)];
        await message.channel.send(`TYPE \`${word.toUpperCase()}\` NOW!`);
        const filter = res => [opponent.user.id, message.author.id].includes(res.author.id) && res.content.toLowerCase() === word.toLocaleLowerCase();
        const winner = await message.channel.awaitMessages(filter, {
            max: 1,
            time: 30000
        });
        ops.games.delete(message.channel.id);
        if (!winner.size) return message.channel.send('**Nobody Won!*');
        return message.channel.send(`**The Winner is ${winner.first().author}!**`);
    } catch (err) {
        ops.games.delete(message.channel.id);
        throw err;
    }
}

module.exports.config = {
    name: "gunfight",
    description: "Engage In A Gunfight Against Another User",
    usage: "s!gunfight",
    accessableby: "Members",
    aliases: ["gf"]
}