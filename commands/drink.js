const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let drinkEmbed = new Discord.RichEmbed()

    .setDescription(`${nessage.member.user.tag} has drunk a mug of 🍺 `)
    .setColor('RANDOM')

    message.channel.send(drinkEmbed)
}

module.exports.help = {
  name: "drink"
}