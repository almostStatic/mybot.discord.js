const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    hostembed = new Discord.RichEmbed()
  
    .setTitle("Get the best bot/web hosting here!")
    .setColor("RANDOM")
    .setURL("https://www.seimaxim.com/")
    .setTimestamp()
  
     message.channel.send(hostembed);

}

module.exports.help = {
  name: "hosting"
}