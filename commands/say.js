const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(message.author.id !== "501710994293129216", "431684183371415555")return message.reply("Only the owner**s** can use this command!")

        // makes the bot say something and delete the message. 
        // To get the "message" itself we join the `args` back into a string with spaces: 
        const sayMessage = args.join(" ");
      
        const sayembed = new Discord.RichEmbed()
      
        .setDescription(sayMessage)
        .setColor('RANDOM')
        .setTimestamp()
      
        // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
        message.delete().catch(O_o=>{}); 
        // And we get the bot to say the thing: 
        message.channel.send(sayembed);
      

}

module.exports.help = {
  name: "say"
}