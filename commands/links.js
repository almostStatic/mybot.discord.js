const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        serverinvurl = "https://discord.gg/2dbQt8d";
        invurl = "https://discordapp.com/oauth2/authorize?client_id=517730016520568853&scope=bot&permissions=8";
        let bicon = bot.user.displayAvatarURL;
        const inviteEmbed = new Discord.RichEmbed()
        .setDescription("**__Useful Links!__**")
        .setColor('RANDOM')
        .setThumbnail(bicon)
        .addField("Invite Bot: ", invurl)
        .addField("Support Server: ",serverinvurl)
        .setTimestamp()
        
        message.channel.send(inviteEmbed);
  
}

module.exports.help = {
  name: `invite`
}
