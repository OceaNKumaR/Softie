const Discord = require('discord.js');
const botconfig = require('../botsettings.json');
const { MessageEmbed } = require('discord.js')

module.exports.run = async (bot, message, args) => {

    let responses = ["http://cdn.home-designing.com/wp-content/uploads/2019/08/mega-mansion-for-the-rich-1024x640.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTogBhcM2jMuzKLFGKipjSyHGFbwNA-gQzYMA&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlvp1pO2ICOmsfrPy8_lB3BCghqBnlSOjZ6w&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnWZ6hDb6oweG7qWt1tGLgl7ZtBGYKgLG0gQ&usqp=CAU",
"http://cdn.home-designing.com/wp-content/uploads/2019/09/modern-home-exterior-1.jpg",
"https://media.bizj.us/view/img/11507454/2*1024xx4484-2522-0-401.jpg",
"https://images.mansionglobal.com/im-147203?width=1280",
"https://media-cdn.tripadvisor.com/media/photo-s/1b/68/af/16/cretan-mansion.jpg",
"https://604now.com/wp-content/uploads/2020/07/Richmond1-1280x720.jpeg",
"https://robbreport.com/wp-content/uploads/2020/03/villa-1.jpg?w=1000",
"https://www.motherjones.com/wp-content/uploads/master_79.jpg?w=1200&h=630&crop=1",
"https://www.gannett-cdn.com/presto/2018/09/10/PDEM/fb211df4-d0ef-4088-81c5-cfd11d2490e2-1.jpg?crop=1919,1073,x0,y0&width=660&height=372&format=pjpg&auto=webp",
"https://s11.therealdeal.com/trd/tri/up/2020/03/Greenwich-mansion-with-%E2%80%98loads-of-privacy%E2%80%99-seeks-9.995M.jpg",
"https://i.ytimg.com/vi/Vl_JrEWZaHI/maxresdefault.jpg",
"https://images.spot.im/v1/production/ictvk3t32kziqroocv2w"]

    let response = Math.floor(Math.random() * responses.length)

    let embed = new MessageEmbed()
    .setTitle('Your New Mansion :grinning:')
    .setImage(`${responses[response]}`)
    .setColor('#ffcfcf')
    .setTimestamp()
    message.channel.send(embed)

}
module.exports.config = {
    name: "mymansion",
    description: "Shows info about your house.",
    usage: "s!mymansion",
    accessableby: "Members",
    aliases: []
}