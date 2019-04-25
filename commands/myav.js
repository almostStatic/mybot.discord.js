const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        const av = message.author.avatarURL;
        avembed = new Discord.RichEmbed()
        
          .setImage(av)
          .setColor("#848058")
        
          message.channel.send({embed: avembed});
      

}

module.exports.help = {
  name: "myav"
}
