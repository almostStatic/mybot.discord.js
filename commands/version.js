const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  // to be continued
  const embed = new Discord.RichEmbed()

  .setDescription("I am currently runnning on **school computers.** There may be certain differences within me. \n If you have any suggestions or any problems, please contact `sad (Eclipse)#3728`. He will respond to you as soon as possible. \n")
  .setFooter(`Use /invite to invite me to your server!`)
  .setColor(0x548975)
  message.channel.send(embed);

}

module.exports.help = {
  name: `version`
}