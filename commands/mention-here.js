const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    everyone = new Discord.RichEmbed()
    .setTitle("You are not allowed to use this command!")
    .setColor("#ff0000")
    message.delete(0);
        if(!message.member.hasPermission('MENTION_EVERYONE')) return message.channel.send({embed: everyone});
        return message.channel.send(`<@${message.author.id}> mentioned @here!`)
    
  
}

module.exports.help = {
  name: "mention-here"
}
