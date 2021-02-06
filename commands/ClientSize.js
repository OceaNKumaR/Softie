const discord = require("discord.js")
const botconfig = require("../botsettings.json");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

    let owner = '494738882617933830'

    if (!owner.includes(message.author.id)) return;

    const file = args[0];
    if (!file) return message.reply("You must provide a file (and location if non-root file), and the correct syntax must be used.");

    try {
      const stats = fs.statSync(file);
      const fileBytes = stats["size"];
      const fileKB = fileBytes / 1024;

      message.channel.send(`\`${file}\` currently has a size of **${fileBytes}** bytes (${fileKB.toFixed(2)}KB).`);
    } catch (error) {
      if (error.code === "ENOENT") return message.channel.send(`The file \`${file}\` could not be found.`);
      else this.client.logger.error(error);
    }
  }


module.exports.config = {
    name: "bsize",
    description: "tells the bots size",
    usage: "s!bsize",
    accessableby: "Owner",
    aliases: []
}