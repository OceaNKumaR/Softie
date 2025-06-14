const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const math = require('mathjs');

module.exports.run = async (bot, message, args) => {
    
    if(!args[0]) return message.channel.send('Please provide a question');

    let resp;

    try {
        resp = math.evaluate(args.join(" "))
    } catch (e) {
        return message.channel.send('Please provide a **valid** question')
    }

    const embed = new Discord.MessageEmbed()
    .setColor(0x808080)
    .setTitle('Calculator')
    .addField('Question', `\`\`\`css\n${args.join(' ')}\`\`\``)
    .addField('Answer', `\`\`\`css\n${resp}\`\`\``)

    message.channel.send(embed);

}
module.exports.config = {
    name: "calculate",
    description: "Get the answer to a math problem",
    usage: "s!calculate",
    accessableby: "Admins",
    aliases: []
}