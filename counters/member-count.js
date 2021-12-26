module.exports = client => {
    const channelId = '866874252338135080'

    const updateMembers = guild => {
        const channel = guild.channels.cache.get(channelId)
        channel.setName(`${guild.memberCount.toLocaleString()} members`)
    }

    client.on('guildMemberAdd', (member) => updateMembers(member.guild))
    client.on('guildMemberRemove', (member) => updateMembers(member.guild))
    
    const guild = client.guilds.cache.get('845312634340769863')
    updateMembers(guild);
 };