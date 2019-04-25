const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    let aEmbed = new Discord.RichEmbed()
  
    .setTitle(`Here is a link to the default cursor pack (Windows 7 | GitHub)`)
    .setURL("https://github.com/asadhum2005/win7-cursor-pack")
    .setColor("RANDOM");
  
    message.channel.send({embed: aEmbed});
  
}

module.exports.help = {

    name: "win-7-cursor-pack"

}