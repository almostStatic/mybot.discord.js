const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      
        const abembed = new Discord.RichEmbed()
      
        .setTitle("Here is the most latest availbile source-code (GitHub)")
        .setURL("https://github.com/asadhum2005/my-discord.js-bot-open-spurce")
        .setColor('RANDOM')
        .setTimestamp()
      
        message.channel.send({embed: abembed});
      

}

module.exports.help = {
  name: "git"
}