const db = require('quick.db');

exports.run = (client, message, args, func) => {

    db.fetch(message.author.id + message.guild.id).then(i => { // This is the object of messages sent
        db.fetch(`userLevel_${message.author.id + message.guild.id}`).then(o => { // This is the object of their level
            message.channel.send('Messages sent: `' + (i.value + 1) + '`\nLevel: `' + o.value + '`'); // This returns their messages and level, the reason we used +1 for the messages is because

        })
    })

}