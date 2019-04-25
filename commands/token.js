const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {


        howdumami = new Discord.RichEmbed()
        
        .setTitle("Here's my token...Keep it safe!")
        .setDescription("||How dumb do you think I am?||")
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Use /invite to invite me to your server!");
      
      message.channel.send(howdumami);
      
}

module.exports.help = {
  name: "token"
}