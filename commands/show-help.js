const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const embed1 = new Discord.RichEmbed()

    .setDescription(`Getting Help Commands...`)

    const embed2 = new Discord.RichEmbed()

    .setDescription("Check your DMs for a list of commands. (If you have your DMs locked, use `/show-help`)")
    .setColor(`#42f480`)

        reporthelp = "Report a user. Requires a channel named `reports`to work! If there is no reports channel, the bot will post the report in the current channel";
        kickhelp = "Kick a user from the server. Requires a channel named `incidents` to work; you must have the manage messages permission.";
        banhelp = "Ban a user from the server. Requires a channel named `incidents` to work; if there is no `incidents` channel, the bot will post the embed in the current channel.You need the BAN MEMBERS permission to use this command!";
        warnhelp = "Warn a user in the server. YOU need the Manage Server Permission to use this command. if there is no `incidents` channel, the bot will post the embed in the current channel.";
        requiredperms = "**Embed Links, channel named `incidents`; channel named `reports`; Kick Members, Ban Members, Manage Roles, Manage Members, Manage Messages.**"
       
       
       
        modadmin = new Discord.RichEmbed()
        .setTitle(`Mod/Admin Commands`) 
        .setColor('RANDOM')
        .addField("**/report @user <reason>**", reporthelp)
        .addField("**/warn @user <reason>**", warnhelp)
        .addField("**/kick @user <reason>**", kickhelp)
        .addField("**/ban @user <reason>**", banhelp)
        .addField("**/mention-everyone**", "Mention @everyone in a server. Requires the Mention Everyone permission to use this command")
        .addField("**/mention-here**", "Mention @here in a server. Requires the Mention Everyone permission to use this command")
        .addField("**__Required Permissions__**", requiredperms)
        .setTimestamp()
        .setFooter("Use /invite to invite me to your server!")
      

        let cmds = new Discord.RichEmbed()

        .setColor("RANDOM")
        .setTitle(`Commands`)
        .addField("**/report @user <reason>**", reporthelp)
        .addField("**/id** @user | /id", "Shows you **your** discoord username#discrim and your user ID. You can mentoin another user to get their ID / Discrim.")
        .addField("**/av @user**", "Mentoin a user to get their avatar as an Embed.")
        .addField("**/invite** Alias: `/links`", "Get an invite link for the bot, and the invite to the bot's support server")
        .addField("**/purge <number>** Alias: `/clear`", "Get the bot to delete 1 - 100 messages in a channel. Requires Manage messages permission")
        .addField("**/token**", "View the bot's super secret bot token!")
        .addField("**/botinfo**", "displays basic bot information!")
        .addField("**/serverinfo**", "Displays basic server information")
        .addField("**/userinfo @user**", "Displays basic user information. If you did not mentoin a user it will display YOUR info.")
        .addField("**/ping**", "Get the bot's (and Discord API) ping measured in ms.")
        .addField("**/owner**", "see who currently owns the bot")
        .addField("**/hosting**", "Bot finds a good website for bot/web hosting")
        .addField("**/xp**","View your current level and XP")
        .addField("**/coins**", "See how many coins you have!")
        .addField("**/git**", "**Get a link to my source code!**")
        .addField("**/version**", "See the version of the bot that is being ran.")
        .addField("**/8ball <questoin>**", "Ask the bot a questoin and see his response")
        .setTimestamp()
        .setFooter("If you need extra help, use /links and join my support server!")

        let extras = new Discord.RichEmbed()

        .setTitle("Extras")
        .addField("**/hug @user**", "Hug someone")
        .addField("**/kiss @user**", "Kiss someone.")
        .addField("**/eat <food>**", "Eat any kind of food you wish to.")
        .addField("**/drink**", "Drink a pint of beer")
        .addField("**/brush**", "Brush your teeth and make them shine after you have drunk a pint of beer")
        .addField("**/polish @user**", "Polish a user's head.")
        .setColor("RABDOM")
        .setTimestamp()

        message.channel.send(embed1).then(sentMessage => sentMessage.edit(embed2));
        message.channel.send({embed: modadmin});
        message.channel.send({embed: cmds});
        message.channel.send({embed: extras});

      }
      
// "  " ()

module.exports.help = {
  name: "show-help"
}