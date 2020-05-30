exports.run = async (client, Discord, message, args, db, config) => {
  if(!message.member.permissions.has("MANAGE_GUILD")) return message.channel.send("Error:  Inadequate Permissions."); 
  let prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (args[0] === undefined) return message.channel.send(`No prefix was specified! Please add a prefix.`);
  db.set(`prefix_${message.guild.id}`, args[0]);
    let embed = new Discord.MessageEmbed()
    .setDescription(`${message.author} successfully set the servers prefix to ${args[0]}!`)
    .setColor("#55ce58")
    .setTimestamp()
    message.channel.send(embed)   
}
