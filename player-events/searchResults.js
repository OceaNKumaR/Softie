module.exports = (bot, message, query, tracks) => {

    message.channel.send({
        embed: {
            color: 'RED',
            author: { name: `Here are your search results for ${query}` },
            footer: { text: 'TYPE THE NO. BELOW TO PLAY THE SONG' },
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });

};