const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let member = message.mentions.members.first();
    // // // // // // // // // // // // // // // /;
    let embedofotheruser = new Discord.RichEmbed()
    
    .setTitle(`${member.user.tag}`)
    .setDescription(`${member.id}`)
    .setColor('RANDOM')
    .setTimestamp()

    message.channel.send(embedofotheruser);
      let embed2 = new Discord.RichEmbed()

      .setTitle(`${message.member.user.tag}`)
      .setDescription(`${message.author.id}`)
      .setColor("RANDOM")

    if (message.mentions.users.size < 1) return message.channel.send(embed2);

    

}

module.exports.help = {
  name: "id"
}