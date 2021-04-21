const Discord = require('discord.js');
const botconfig = require('../botsettings.json');
const Schema = require("../schema/member-count.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.permissions.has ("ADMINISTRATOR")) return;
    Schema.findOne({ Guild: message.guild.id }, async (err, data) => {
        if (data) data.delete();

        const channel = await message.guild.channels.create(
            `Member: ${message.guild.memberCount}`,
            {
                type: "voicе",
                permissionoverwrites: [
                    {
                        id: message.guild.id,
                        deny: ["CONNECT"],
                    },
                ],
            }
            );
            new Schema ({
                Guild: message.guild.id,              
                Channel: channel.id,
                Member: message.guild.memberCount,
            }).save();

        });


}
module.exports.config = {
    name: "set-membercount",
    description: "Sets the Member Count system.",
    usage: "s!set-membercount",
    accessableby: "Admin",
    aliases: []
}