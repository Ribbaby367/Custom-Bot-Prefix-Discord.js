/* obviously this isn't the whole file, this just deals with messaging. */

client.on('message', async message => {
  let prefix = await db.fetch(`prefix_${message.guild.id}`);

    if (message.author.bot) return;
    if (message.mentions.everyone) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase();

    if (message.content.indexOf(prefix) !== 0) return;
    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args, config)
    } catch (err) {
        return;
    }
  if (message.isMentioned(client.user)) {
    console.log(`I was mentioned!`);

    let embed = new Discord.RichEmbed()
    .setColor("#00aaff")
    .setTitle('Bot Commands')
    .addField("Mod Commands", `
${prefix}ban [user] (reason)
${prefix}kick [user] (reason)
${prefix}purge [amount]`)
    .addField("Economy", `
${prefix}work 
${prefix}job
${prefix}getjob [jobname]
${prefix}givecash [user] 
${prefix}bal
${prefix}gamble`)
    .setFooter(`${prefix}help | discord.gg/7Umrdsx`);

    return message.channel.send({ embed });
  } 
})
