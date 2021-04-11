const Discord = require('discord.js');
const botconfig = require('../botsettings.json');
const { MessageEmbed } = require('discord.js')

module.exports.run = async (bot, message, args) => {

    function clean(text) {
        if (typeof text === "string")
            return text
                .replace(/`/g, "`" + String.fromCharCode(8203))
                .replace(/@/g, "@" + String.fromCharCode(8203));
        else return text;
    }
    let owner = ['494738882617933830','745867528651276318']

    if (!owner.includes(message.author.id)) return message.reply("Developers Only!");

    try {
        const code = args.join(" ");
        let evaled = eval(code);

        if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

        message.react("✅");
        var emb = new MessageEmbed()
            .setTitle('Result')
            .setDescription(`\`\`\`js` + '\n' + clean(evaled) + `\n` + `\`\`\``)
            .setFooter(bot.user.username, bot.user.displayAvatarURL({ dynamic: true }))
            .setColor(0xd26a0e)
        message.channel.send(emb);
    } catch (err) {
        message.react("⚠");
        var emb = new MessageEmbed()
            .setTitle('Result')
            .setDescription(`\`\`\`js` + '\n' + clean(err) + `\n` + `\`\`\``)
            .setFooter(bot.user.username, bot.user.displayAvatarURL({ dynamic: true }))
            .setColor(0xd26a0e)
        message.channel.send(emb);
    }
}


module.exports.config = {
    name: "eval",
    description: "Evaluates js code",
    usage: "s!eval",
    accessableby: "Admin",
    aliases: []
}
