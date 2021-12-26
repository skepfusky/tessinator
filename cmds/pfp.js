module.exports = {
    name: 'pfp',
    description: "Get from a user or someones profile pic lol",
    execute(client, message, args, Discord) {
        //const taggedUser = message.mentions.users.first();
        //if (!message.mentions.users.size) {
        //    return message.channel.send(`Your *awful* avatar: <${message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 })}>`);
        //}
        
        //const user = message.mentions.users.map
        //const avatarp = user.displayAvatarURL({ format: 'png', dynamic: true, size: '1024' })

        //const avatarp = message.mentions.users.map(user => {
        //    return(`<${user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}>`);
        //});
        //message.channel.send(message.author.avatarURL());
        
        // Send the entire array of strings as a message
        // By default, discord.js will `.join()` the array with `\n`
        
        const bruh = new Discord.MessageEmbed()
                .setTitle("${username}")
                .setDescription('I hate coding')
                .setImage(message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
                .setAuthor("Your mom", message.author.avatarURL)        
        message.channel.send(bruh)  
    }//
}