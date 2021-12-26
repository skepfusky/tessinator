module.exports = {
    name: 'test',
    description: "testing testing",
    execute(client, message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#404040')
        .setTitle('Title')
        .setDescription("Description")
        .addFields (
            {name: 'Rule 1', value: 'Be nice'},
            {name: 'Rule 2', value: "Don't spam"},
            {name: 'Rule 3', value: 'Yes'}
        )
        .setFooter("Footer");
        message.channel.send(newEmbed);
    }
};