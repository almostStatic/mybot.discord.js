const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      var colors = [
          
        "#345344",
        "#345678",
        "#598756",
        "#987456",
        "#875648",
        "#456788",
                    
      ]
    let aEmbed = new Discord.RichEmbed()
  
    .setTitle(`Here is a link to the default cursor pack (Windows 7 | GitHub)`)
    .setURL("https://github.com/asadhum2005/win7-cursor-pack")
    .setColor(colors);
  
    message.channel.send({embed: aEmbed});
  
}

module.exports.help = {

    name: "win-7-cursor-pack"

}