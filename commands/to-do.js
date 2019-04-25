const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    // // // // // // // // // // // // // // // /;
    let todo = new Discord.RichEmbed()

    .setTitle(`The bot owner's to-do list:`)
    .setDescription("~~When `/ban` is used, DM user that has been banned~~ \n ~~+ When `/kick` has been used DM user that has been kicked~~ \n ~~+ When `/warn` has been used DM user that has been warned~~ \n + Update the `/help` command (School Version only) \n ~~+ Fix the `/warn` command~~ \n ~~+ Add a new commannd `/kiss @user`~~ \n ~~+ Make a `/pukeon @user` command to puke on a user~~ \n ~~+ Make a new `/eat <food>` command~~")
    .setColor('RANDOM')
    .setTimestamp()
    
    message.channel.send(todo);
  
  
  
  }

module.exports.help = {
  name: "to-do"
}