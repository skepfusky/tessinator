module.exports = {
    name: 'commands',
    description: "Spits out a list of commands",
    aliases: ['help', 'cmd'],
    execute(client, message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#ffcc00')
        .setTitle('BOT COMMANDS BABY')
        .setDescription("Here are all the commands that this bot supports, one of them is a surprise 😏😂")
       .addFields (
           {name: 'Deez nuts', value: 'Mama mia'},
           {name: 'Fegelein oppa', value: 'He loves me'}
       )
        .setImage('https://cdn.discordapp.com/avatars/596549119913230357/c812391f77be95891888afb7620143c7.png?size=1024')
        .setFooter("Updated July 4, 2021.");
        message.channel.send(newEmbed);
    }
};