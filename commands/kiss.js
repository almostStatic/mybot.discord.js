const Discord = require("discord.js")


module.exports.run = (client, message, args, level) => {

    let member = message.mentions.members.first()

    let embed = new Discord.RichEmbed()

    .setTitle(`${message.member.user.tag} has kissed ${member.user.tag} 💖`)
    .setColor("RANDOM")

    let embed2 = new Discord.RichEmbed()

    .setTitle(`You need to mention a user for this command to work!`)
    .setColor("#ff9900")

    message.channel.send(embed);
    message.channel.send(`Feel the love`)
        if(!member) return message.channel.send(embed2);

};

module.exports.help = {
    name: "kiss"
  }
  