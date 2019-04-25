const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    test = new Discord.RichEmbed()
  
    .setDescription("**__I AM ALIVE!__**")
    .setColor("#765836")
  
    message.channel.send({embed: test});
  
}

module.exports.help = {
  name: "test"
}
