module.exports = {
    name: 'ping',
    aliases: ['uptime', 'status'],
    //cooldown: 120,
    description: "Pings the damn bot",    
    execute(client, message, args, Discord) {
        // Bot uptime
        let days = Math.floor(client.uptime / 86400000);
        let hours = Math.floor(client.uptime / 3600000) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;

        // Creates and displays the embed
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#ffcc00')
        .setTitle('Tessinator.js Ping and Uptime')
        .setDescription(`🏓 Ping: **${Date.now() - message.createdTimestamp}ms**\n📃 API: **${Math.round(client.ws.ping)}ms**\n⏱ Bot uptime: **${days}d ${hours}h ${minutes}m ${seconds}s**`)
        .setFooter('Ping and uptime info saved through console.log()')
        message.channel.send(newEmbed);
        

        // Log theses shits into the console because why not
        console.log(
            '\x1b[36m',
            '[Tessinator]',
            '\x1b[0m',
            'Ping requested!',
            `Client ping: ${Date.now() - message.createdTimestamp}ms |`,
            `API latency: ${Math.round(client.ws.ping)}ms |`,
            `Uptime: ${days}d ${hours}h ${minutes}m ${seconds}s`
        );
    }
}

// For Angus
//
// module.exports = {
//     name: 'ping',
//     description: 'Checks and pings the bot',
//     execute(client, message, args, Discord) {
//         // Bot uptime
//         let days = Math.floor(client.uptime / 86400000);
//         let hours = Math.floor(client.uptime / 3600000) % 24;
//         let minutes = Math.floor(client.uptime / 60000) % 60;
//         let seconds = Math.floor(client.uptime / 1000) % 60;

//         // Creates and displays the embed
//         const newEmbed = new Discord.MessageEmbed()
//         .setTitle('Ping and Uptime')
//         .setDescription(`🏓 Command: **${Date.now() - message.createdTimestamp}ms**\n📃 API: **${Math.round(client.ws.ping)}ms**\n⏱ Uptime: **${days}d ${hours}h ${minutes}m ${seconds}s**`)
//         message.channel.send(newEmbed);        

//          // Log theses shits into the console because why not
//          console.log(
//              'Ping requested!',
//              `Client: ${Date.now() - message.createdTimestamp}ms |`,
//              `API: ${Math.round(client.ws.ping)}ms |`,
//              `Uptime: ${days}d ${hours}h ${minutes}m ${seconds}s`
//          );
//      }
//  }