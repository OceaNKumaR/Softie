const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const { MessageEmbed } = require('discord.js');
const moment = require('moment');

const filterLevels = {
	DISABLED: 'Off',
	MEMBERS_WITHOUT_ROLES: 'No Role',
	ALL_MEMBERS: 'Everyone'
};

const verificationLevels = {
	NONE: 'None',
	LOW: 'Low',
	MEDIUM: 'Medium',
	HIGH: '(╯°□°）╯︵ ┻━┻',
  VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
};

const regions = {
	brazil: 'Brazil',
	europe: 'Europe',
	hongkong: 'Hong Kong',
	india: 'India',
	japan: 'Japan',
	russia: 'Russia',
	singapore: 'Singapore',
	southafrica: 'South Africa',
	sydeny: 'Sydeny',
	'us-central': 'US Central',
	'us-east': 'US East',
	'us-west': 'US West',
	'us-south': 'US South'
};

module.exports.run = async (bot, message, args) => {
  const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
  const members = message.guild.members.cache;
  const channels = message.guild.channels.cache;
  const emojis = message.guild.emojis.cache;

  const embed = new MessageEmbed()
    .setDescription(`**Server Name __${message.guild.name}__**`)
    .setColor('RANDOM')
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .addField('<a:animated_babes:769121437108797460> General <a:animated_babes:769121437108797460>', [
      `**<a:chahal_arrow:741240733029236756> Name:** ${message.guild.name}`,
      `**<a:chahal_arrow:741240733029236756> ID:** ${message.guild.id}`,
      `**<a:chahal_arrow:741240733029236756> Owner:** ${message.guild.owner.user.tag} (${message.guild.ownerID})`,
      `**<a:chahal_arrow:741240733029236756> Region:** \`${regions[message.guild.region]}`,
      `**<a:chahal_arrow:741240733029236756> Boost Tier:** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`,
      `**<a:chahal_arrow:741240733029236756> Explicit Filter:** ${filterLevels[message.guild.explicitContentFilter]}`,
      `**<a:chahal_arrow:741240733029236756> Verification Level:** ${verificationLevels[message.guild.verificationLevel]}`,
      `**<a:chahal_arrow:741240733029236756> Time Created:** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()}`,
      '\u200b'
    ])
    .addField('<a:animated_babes:769121437108797460> Statistics <a:animated_babes:769121437108797460>', [
      `**<a:chahal_arrow:741240733029236756> Role Count:** ${roles.length}`,
      `**<a:chahal_arrow:741240733029236756> Emoji Count:** ${emojis.size}`,
      `**<a:chahal_arrow:741240733029236756> Regular Emoji Count:** ${emojis.filter(emoji => !emoji.animated).size}`,
      `**<a:chahal_arrow:741240733029236756> Animated Emoji Count:** ${emojis.filter(emoji => emoji.animated).size}`,
      `**<a:chahal_arrow:741240733029236756> Member Count:** ${message.guild.memberCount}`,
      `**<a:chahal_arrow:741240733029236756> Humans:** ${members.filter(member => !member.user.bot).size}`,
      `**<a:chahal_arrow:741240733029236756> Bots:** ${members.filter(member => member.user.bot).size}`,
      `**<a:chahal_arrow:741240733029236756> Text Channels:** ${channels.filter(channel => channel.type === 'text').size}`,
      `**<a:chahal_arrow:741240733029236756> Voice Channels:** ${channels.filter(channel => channel.type === 'voice').size}`,
      `**<a:chahal_arrow:741240733029236756> Boost Count:** ${message.guild.premiumSubscriptionCount || '0'}`,
      '\u200b'
    ])
    .addField('<a:animated_babes:769121437108797460> Presence <a:animated_babes:769121437108797460>', [
      `**<a:chahal_arrow:741240733029236756> Online:** ${members.filter(member => member.presence.status === 'online').size}`,
      `**<a:chahal_arrow:741240733029236756> Idle:** ${members.filter(member => member.presence.status === 'idle').size}`,
      `**<a:chahal_arrow:741240733029236756> Do Not Disturb:** ${members.filter(member => member.presence.status === 'dnd').size}`,
      `**<a:chahal_arrow:741240733029236756> Offline:** ${members.filter(member => member.presence.status === 'offline').size}`,
      '\u200b'
    ])
    .setTimestamp();
  message.channel.send(embed);
}

module.exports.config = {
    name: "serverinfo",
    description: "shows the server info",
    usage: "s!serverinfo",
    accessableby: "Members",
    aliases: []
}