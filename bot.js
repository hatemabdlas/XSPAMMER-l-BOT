const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("531429039718793227")
setInterval(function() {
channel.send(`hATEM SPAM HERE CREDITS FARM HERE HELP`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
