const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if (isNaN(args[0]))
        return message.channel.send(
            "`I need to know how many messages to delete!`"
        );
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
        try {
            message.channel
                .bulkDelete(args)
                .then((messages) =>
                    message.channel
                    .send("`Successfully deleted " + args[0] + " messages!`")
                    .then((msg) => msg.delete({ timeout: 10000 }))
                );
        } catch {
            message.channel.send("`A Error occured while trying to delete!`");
        }
    } else {
        message.channel.send(
            "`You dont have enough permissions to execute this command!`"
        );
    }
}

module.exports.config = {
    name: "purge",
    description: "deletes messages in a channel!",
    usage: "?purge",
    accessableby: "Admin",
    aliases: []
}
