const TelegramBot = require('node-telegram-bot-api');

// توکن از متغیر محیطی خونده میشه، هیچوقت مستقیم تو کد ننویسش
const TOKEN = process.env.BOT_TOKEN;
// آدرس صفحه بازی که رو Railway (یا هر هاست دیگه) آپلود کردی، باید HTTPS باشه
const WEBAPP_URL = process.env.WEBAPP_URL;

if (!TOKEN || !WEBAPP_URL) {
  console.error('BOT_TOKEN یا WEBAPP_URL تنظیم نشده. این دو رو تو Railway Variables اضافه کن.');
  process.exit(1);
}

const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    '👁️ *Signal or Scam*\n\n۵ حمله واقعی که کیف پول‌های واقعی رو خالی کردن\\.\nدستگاهت دستته\\. تشخیص بده امنه یا تله\\.',
    {
      parse_mode: 'MarkdownV2',
      reply_markup: {
        inline_keyboard: [[
          { text: '▶️ Play', web_app: { url: WEBAPP_URL } }
        ]]
      }
    }
  );
});

console.log('بات روشن شد و منتظر پیامه...');
