const discord = require("discord.js");
const botconfig = require("../botsettings.json");
const mapping = {
  ' ': '   ',
  '0': ':zero:',
  '1': ':one:',
  '2': ':two:',
  '3': ':three:',
  '4': ':four:',
  '5': ':five:',
  '6': ':six:',
  '7': ':seven:',
  '8': ':eight:',
  '9': ':nine:',
  '!': ':grey_exclamation:',
  '?': ':grey_question:',
  '#': ':hash:',
  '*': ':asterisk:'
};

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});

module.exports.run = async (bot, message, args) => {
    if(args.length < 1) {
        message.channel.send('You must provide some text to emojify!');
       }
      await message.delete();
      message.channel.send(args.join(' ').split('').map(c => mapping[c] || c).join(''));
    
        }
        
        module.exports.config = {
            name: "emojify",
            description: "emojify your text",
            usage: "s!emojify",
            accessableby: "Members",
            aliases: []
        }