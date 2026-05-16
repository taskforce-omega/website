exports.handler = async function(event) {
    if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };

    const WEBHOOK_URL = process.env.DISCORD_WEBHOOK_SIGNUP;
    if (!WEBHOOK_URL) return { statusCode: 500, body: 'Webhook not configured' };

    let data;
    try { data = JSON.parse(event.body); }
    catch { return { statusCode: 400, body: 'Invalid JSON' }; }

    const embed = {
        title: '📋 New Signup — Task Force Omega',
        color: 0x862021,
        fields: [
            { name: 'Discord name',         value: data.discordName   || '—', inline: true },
            { name: 'Timezone',             value: data.timezone      || '—', inline: true },
            { name: 'Age group',            value: data.age           || '—', inline: true },
            { name: 'Available Sunday',     value: data.availSunday   || '—', inline: true },
            { name: 'Available Thursday',   value: data.availThursday || '—', inline: true },
            { name: 'OK with modlists',     value: data.okMods        || '—', inline: true },
            { name: 'Problem with orders',  value: data.orders        || '—', inline: true },
            { name: 'Milsim experience',    value: data.milsim        || '—', inline: true },
            { name: 'Arma 3 experience',    value: data.armaExp       || '—', inline: false },
            { name: 'PTT TeamSpeak issue',  value: data.ptt           || '—', inline: true },
            { name: 'Found us via',         value: data.source        || '—', inline: true },
            { name: 'Test op Thursday',     value: data.testThursday  || '—', inline: true },
            { name: 'Test op Sunday',       value: data.testSunday    || '—', inline: true },
        ],
        timestamp: new Date().toISOString(),
        footer: { text: 'TFO Signup Form' }
    };

    const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ embeds: [embed] })
    });

    if (!res.ok) return { statusCode: 500, body: 'Discord webhook failed' };
    return { statusCode: 200, body: 'OK' };
};