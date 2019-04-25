const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 // Correct Usage:
        // /kick @user <reason>
       
          let nokickuser = new Discord.RichEmbed()

          .setDescription(`❌ **Error 404:** You need to **mention** a user for this command to work!`)
          .setColor("#ff0000")
          let cantdo = new Discord.RichEmbed()

          .setDescription("I have not got the ban Members Permission. Please check my roles and permissoins. If you are stilll encountering this problem, join my support server. (https://discord.gg/2dbQt8d)")
          .setColor("#ff0000")
        
          if(!client.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(cantdo);        
        let servername = message.guild.name;
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kUser) return message.channel.send(nokickuser);
        let kReason = args.join(" ").slice(22);
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(" ❌ **You do not have permissoins to use ths command**!");
        if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(" ❌**ERROR:** The user is mod/admin, or has a higher role than me. I can't do that.");
    // Declare the var, create embed:::
        let kickEmbed = new Discord.RichEmbed()
        .setDescription("*Kick*")
        .setColor("#bf4848")
        .addField("Kicked User", `${kUser} (${kUser.id})`)
        .addField("Kicked By", `<@${message.author.id}> (${message.author.id})`)
        .addField("Kicked In", message.channel)
        .addField("Kicked At", message.createdAt)
        .addField("Reason", kReason)
        .setFooter("Use /invite to invite me to your server!")
    
        let kickChannel = message.guild.channels.find(`name`, "incidents");
        if(!kickChannel) return message.channel.send("❌ Can't find incidents channel, I will log the kick in this channel.", kickEmbed);
        kUser.send(`You have been kicked from ${servername}. Here are some details:`, kickEmbed);
        message.guild.member(kUser).kick(kReason);
        kickChannel.send(kickEmbed);

    // ^^^^^^ End of cmd ^^^^^

}
 
module.exports.help = {
  name: "kick"
}