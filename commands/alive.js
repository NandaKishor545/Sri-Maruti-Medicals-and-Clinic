async function aliveCommand(sock, chatId, messageText) {
    try {
        const lowerText = messageText.toLowerCase();

        if (lowerText === 'hi') {
            const locationMessage = `📍 *Visit Us:*\nhttps://g.co/kgs/Ym6Hr6r\nWe’re happy to serve you. See you soon!`;
            await sock.sendMessage(chatId, {
                text: locationMessage,
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: true
                }
            });
        } else {
            const message = `*🤖 Knight Bot is Active!*\n\n` +
                            `*Version:* 1.0.0\n` +
                            `*Status:* Online\n` +
                            `*Mode:* Public\n\n` +
                            `*🌟 Features:*\n` +
                            `• Group Management\n` +
                            `• Antilink Protection\n` +
                            `• Fun Commands\n` +
                            `• And more!\n\n` +
                            `Type *.menu* for full command list`;

            await sock.sendMessage(chatId, {
                text: message,
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363161513685998@newsletter',
                        newsletterName: 'KnightBot MD',
                        serverMessageId: -1
                    }
                }
            });
        }

    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { text: 'Bot is alive and running!' });
    }
}

module.exports = aliveCommand;
