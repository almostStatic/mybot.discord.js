const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let prefixEmbed = new Discord.RichEmbed()
//                      Hey user#1234 my prefix...
    .setDescription(`Hey ${message.member.user.tag}, my prefix is `/` and currently **__isn't changeable!__**`)
    .setColor('RANDOM')
    .setTimestamp()

    message.channel.send(prefixEmbed);

}

module.exports.help = {
  name: "prefix"
}