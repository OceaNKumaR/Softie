module.exports = (bot, message, playlist) => {

    message.channel.send(`${bot.emotes.music} - ${playlist.title} has been added to the queue (**${playlist.items.length}** songs) !`);

};