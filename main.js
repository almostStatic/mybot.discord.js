  
const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is ALIVE !!!!!`);

  bot.user.setActivity("Prefix: ' | 'invite | 'owner", {type: "WATCHING"});

  //bot.user.setGame("on SourceCade!");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}kick`){

    //!kick @daeshan askin for it

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**You do not have permissoins to use ths command**!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**ERROR:** The user is mod/admin, or has a higher role than me.");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#e56b00")
    .addField("Kicked User", `${kUser} (${kUser.id})`)
    .addField("Kicked By", `<@${message.author.id}> (${message.author.id})`)
    .addField("Kicked In", message.channel)
    .addField("Tiime", message.createdAt)
    .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "incidents");
    if(!kickChannel) return message.channel.send("Can't find incidents channel.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

    return;
  }

  if(cmd === `${prefix}ban`){

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("**Error:** You need to memtion a user for this command to work!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No can do pal!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#bc0000")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "incidents");
    if(!incidentchannel) return message.channel.send("Can't find incidents channel.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);


    return;
  }


  if(cmd === `${prefix}report`){

    //!report @ned this is the reason

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user.");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("~~                  ~~ **__NEW REPORT!__** ~~                   ~~")
    .setColor("#15f153")
    .addField("Reported User", `${rUser} (${rUser.id})`)
    .addField("Reported By", `${message.author} (${message.author.id})`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

    return;
  }

  if(cmd === `${prefix}serverinfo`){

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);

    return message.channel.send(serverembed);
  }



  if(cmd === `${prefix}botinfo`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt);

    return message.channel.send(botembed);
  }

  if(cmd === `${prefix}mytag`){

    let mytagembed = new Discord.RichEmbed()
    .setDescription(message.member.user.tag)
    .setColor("#000000")

    return message.channel.send(mytagembed);
  }

  if(cmd === `${prefix}help-kick`){

    let kickhelpembed = new Discord.RichEmbed();
    tologkick = "In order to log the use of `'kick` command, you must create a new channel with the name 'incidents'; then the bot will automatically log the use of the kick command. Make **sure that the bot has permissionsto send messages and embed links in that channel!**"

    .setDescription("Here is your help yo use `'kick`!")
    .setColor("#62bc80")
    .addField("`?kixk @user <reason>`", tologkick)


    return message.channel.send(kickhelpembed);
  }


  if(cmd === `${prefix}owner`){

    let bicon = bot.user.displayAvatarURL;
    let ownerembed = new Discord.RichEmbed()
    .setDescription("**sad (Eclipse)#3728** is my owner! He coded every one of my lines!")
    .setColor("#15a3f0")

    return message.channel.send(ownerembed);
  }

  if(cmd === `${prefix}invite`){

    serverinvurl = "https://discord.gg/2dbQt8d";
    invurl = "https://discordapp.com/oauth2/authorize?client_id=517730016520568853&scope=bot&permissions=8";
    let bicon = bot.user.displayAvatarURL;
    let inviteEmbed = new Discord.RichEmbed()
    .setDescription("Useful Links!")
    .setColor("#bc9562")
    .setThumbnail(bicon)
    .addField("Invite Bot: ", invurl)
    .addField("Support Server: ",serverinvurl )
    
    return message.channel.send(inviteEmbed);
  }


if(cmd === `${prefix}test`){

    let bicon = bot.user.displayAvatarURL;
    let testembed = new Discord.RichEmbed()
    .setDescription("**I am alive!** *If you need any help, use `?invite` and join my support server!*")
    .setColor("#15a3f0")
    .setThumbnail(bicon)
    return message.channel.send(testembed);
  }

if(cmd === `${prefix}git`){

    let gitrepembed = new Discord.RichEmbed()
    .setDescription("*Here you go, https://github.com/asadhum2005/mybot.discord.js*")
    .setColor("#dd8e49")

    return message.channel.send(gitrepembed);

  }

  if(cnd === `${prefix}myav`){

    let avembed = new Discord.RichEmbed()

  .setImage(message.author.avatarURL)
  .setColor('#275BF0')

  return message.channel.send(avembed);

  }

  if(cnd === `${prefix}drinkc`){

    let drinkembed = new Discord.RichEmbed()

.setDescription(message.member.user.tag, "has drunk a mug of coffee!")
  .setColor('#275BF0')

  return message.channel.send(drinkembed);

  }


});


// github repository :
// https://github.com/asadhum2005/mybot.discord.js

/* Bot token:

NTE3NzMwMDE2NTIwNTY4ODUz.D3jYog.v5G0Y-91Fy_HISuoDDDDSZm4KnM

*/

bot.login("NTE3NzMwMDE2NTIwNTY4ODUz.D3jYog.v5G0Y-91Fy_HISuoDDDDSZm4KnM");
