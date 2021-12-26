// const chillPill = new Map();
require('dotenv').config();
module.exports = (Discord, client, message) => {
    const prefix = process.env.PREFIX;
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    if(command) command.execute(client, message, args, Discord);

    // Cooldown    
//    if(!chillPill.has(command.name)){
//        chillPill.set(command.name, new Discord.Collection());
//    }
//
//    const current_time = Date.now();
//    const time_stamps = chillPill.get(command.name);
//    const chillPillAmount = (command.cooldown) * 1000;
//
//    if(time_stamps.has(message.author.id)) {
//        const expire_time = time_stamps.get(message.author.id) + chillPillAmount;
//
//        if(current_time < expire_time){
//            const time_left = (expire_time - current_time) / 1000;
//            return message.reply(`please wait for **${time_left.toFixed(0)} more seconds** before using the '${command.name}' command, frick!`);
//        }
//    }
//
//    time_stamps.set(message.author.id, current_time);
//    setTimeout (() => time_stamps.delete(message.author.id), chillPillAmount);
    // Cooldown end
}