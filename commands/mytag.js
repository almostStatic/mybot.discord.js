const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        let mytagembed = new Discord.RichEmbed()
    
        .setDescription("username#discrim + ID:")
        .setColor("#000000")
        .addField("username#discrim:", message.member.user.tag)
        .addField("Your Discord user ID:", message.author.id)
        .setTimestamp()
        .setFooter("Use /invite to invite me to your server!");
    // message.member.user.tag displays the user in form, user#discrim
        message.channel.send(mytagembed);
                                   
    

}

module.exports.help = {
  name: "mytag"
}
