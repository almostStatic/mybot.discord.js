const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      let embed2 = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .addField("Username ", `${message.author.tag} (ID: ${message.author.id})`, true)
      .addField("Status", message.member.presence !== null && message.member.presence.status !== null ? message.member.presence.status : "Offline")
      .addField("Playing ", `${message.author.presence.game === null ? "None" :  message.author.presence.game.name}`)
      .addField("Nickname ", `${message.member.displayName}`)
      .addField("Role(s) ", `${message.member.roles.map(r => r.name).join(", ")}`)
      .addField("Highest Role ", message.member.highestRole.name)
      .addField("Joined Guild At ", `${message.member.joinedAt.toDateString()}`)
      .addField("Joined Discord At ", `${message.author.createdAt.toDateString()}`)
      .setTimestamp()
      .setFooter(message.author.username, message.author.avatarURL);
    if (message.mentions.users.size < 1) return message.channel.send(embed2);
      
    let member = message.mentions.members.first();
    let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(member.user.avatarURL)
      .addField("Username ", `${member.user.tag} (ID: ${member.id})`, true)
      .addField("Status", member.presence !== null && member.presence.status !== null ? member.presence.status : "Offline")
      .addField("Playing ", `${member.user.presence.game === null ? "Nothing" :  member.user.presence.game.name}`)
      .addField("Nickname ", `${member.nickname === null ? "None" : member.nickname}`)
      .addField("Role(s) ", `${member.roles.map(r => r.name).join(", ")}`)
      .addField("Highest Role ", member.highestRole.name)
      .addField("Joined Guild At ", `${member.joinedAt.toDateString()}`)
      .addField("Joined Discord At ", `${member.user.createdAt.toDateString()}`)
      .setTimestamp()
      .setFooter(member.user.username, member.user.avatarURL);
      message.channel.send({embed})
    }


module.exports.help = {
    name: "userinfo"
  }