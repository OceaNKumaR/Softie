const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const request = require('request');
const cheerio = require('cheerio');

module.exports.run = async (bot, message, args) => {
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + "ghost",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
 
 
 
 
 
    request(options, function(error, response, responseBody) {
        if (error) {
            return;
        }
 
 
        $ = cheerio.load(responseBody);
 
 
        var links = $(".image a.link");
 
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
       
        console.log(urls);
 
        if (!urls.length) {
           
            return;
        }
 
        // Send result
        message.channel.send( urls[Math.floor(Math.random() * urls.length)]);

    });

}

    
    module.exports.config = {
      name: "boo",
      description: "Get a Spooky image",
      usage: "s!boo",
      accessableby: "Members",
      aliases: []
  }