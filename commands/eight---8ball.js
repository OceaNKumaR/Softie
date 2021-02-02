const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {

	let question = args[0]

    if (!question) {
      message.channel.send("You will have to enter your question next to the command!")
    }

    else {

      let responses = [
		  "As I see it, yes.",
		   "Ask again later.",
			"Better not tell you now.",
			 "Cannot predict now.",
			  "Concentrate and ask again.",
			   "Don’t count on it.",
				"It is certain.",
				 "It is decidedly so.",
				  "Most likely.",
				   "My reply is no.",
					"My sources say no.",
					 "Outlook not so good.",
					  "Outlook good.",
					   "Reply hazy, try again.",
						"Signs point to yes.",
						 "Very doubtful.",
						  "Without a doubt.",
							"Yes – definitely.",
							 "You may rely on it.",
							 "Maybe.",
							 "Certainly not.",
							 "I hope so.",
							 "Not in your wildest dreams.",
							 "There is a good chance.",
							 "Quite likely.",
							 "I think so.",
							 "I hope not.",
							 "I hope so.",
							 "Never!",
							 "Fuhgeddaboudit.",
							 "Ahaha! Really?!?",
							 "Sorry, bucko.",
							 "Hell, yes.",
							 "Hell to the no.",
							 "The future is bleak.",
							 "The future is uncertain.",
							 "I would rather not say.",
							 "Who cares?",
							 "Possibly.",
							 "Never, ever, ever.",
							 "There is a small chance.",
							 "Yes!",
							"Shut up kiddo"]

	  let response = Math.floor(Math.random() * responses.length)
	  
	  let embed = new MessageEmbed()
	  .setTitle(`:8ball: 8ball`)
	  .setDescription(`**${responses[response]}**`)
	  .setColor("#ffcfcf")
	  message.channel.send(embed)

    }


  }

  module.exports.config = {
    name: "8ball",
    description: "There is a big chance I insult you",
    usage: "s!8ball",
    accessableby: "Members",
    aliases: []
}
