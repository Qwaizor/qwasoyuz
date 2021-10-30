const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageAttachment, client } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('informantion about things')
        .addSubcommand(subcommand =>
            subcommand
                .setName("user")
                .setDescription("Gets the information of the user")
                .addUserOption(option => option.setName("target").setDescription("The user in the server")))
        .addSubcommand(subcommand =>
            subcommand

                .setName('server')
                .setDescription("Gets the info about the server"))
            
        .addSubcommand(subcommand =>
                    subcommand
        
                        .setName('soviet')
                        .setDescription("Tells you 101 stuff about the soviet union")),
        

    async execute(interaction, client) {
        if (interaction.options.getSubcommand() === "user") {
            const user = interaction.options.getUser("target");
            if (user) {
                const userEmbed = new MessageEmbed()
                    .setTitle(`${user.username}'s ☭ Information:`)
                    .setURL("https://www.qwaizor.com/")
                    .setAuthor("Qwasoyuz", client.user.displayAvatarURL())
                    .setThumbnail(user.avatarURL())
                    .addFields(
                        { name: `Username:`, value: `${user.username}`, inline: true },
                        { name: `\u200B`, value: `\u200B`, inline: true },
                        { name: `Tag:`, value: `#${user.discriminator}`, inline: true },
                        { name: `UserID:`, value: `${user.id}`},
                        { name: `The Account was created on:`, value: `${user.createdAt.toDateString()}`},
                    )
                    .setTimestamp()
                    .setColor("RED")
                    .setFooter(client.user.tag, client.user.displayAvatarURL());

                await interaction.reply({ embeds: [userEmbed] });
            } else {
                const useryEmbed = new MessageEmbed()
                    .setTitle(`${interaction.user.username}'s ☭ Information:`)
                    .setURL("https://www.qwaizor.com/")
                    .setAuthor("Qwasoyuz", client.user.displayAvatarURL())
                    .setThumbnail(interaction.user.avatarURL())
                    .addFields(
                        { name: `Comrade Name:`, value: `${interaction.user.username}`, inline: true },
                        { name: `\u200B`, value: `\u200B`, inline: true },
                        { name: `Tag:`, value: `#${interaction.user.discriminator}`, inline: true },
                        { name: `ComradeID:`, value: `${interaction.user.id}`},
                        { name: `The Account was created on:`, value: `${interaction.user.createdAt.toDateString()}`},
                    )
                    .setTimestamp()
                    .setColor("RED")
                    .setFooter(client.user.tag, client.user.displayAvatarURL());

                await interaction.reply({ embeds: [useryEmbed] });
                
            }

        } else if (interaction.options.getSubcommand() === "server") {


            const serverEmbed = new MessageEmbed()
                .setTitle(`${interaction.guild.name}`)
                .setURL("https://www.qwaizor.com/")
                .setAuthor("Qwasoyuz", client.user.displayAvatarURL())
                .setThumbnail(interaction.guild.iconURL())
                .addFields(
                    { name: `Name of the Union:`, value: `${interaction.guild.name}`, inline: true },
                    { name: `\u200B`, value: `\u200B`, inline: true },
                    { name: `Number of Comrades:`, value: `${interaction.guild.memberCount}`, inline: true },
                    { name: `Id of the Union:`, value: `${interaction.guild.id}`},
                    { name: `The Union was created on:`, value: `${interaction.guild.createdAt.toDateString()}`},
                )
                .setTimestamp()
                .setColor("RED")
                .setFooter(client.user.tag, client.user.displayAvatarURL());


            await interaction.reply({ embeds: [serverEmbed] });



        } else if (interaction.options.getSubcommand() === "soviet") {


            const sovietEmbed = new MessageEmbed()
                .setTitle(`Soviet Union`)
                .setURL("https://www.qwaizor.com/")
                .setAuthor("Qwasoyuz", client.user.displayAvatarURL())
                .addFields(
                    { name: `Founded:`, value: `On  30/12/1922`, inline: true },
                    { name: `\u200B`, value: `\u200B`, inline: true },
                    { name: `Population:`, value: `293,047,571`, inline: true },
                    { name: `\u200B`, value: `\u200B`, inline: true },
                    { name: `GDP:`, value: `2.6 trillion`,inline: true},
                   
                    { name: `Land Area`, value: `22,400,000 km²`,inline: true},
                )
                .setTimestamp('26/12/1991')
                .setColor("RED")
                .setFooter(client.user.tag, client.user.displayAvatarURL());


            await interaction.reply({ embeds: [sovietEmbed] });
        
            }else {
            await interaction.reply("No Sub Command was used")
        }

    },
};