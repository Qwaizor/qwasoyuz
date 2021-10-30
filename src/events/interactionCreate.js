module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (!interaction.isCommand()) return;

        const command = client.commands.get(interaction.commandName);

        if (!command) return;

        try {
            await command.execute(interaction,client);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'Oops qwaizor bot found a error', ephemeral: true });
        }
    },
};