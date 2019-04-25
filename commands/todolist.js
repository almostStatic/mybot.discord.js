const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let member = message.mentions.members.first();
    // // // // // // // // // // // // // // // /;
    let todo = new Discord.RichEmbed()
    
    .setDescription("~~+ When a user has been reported, DM the user that has been reported.~~ \n ~~When `/ban` is used, DM user that has been banned~~ \n ~~+ When `/kick` has been used DM user that has been kicked~~ \n + When `/warn` has been used DM user that has been warned \n + Update the `/help` command (School Version only) \n + Fix the `/warn`")
    .setColor('RANDOM')
    .setFooter("If an actoin has been crossed out, then it has been implemented into the bot. The todo list will be cleared every 2 weeks.")
    .setTimestamp()

    message.channel.send(todo)

    

}

module.exports.help = {
  name: "to-do"
}