module.exports = {
    name: 'clear',
    //cooldown: 30,
    description: "Cleans commands",
    async execute(client, message, args, Discord) {
        if(!args[0]) return message.reply("type in a number homie!");
        if(isNaN(args[0])) return message.reply("real number homie, real number.");

        if(args[0] > 100) return message.reply("you can't do more than 100 man, damn...");
        if(args[0] < 1) return message.reply("I need to remove one message lmao");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);   
        })
    }
}