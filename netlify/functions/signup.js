exports.handler = async function(event) {
    if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };

    const WEBHOOK_URL = process.env.DISCORD_WEBHOOK_SIGNUP;
    if (!WEBHOOK_URL) return { statusCode: 500, body: 'Webhook not configured' };

    let data;
    try { data = JSON.parse(event.body); }
    catch { return { statusCode: 400, body: 'Invalid JSON' }; }

    const TFO = '<:tfoemoji3:892779162526433313>';

    const yn = v => {
        if (!v) return '—';
        if (v === 'Yes') return 'Yes';
        if (v === 'No')  return 'No';
        return v;
    };

    const embed = {
        title: `${TFO}  New Signup — Task Force Omega`,
        color: 0x862021,
        fields: [

            // — Identity —
            { name: '\u200B', value: '**Identity**', inline: false },
            { name: 'Discord',  value: data.discordName || '—', inline: true },
            { name: 'Timezone', value: data.timezone    || '—', inline: true },
            { name: 'Age',      value: data.age         || '—', inline: true },

            // — Availability —
            { name: '\u200B', value: '**Availability**', inline: false },
            { name: 'Sunday evenings',   value: yn(data.availSunday),   inline: true },
            { name: 'Thursday evenings', value: yn(data.availThursday), inline: true },
            { name: '\u200B',            value: '\u200B',               inline: true },

            // — Conduct & Mods —
            { name: '\u200B', value: '**Conduct & Mods**', inline: false },
            { name: 'Comfortable with modlists',   value: yn(data.okMods),  inline: true },
            { name: 'Difficulty following orders', value: yn(data.orders),  inline: true },
            { name: '\u200B',                      value: '\u200B',         inline: true },

            // — Experience —
            { name: '\u200B', value: '**Experience**', inline: false },
            { name: 'Previous milsim unit',   value: yn(data.milsim), inline: true },
            { name: 'PTT issue in TeamSpeak', value: yn(data.ptt),    inline: true },
            { name: '\u200B',                 value: '\u200B',        inline: true },
            { name: 'Arma 3 level', value: data.armaExp || '—', inline: false },

            // — Source —
            { name: '\u200B', value: '**How they found us**', inline: false },
            { name: 'Source', value: data.source || '—', inline: false },

            // — Trial op —
            { name: '\u200B', value: '**Trial op**', inline: false },
            { name: 'Thursday 19:30', value: yn(data.testThursday), inline: true },
            { name: 'Sunday 19:30',   value: yn(data.testSunday),   inline: true },
            { name: '\u200B',         value: '\u200B',              inline: true },
        ],
        timestamp: new Date().toISOString(),
        footer: {
            text: 'TFO Signup Form'
        }
    };

    const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            content: '<@&876416680291598406> New signup incoming.',
            embeds: [embed]
        })
    });

    if (!res.ok) return { statusCode: 500, body: 'Discord webhook failed' };
    return { statusCode: 200, body: 'OK' };
};