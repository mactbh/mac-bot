const Discord = require('discord.js');

exports.run = (client, message, args, func) => {
	if(message.author.id !== "295978095129657355") return;

		const embed = new Discord.RichEmbed()
		.setAuthor(message.author.tag)
		.setTitle("Announcement")
		.setColor(0x9F45FF)
		.setDescription(args.join(" "))

		client.guilds.get("479268202866540564").channels.get("489498856166522882").send("<@&489504532200554513>");
        client.guilds.get("479268202866540564").channels.get("489498856166522882").send({embed});

}