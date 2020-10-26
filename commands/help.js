const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    //We have to set a argument for the help command beacuse its going to have a seperate argument.
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    //Custom Help command by using the second argument.
    if(helpArgs[0] === 'gaming') {
        return message.reply("This is a Gaming information Command.")
    }

    //Normal usage of (prefix)help without any args. (Shows all of the commands and you should set the commands yourself)
    if(!helpArgs[0]) {
        var embed = new Discord.MessageEmbed()
            .setAuthor(`Here is the Avaible Commands to use:`)
            .setDescription('Prefix `?`')
            .addFields({ name: '<a:yes_no:749635752018837575> **INFO**', value: '```memberinfo , about , ping , setnickname , clientid , serverinfo , addrole , cooldown```'})
            .addFields({ name: '<a:yes_no:749635752018837575> **FUN**', value: '```kiss , cuddle , 8ball , hug , flipcoin , meme , say , hi```'})
            .addFields({ name: '<a:yes_no:749635752018837575> **MODERATION**', value: '```kick , ban , mute , unmute , purge , embed , addrole , removerole , giveaway```'})
            .addFields({ name: '<a:yes_no:749635752018837575> **NSFW**', value: '```nekonsfw , nsfw , boobs```'})
            .addFields({ name: '<a:yes_no:749635752018837575> **IMAGE**', value: '```cat , dog , house , thor , boo , ugly , ironman```'})
            .addFields({ name: '<a:yes_no:749635752018837575> **UTILITY**', value: '```weather , avatar , dm , ascii , reddit```'})
            .setColor('#00FFF3')
            
        message.channel.send(embed);
    }

    //Reads the moudle.exports.config (This line of code is on commands folder, each command will read automaticly) by the second argument (the command name) and shows the information of it.
    if(helpArgs[0]) {
        let command = helpArgs[0];

        if(bot.commands.has(command)) {
            
            command = bot.commands.get(command);
            var embed = new Discord.MessageEmbed()
            .setAuthor(`?${command.config.name} Command`)
            .setDescription(`
            <a:chahal_arrow:741240733029236756> **Description** ${command.config.description || "There is no Description for this command."}
            <a:chahal_arrow:741240733029236756> **Usage:** ${command.config.usage || "No Usage"}
            <a:chahal_arrow:741240733029236756> **Permissions:** ${command.config.accessableby || "Members"}`)
            .setColor('#2EFF00')

        message.channel.send(embed);
    }}
}

module.exports.config = {
    name: "help",
    description: "",
    usage: "?help",
    accessableby: "Members",
    aliases: []
}
