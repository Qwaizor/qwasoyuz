const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, client } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Gives you the command list'),

        async execute(interaction,client) {
            const helpEmbed = new MessageEmbed()
                    .setTitle(`Commands List`)
                    .setURL("https://www.qwaizor.com/")
                    .setAuthor("Qwasoyuz", client.user.displayAvatarURL())
                    .addFields(
                        { name: `/ping:`, value: `pong`, inline: true },
                        { name: `/Info server`, value: `Information about the server`, inline: true },
                        { name: `/Info user`, value: `Information about the mentioned user`, inline: true},
                        { name: `/Info soviet`, value: `Information about the Soviet Union`, inline: true},
                        
                    )
                    .setTimestamp()
                    .setColor("RED")
                    .setFooter(client.user.tag, client.user.displayAvatarURL());

                await interaction.reply({ embeds: [helpEmbed] });

        },
};