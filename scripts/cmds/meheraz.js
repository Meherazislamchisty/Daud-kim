module.exports = {
 config: {
	 name: "meheraz",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "bayjid") {
 return message.reply({
 body: " 𝐀𝐬𝐬𝐚𝐥𝐚𝐦𝐮𝐥𝐚𝐢𝐤𝐮𝐦.🫡.\n Meheraz Islam\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n𝗠𝗘𝗛𝗘𝗥𝗔𝗭 𝗜𝗦𝗟𝗔𝗠 ",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/Mc6brQj.gif")
 });
 }
 }
}
