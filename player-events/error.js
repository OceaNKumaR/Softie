module.exports = (bot, error, message) => {

    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${bot.emotes.error} - There is no music being played on this server !`);
            break;
        case 'NotConnected':
            message.channel.send(`${bot.emotes.error} - You are not connected in any voice channel !`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${bot.emotes.error} - I am not able to join your voice channel, please check my permissions !`);
            break;
        default:
            message.channel.send(`${bot.emotes.error} - Something went wrong ... Error : ${error}`);
    };

};
