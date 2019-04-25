const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    q1 = "  -- Andres Iniesta";
    q2 = "  -- French Poverb";
    q3 = "  -- www.quotesgate.com";
  
    quotes = new Discord.RichEmbed()
  
  .setDescription("**__Here are some inspirational quotes!__**")
  .setColor("RANDOM")
  .addField("**Some people like you, some people don't. In the end, you just have to be yourself.**", q1)
  .addField("**Wherever life plants you, bloom with grace**", q2)
  .addField("Don’t forget you’re human. It’s okay to have a meltdown. Just don’t unpack and live there. Cry it out. Then refocus on where you’re headed", q3)
  .setFooter("Use /invite to invite me to your server!");
  
   message.channel.send(quotes);
  
  
  
}

module.exports.help = {
  name: "quotes"
}