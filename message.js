const db = require("quick.db");
const Discord = require("discord.js");

client.on('message', async message => {
  let prefix = await db.fetch(`prefix_${message.guild.id}`);

    if (message.author.bot) return;
    if (message.mentions.everyone) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase();

    if (message.content.indexOf(prefix) !== 0) return;
    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, Discord, message, args, db, config)
    } catch (err) {
        return;
    }
})
