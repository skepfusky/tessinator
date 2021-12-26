module.exports = {
    name: 'serverinfo',
    //cooldown: 30,
    description: "Cleans commands",
    execute(client, message, args, Discord) {
        const{guild} = message
        //console.log(guild)

        const {name, region, memberCount, joinedTimestamp, ownerID, owner } = guild
        const icon = guild.iconURL()

        console.log(name, region, memberCount, joinedTimestamp, ownerID, icon)
        console.log(owner.user.tag)

        const embed = new Discord.MessageEmbed()
            .setColor('#ffcc00')
            .setTitle(`Basic server info for '${name}'`)
            .setThumbnail(icon)
            .addFields(
                {
                    name: 'Server region',
                    value: region,
                },
                {
                    name: 'Total members',
                    value: memberCount,
                },
                {
                    name: 'Owner',
                    value: owner.user.tag,
                },
                {
                    name: 'Created on',
                    value: joinedTimestamp,
                },                
            )
        message.channel.send(embed)
    }
}