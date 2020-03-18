const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {
  let prefix = await db.fetch(`prefix_${message.guild.id}`);

  if (args[0] === undefined) return message.channel.send(`No prefix was specified! Please add a prefix.`);
if(message.member.hasPermission("MANAGE_GUILD") || message.member.id === "651155235699687465") {
  db.set(`prefix_${message.guild.id}`, args[0]);
    let embed = new Discord.RichEmbed()
    .setDescription(`${message.author} successfully set the servers prefix to ${args[0]}!`)
    .setColor("#55ce58")
    .setTimestamp()
    message.channel.send(embed)   
} else {
 return message.channel.send(`You don't have enough perms to use this command.`);
}
}
