module.exports = {
    name: 'intro',
    description: "Intro command lmao",
    execute(client, message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#ffcc00')
        .setTitle('Hello, I guess lol 👋😂')
        .setDescription("I am Tess 'Tessinator' the Tinker. I like to test with my test subjects or someone who *reeeally* loves to test with me. Keep in mind that I'm still in alpha. I may not have sophisticated commands available yet, but you are always welcome to try out some of my commands that are currently available for me at the moment. I'm coded in JavaScript, running on node.js through Discord's API.")
        .setFooter('why am i made');

        message.channel.send(newEmbed);
    }
}