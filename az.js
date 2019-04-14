const Discord = require('discord.js');
const client = new Discord.Client(); 
const prefix = '*'
client.on('ready',() => {
    console.log('Logged in as ${client.user.tag}!');
           
});





















client.on('message', message => {
   if(!message.channel.guild) return;
    var success = new Discord.RichEmbed()
    .setDescription(`تم أرسال رسالتك بنجاح.`)
    .setColor('GREEN')
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let BcList = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(`**▶ 📝 لأرسال رسالة امبد قم بالضغط على \n ▶ ✏ لأرسال رسالة عادية قم بالضغط على**`)
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
msg.react('📝')
.then(() => msg.react('✏'))
.then(() =>msg.react('📝'))
 
let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;
 
let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
 
 
EmbedBc.on("collect", r => {
 
message.channel.send(success);
message.guild.members.forEach(m => {
let EmbedRep = args.replace('[السيرفر]' ,message.guild.name).replace('[العضو]', m).replace('[المرسل]', `${message.author}`)
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(EmbedRep)
.setFooter(`${prefix}invite | لدعوة بوت`)
m.send({ embed: bc })
msg.delete();
})
})
NormalBc.on("collect", r => {
  message.channel.send(success);
message.guild.members.forEach(m => {
let NormalRep = args.replace('[السيرفر]' ,message.guild.name).replace('[العضو]', m).replace('[المرسل]', `${message.author}`)
m.send(NormalRep);
msg.delete();
})
})
})
}
});














const devs = ["473152645964759047"]// ايدي الخاص بحسابك

  const adminprefix = "+";//
  client.on('message', message => {
      var argresult = message.content.split(` `).slice(1).join(' ');
        if (!devs.includes(message.author.id)) return;
        
    if (message.content.startsWith(adminprefix + 'ply')) {
      client.user.setGame(argresult);
        message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
    } else 
      if (message.content === (adminprefix + "Percie")) {
      message.guild.leave();        
    } else  
    if (message.content.startsWith(adminprefix + 'wt')) {// لجعل البوت في حاله الواتشنق
    client.user.setActivity(argresult, {type:'WATCHING'});
        message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
    } else 
    if (message.content.startsWith(adminprefix + 'ls')) {// لجعل البوت في حاله الاستماع
    client.user.setActivity(argresult , {type:'LISTENING'});
        message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
    } else     //Narox
      if (message.content.startsWith(adminprefix + 'setname')) {// لتغير اسم البوت
    client.user.setUsername(argresult).then
        message.channel.sendMessage(`**${argresult}** : Done `)
    return message.reply("**Name Changed :white_check_mark:**");
    } else
      if (message.content.startsWith(adminprefix + 'setavatar')) {// لتغير صوره البوت
    client.user.setAvatar(argresult);
      message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
          } else     
    if (message.content.startsWith(adminprefix + 'st')) {// لعمل ستريمنق للبوت
      client.user.setGame(argresult, "https://www.twitch.tv/idk");
        message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
    }
      if(message.content === adminprefix + "restart") {// لعمل ريسترت للبوت
        if (!devs.includes(message.author.id)) return;
            message.channel.send(`:warning:️ **Bot restarting by ${message.author.username}**`);
          console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
          console.log(`⚠️ Bot restarting... ⚠️`);
          console.log("===============================================\n\n");
          client.destroy();
          child_process.fork(__dirname + "/bot.js");
          console.log(`Bot Successfully Restarted`);
      }
    
    });
    

















	
	
	client.login('NTY3MDMwMDg2NDU3NjIyNTY5.XLNl8Q.gGcxarwA47IYy08VnvUakHaNPq0');
