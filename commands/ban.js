const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: false});

module.exports.run = async (bot, message, args) => {
  
  let cantdo = new Discord.RichEmbed()

  .setDescription("I have not got the ban Members Permission. Please check my roles and permissoins. If you are stilll encountering this problem, join my support server. (https://discord.gg/2dbQt8d)")
  .setColor("#ff0000")

  if(!client.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(cantdo);
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send(" ❌ **Can't find user!**");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("❌ You dcan't do that!");
    if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("❌ That person can't be banned! They have the BAN MEMVERS permission.");
    let servername = message.guild.name;
    let banEmbed = new Discord.RichEmbed()
    .setTitle("MEMBER BANNNED:")
    .setColor("#ff0000")
    .addField("Banned User", `${bUser}, (${bUser.id})`, true)
    .addField("Banned By", `<@${message.author.id}>, (${message.author.id})`, true)
    .addField("Banned In", message.channel, true)
    .addField("Time", message.createdAt, true)
    .addField("Banned From", servername)
    .addField("Reason", bReason);

        bUser.send(`You have been banned from ${servername}. Here are some details:`, banEmbed);
          let incidentchannel = message.guild.channels.find(`name`, "incidents");
            if(!incidentchannel) return message.channel.send("Can't find incidents channel. I will log the ban in this channel.", banEmbed);
              message.channel.send(`**${bUser.user.tag} did ${bReason} and got the ban hammer!**`)
                message.guild.member(bUser).ban(bReason);
                  incidentchannel.send(banEmbed);



}

module.exports.help = {
  name:"ban"
}