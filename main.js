const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const bot = new Discord.Client({disableEveryone: false});
bot.commands = new Discord.Collection();
let coins = require("./coins.json")
let xp = require("./xp.json")

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} sucsessfully loaded!`);
    bot.commands.set(props.help.name, props);
  });

});
bot.on("ready", async () => {
  bot.user.setPresence({status: 'Do Not Disturb' })
console.log(`${bot.user.username} is online in ${bot.guilds.size} Servers`)
bot.user.setStatus("Idle");
bot.guilds.forEach((guild) => {
  console.log("-> | " + guild.name)
})

//console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`); 
// Example of changing the bot's playing game to something useful. `client.user` is what the
// docs refer to as the "ClientUser".
bot.user.setActivity(`/help | /links | Serving ${bot.guilds.size} servers`);

});



  //bot.user.setGame("Lookin' out for ya!");
// just define everything here
  bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
  
    const ownerid = "501710994293129216";
    const prefix = botconfig.prefix;
    const messageArray = message.content.split(" ");
    const cmd = messageArray[0];
    const args = messageArray.slice(1);
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(!message.content.startsWith(prefix)) return

      if(!coins[message.author.id]){
        coins[message.author.id] = {
          coins: 0
            };
                }

  let coinAmt = Math.floor(Math.random() * 15) + 1;
  let baseAmt = Math.floor(Math.random() * 15) + 1;
  //console.log(`${coinAmt} ; ${baseAmt}`);

  if(coinAmt === baseAmt){
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    };
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor('RANDOM')
  .addField("💸", `${coinAmt} coins added!`);

  message.channel.send(coinEmbed);
  }

  let xpAdd = Math.floor(Math.random() * 7) + 8;

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }

  

  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 300;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.RichEmbed()
    .setTitle("Level Up!")
    .setColor('RANDOM')
    .addField("New Level", curlvl + 1);

    message.channel.send(lvlup);
  }
  fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)

if(commandfile) commandfile.run(bot,message,args);

  });

if(cmd === `${prefix}xp`){

  xpembed = new Discord.RichEmbed()

  .setTitle("XP & Level:")
  .addField(`${message.member.user.tag}'s XP:`, curxp)
  .addField(`${message.member.user.tag}'s Level:`, curlvl)
  .setColor('RANDOM')
  .setTimestamp()
  
  return message.channel.send(xpembed);

}


if(cmd === `$$r`){

  rrrrembed = new Discord.RichEmbed()

  .setDescription("The bot is being restarted... **Please Wait..**")
  .setColor('RANDOM')
  .setTimestamp()
  .setFooter("Use /invite to invite me to your server!");
  message.delete(0);


  //       message.delete(0); 
  // This deletes the command invocation message...

  return message.channel.send(rrrrembed);

}

if(cmd === `${message.author.id}`){

  iq = new Discord.RichEmbed()

  .setDescription("1,000 IQ")
  .setColor('RANDOM')
  .setTitle("Well done! You know your user ID!")

  return message.channel.send(iq);

  }


  if(cmd === `${prefix}amiowner`){
    let nounot = new Discord.RichEmbed()

    .setTitle(`No`)
    .setColor("#ff0000")

    if(message.author.id !== "501710994293129216")return message.channel.send(nounot)

      let aa = new Discord.RichEmbed()

      .setDescription(`Yes. You are, <@${ownerid}>`)
      .setColor("RANDOM")
        return message.channel.send(aa);
          } 
// #Indentoins ####
 
});

bot.login(tokenfile.token);
// END OF CODE !!

// ============================ EXTRA INFO AND STUFFS ==============================
/* Bot token:

NTE3NzMwMDE2NTIwNTY4ODUz.D3jYog.v5G0Y-91Fy_HISuoDDDDSZm4KnM

*/

///// github repository :
/// https://github.com/asadhum2005/mybot.discord.js


// https://stackoverflow.com/questions/55569361/i-keep-getting-an-error-in-discord-js-discord-is-not-defined-or-i-get-no-respo
// https://stackoverflow.com/questions/55559630/richembed-fields-may-not-be-empty-error-how-would-i-fix-this
// https://stackoverflow.com/questions/55557723/whats-wrong-with-my-code-i-dont-get-an-error-i-get-no-response-what-so-ever

  // TERE MAY BE STABILITY FIXES AND UPDATES. PLEASE CHECK BACK HERE FOR THE UPDATED CODE.
// Total 201 Lines of code used in the prduction of ./main.js 
// This code has been created by: sad (Eclipse)#3728
// This is the current most stabe version of the sourcecode availbe!
// I am working my hardest to keep adding new STABLE & WORKING commands.