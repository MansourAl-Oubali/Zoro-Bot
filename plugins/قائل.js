let handler = async (m, { conn, command, text }) => {
let love = `
*☬ ⊱⊶✤⊷⊰ •〔🕸〕• ⊱⊶✤⊷⊰ ☬*
         *◆[ مـ←ــن الــقائـ←ـل❔ ]◆*
*☬ ⊱⊶✤⊷⊰ •〔🕸〕• ⊱⊶✤⊷⊰ ☬*

*✪『الجـملـة❗』 : ⇙ ⇘*

*✪『الـجائزة💰』 : ⇙⇘*

*✪ 『الـمـقدم🎙』: ⇙⇘*

*✪ الإجابة بالعام 📝*

*☬ ⊱⊶✤⊷⊰ •〔🕸〕• ⊱⊶✤⊷⊰ ☬*
*~تــ✍︎ــوقــيــع اداࢪة┊📜┊↯:~*   *~〘☬╎𝐑.𝐍.𝐍 𓆩❄𓆪 𝑺𝑶𝑼𝑳╎☬〙~*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['estupidez']
handler.tags = ['fun']
handler.command = /^(القائل|قائل)$/i
export default handler
