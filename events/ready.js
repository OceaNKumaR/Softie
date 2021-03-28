const bot = require('../index.js')
const ms = require("ms");
const Schema = require("../schema/member-count.js");

module.exports = bot => { 
    console.log(`${bot.user.username} is online`)
    bot.user.setActivity("www.softiebot.cf", {type: "WATCHING"});

    // Member Count

    setInterval(() => {
        Schema.find(). then((data) => {
            if (!data && !data.length) return;
            data.forEach((value) => {
                const guild = bot.guilds.cache.get(value.Guild);
                const memberCount = guild.memberCount;

                if (value.Member != memberCount) {
                    console.log("The member count differs");
                    const channel = guild.channels.cache.get(value.Channel);

                    value.Member = memberCount;
                    value.save();
                }
            });
        });
    }, ms('5 seconds'));

}
