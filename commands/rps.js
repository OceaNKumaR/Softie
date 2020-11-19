const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {

    if (!args[1]) {
        message.reply(
            `**<a:noheckno:770923367074627595> Pick one (Rock, Paper, Scissors) and make sure to type it after "s!rps" to play!**`
        );
    } else {
        const choices = ["rock", "paper", "scissors"];
        const computer = choices[Math.floor(Math.random() * choices.length)];
        const player = args[1].toLowerCase();
    
        var gameMsg;
        if (choices.includes(player)) {
            const choiceDict = { rock: 0, paper: 1, scissors: 2 };
            const playerIdx = choiceDict[player];
            const computerIdx = choiceDict[computer];
    
            if (playerIdx == computerIdx) gameMsg = "**It's a tie!** <:wPog:778904597951414282>";
            if (computerIdx == playerIdx + 1 || computerIdx == playerIdx - 2)
                gameMsg = "**You lose.** <a:laughh:778903191701291058>";
            if (playerIdx == computerIdx + 1 || playerIdx == computerIdx - 2)
                gameMsg = "**You win!** <a:giveaway2:778903658837311489>";
    
            message.channel.send(`**You : ${player}\nSoftie : ${computer}\n${gameMsg}**`);
        } else message.reply("<a:noheckno:770923367074627595> **Invalid Choice... Try again**");
    }
}
module.exports.config = {
    name: "rps",
    description: "Rock Paper Scissors game. React to one of the emojis to play the game.",
    usage: "s!rps",
    accessableby: "Members",
    aliases: []
}

