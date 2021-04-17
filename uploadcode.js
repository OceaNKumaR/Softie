const { MessageAttachment }  = require("discord.js"); //To create Attachment...

const { writeFile, unlink, exists, mkdir } = require("fs"); //Some shit here...
const { promisify } = require("util"); //Promise for secure.. kek
const writeFileAsync = promisify(writeFile); //Create & Write the file to the Directory.
const deleteFileAsync = promisify(unlink); //Delete the file from Directory.
const existsAsync = promisify(exists); //Check if the Directory exist.
const makedirAsync = promisify(mkdir); //Make Directory, if does not exist.

const { generate, logs } = require("nekoyasui"); //if u already install this package, please do - `npm i nekoyasui@latest`
const DeleteCode = true; //change this to false, if u want to store the code.

module.exports = (bot) => {
  bot.on("message", async message => {
    try {
      if(!message.author || !message.content || message.author.bot || message.author.id === bot.user.id) return;
      if(!message.channel.permissionsFor(message.guild.me).has(["SEND_MESSAGES"])) return;
      
      const check = new RegExp(/```(?:(\S+)\n)?\s*([^]+?)\s*```/i);
      if(!(check.test(message.content))) return;
      const { code, lang } = getCodeBlock(message.content);
      const verifyReg = new RegExp(`^(js|py|html|css)( |)$`);
      if(!(code.length > 100) || !verifyReg.test(lang.toLowerCase())) return;
      
      const path = `${process.cwd()}/storage/codebin/${message.author.id}`; //path for the code
      const filename = generate(5); //generate random character for the filename
      const storageExists = await existsAsync(path);
      if (!storageExists) { // If it doesn"t exists
        console.log(`Creating Directory for ${message.author.username}`)
        await makedirAsync(path, { recursive: true });
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
      
      var content = "";
      content += `//Code from ${message.guild.name}\n//Author : ${message.author.username} (${message.author.id})\n\n`;
      content += `${code}`;
      
      await writeFileAsync(`${path}/${filename}.${lang}`, content.trim(), "utf-8");
      await message.delete({ timeout: 1500 });
 
      await new Promise(resolve => setTimeout(resolve, 1000));
      return message.channel.send(`Hey ${message.author}, I've automatically uploaded your code here. When possible please consider using a source sharing service, thank you!`,
      new MessageAttachment(`${path}/${filename}.${lang}`, `${filename}.${lang}`)).then(async() => {
        if(DeleteCode) await deleteFileAsync(`${path}/${filename}.${lang}`);
      });
      
    } catch (e) { // End of the Code.
      logs(message, e, "error");
    }
  })

	function getCodeBlock(txt) {
		const match = /^```(\S*)\n?([^]*)\n?```$/.exec(txt);
		if(!match) return { lang: null, code: txt };
		if(match[1] && !match[2]) return { lang: null, code: match[1] };
		return { lang: match[1], code: match[2] };
	}
}