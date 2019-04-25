const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


          let nomention = new Discord.RichEmbed()

          .setDescription(`You need to mention a user for this command to work!`)
          .setColor("#987654")


          let aa = message.mentions.members.first();
            if(!aa) return message.channel.send({embed: nomention});
            
          let polish = new Discord.RichEmbed()

            .setDescription(`${message.member.user.tag} has polised ${aa.user.tag}'s head and made it shine! `)
            .setColor("RANDOM")

                 message.channel.send(polish)

                      }

module.exports.help = {
  name: "polish"
}