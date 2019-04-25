const Discord = require("discord.js");
const snekfetch = require('snekfetch');
const fs = require("fs");
const canvas = require("canvas");

exports.run = async (bot, message, args, color, member) => {
  let ping = Math.round(message.client.ping); 
  const ping1 = new Discord.RichEmbed()
  .setDescription(`:ping_pong: Please wait! It wont take long :) \n if you see this message its probs not a good thing`)
  .setColor("RANDOM");
  message.channel.send({embed: ping1}).then((msg) => {
    
  const ping2 = new Discord.RichEmbed()
  .addField('__**API:**__', `${ping}`, true)
  .addField('__**Ping:**__', `${msg.createdTimestamp - message.createdTimestamp} ms`, true)
  .setColor('RANDOM');
  msg.edit(ping2)
    })
};
// "/n" makes a new line in the embed // message to send
// // / // / / / / // /// / / / // /  
// message.channel.send("Test").then(sentMessage => sentMessage.edit("Blah"));


module.exports.help = {
    name: "ping"
  }