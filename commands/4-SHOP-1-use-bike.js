const Discord = require('discord.js');
const botconfig = require('../botsettings.json');
const { MessageEmbed } = require('discord.js')

module.exports.run = async (bot, message, args) => {


let responses = ["https://media.zigcdn.com/media/model/2020/Mar/yamaha-yzf-r15-v3-right-side-view_270x180.jpg",
"https://images.carandbike.com/bike-images/medium/ultraviolette/f77/ultraviolette-f77.webp?v=2",
"https://images-na.ssl-images-amazon.com/images/I/61FMbYqZVxL._SY355_.jpg",
"https://images.financialexpress.com/2019/11/Ultraviolette-f77-electric-bike-1200x800.jpg?w=1200&h=800&imflag=true",
"https://www.drivespark.com/bikes-photos/models/450x350/benelli-trk-502_1500457200.jpg/3/x.pagespeed.ic.K-ICPOqPBj.jpg",
"https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2018/05/12/38013-vulcan-s.jpg?itok=VW_EtUH8",
"https://etimg.etb2bimg.com/photo/63534904.cms",
"https://static.autox.com/uploads/bikes/2020/08/honda-hornet-2-0.jpg",
"https://www.heromotocorp.com/en-in/xtreme160r/images/price-bike.png",
"https://www.yulu.bike/wp-content/uploads/2019/08/Miracle-Product.png",
"https://assetscdn1.paytm.com/images/catalog/product/K/KI/KIDGETTBOLES-GEGET-29733964B3FCAB/1601660142391_0..jpg?imwidth=282&impolicy=hq",
"https://www.drivespark.com/bikes-photos/models/450x350/xtreme-200s_1557153269.jpg/3/x.pagespeed.ic.VfWD98jR1z.jpg",
"https://static.autox.com/uploads/bikes/2020/08/kawasaki-vulcan-s.jpg",
"https://imgd.aeplcdn.com/310x174/bw/models/bajaj-avenger-street-160-bs-vi20200211171236.jpg?q=75",
"https://media.zigcdn.com/media/model/2020/Apr/rtr-160-bs6_360x240.jpg",
"https://images.carandbike.com/bike-images/medium/revolt/rv400/revolt-rv400.webp?v=9",
"https://im.rediff.com/getahead/2016/jun/01bike4.jpg?w=670&h=900",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0sMjtj7HpSluGJkFyaFnLKGiTQc5peyLFqA&usqp=CAU",
"https://media.zigcdn.com/media/model/2020/Jan/hero-hf-deluxe-bs6-right-side-view_270x180.jpg",
"https://images.carandbike.com/bike-images/medium/kawasaki/z-h2/kawasaki-z-h2.webp?v=3",
"https://images.financialexpress.com/2020/04/Yamaha-MT-15-7.png?w=660&h=440&imflag=true",
"https://media.zigcdn.com/media/model/2020/Feb/s-100-rr_360x240.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyl6sG1713tD6IS4GJ8Qo0Iac7yDlFZukVXg&usqp=CAU",
"https://static.autox.com/uploads/bikes/2017/05/1486029592-honda-cd110dream.jpg",
"https://www.heromotocorp.com/en-in/uploads/bike/bike_pic_main/20200402062604-bike-12.jpg"]

let response = Math.floor(Math.random() * responses.length)

let embed = new MessageEmbed()
.setTitle('Your New Bike :grinning:')
.setImage(`${responses[response]}`)
.setColor('#ffcfcf')
.setTimestamp()
message.channel.send(embed)

}
module.exports.config = {
name: "mybike",
description: "Shows info about your bike.",
usage: "s!mybike",
accessableby: "Members",
aliases: []
}