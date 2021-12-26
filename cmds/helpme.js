module.exports = {
    name: 'helpme',
    description: "Spits out a list of commands",
    execute(client, message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#ffcc00')
        .setTitle('HALP!!!!!111!!!')
        .setDescription("You don't need help. For now...")
        .setFooter("I'm still working on this bot please don't hurt me uwu");
        message.channel.send(newEmbed);
    }
};