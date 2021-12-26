require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

const memberCounter = require('./counters/member-count');

client.once("ready", () => { 
    client.user.setActivity("with nothing! Wow!", { type: 'PLAYING' })    
//    memberCounter(client);
});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

client.login(process.env.DISCORD_TOKEN);