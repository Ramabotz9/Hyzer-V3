/*
 * ngelarang lu biar g diubah kyknya emg susah ya anjg
 * jadi kalau lu g bsa ngehargain orang
 * setidaknya buat sc ori by gw, trs buat sc lu hasil copas tuh
 * better bgtu dripada nma gw dihapus smua
 * najis 👎🗿
*/

let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Hai ${ye} Lagi Nyari Sc Ya? 

Sc Ori By Hizer Official :
_Thanks Hyzer Official_
https://youtu.be/AXPzjQ5jxx8

Sc Recode By Rama :
https://wa.me/6287793236775

_ZxyuuBotz_`
conn.send2But(m.chat, esce, wm3, 'Thanks', 'ok', 'OWNER', '.owner', m) 
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler
