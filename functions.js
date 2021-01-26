const Discord = require("discord.js")
const yes = ['yes', 'y', 'ye', 'yea', 'correct'];
const no = ['no', 'n', 'nah', 'nope', 'fuck off', 'noi'];

module.exports = {

      delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      },

      randomRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },

      verify: async function (channel, user, { time = 30000, extraYes = [], extraNo = [] } = {}) {
        const filter = res => {
          const value = res.content.toLowerCase();
          return (user ? res.author.id === user.id : true)
            && (yes.includes(value) || no.includes(value) || extraYes.includes(value) || extraNo.includes(value));
        };
        const verify = await channel.awaitMessages(filter, {
          max: 1,
          time
        });
        if (!verify.size) return 0;
        const choice = verify.first().content.toLowerCase();
        if (yes.includes(choice) || extraYes.includes(choice)) return true;
        if (no.includes(choice) || extraNo.includes(choice)) return false;
        return false;
      }

}