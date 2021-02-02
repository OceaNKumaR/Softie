const Discord = require('discord.js');
const botconfig = require('../botsettings.json');
const { MessageEmbed } = require('discord.js')

module.exports.run = async (bot, message, args) => {

    let responses = ["https://www.businessinsider.in/thumb.cms?msid=71543233&width=1200&height=900",
"https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F0x0.jpg%3FcropX1%3D790%26cropX2%3D5350%26cropY1%3D784%26cropY2%3D3349",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzYGDDK5oUFaOwWU3cUDccBY93aIzBrLPDEg&usqp=CAU",
"https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2019/10/Buy-a-Kia-Telluride-Instead-gear-patrol-slide-1.jpg?crop=0.620xw:0.919xh;0.293xw,0.0813xh&resize=640:*",
"https://upload.wikimedia.org/wikipedia/commons/4/49/2013-2016_Toyota_Corolla_%28ZRE172R%29_SX_sedan_%282018-09-17%29_01.jpg0",
"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/new-ghost-white-fr-3-4-1-1598911711.jpg",
"https://imgd.aeplcdn.com/0x0/cw/ec/39045/Audi-Q4-Etron-concept-Exterior-170100.jpg?wm=0",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz-lzxBHsNoUt6lvjyxKaLLVBuZtbPUe4Mzw&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ_vH-HyoaE9fiUcXWZVp3QUQ4GhW9rnLlHA&usqp=CAU",
"https://media.zigcdn.com/media/model/2019/Sep/maruti-alto-800_270x180.jpg",
"https://thumbor.forbes.com/thumbor/trim/299x201:2851x1638/fit-in/711x400/smart/https://specials-images.forbesimg.com/imageserve/5d37046395e0230008f64edf/0x0.jpg",
"https://img.etimg.com/thumb/width-640,height-480,imgsize-854852,resizemode-1,msid-72473282/industry/auto/cars-uvs/mercedes-benz-cars-to-be-pricier-by-up-to-3-from-january-2020.jpg",
"https://i.ytimg.com/vi/bzljDov1GkQ/maxresdefault.jpg",
"https://cdn.autoportal.com/img/new-cars-gallery/renault/triber/colors/195efcfd6b023f7399bff2c11ad7b633.jpg",
"https://images.carandbike.com/car-images/large/maruti-suzuki/baleno/maruti-suzuki-baleno.jpg?v=68"]

    let response = Math.floor(Math.random() * responses.length)

    let embed = new MessageEmbed()
    .setTitle('Your New Car :grinning:')
    .setImage(`${responses[response]}`)
    .setColor('#ffcfcf')
    .setTimestamp()
    message.channel.send(embed)

}
module.exports.config = {
    name: "mycar",
    description: "Shows info about your car.",
    usage: "s!mycar",
    accessableby: "Members",
    aliases: []
}