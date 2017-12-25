const Discord = require("discord.js");

var bot = new Discord.Client();
var prefix = ("<");
bot.on("ready", () => {
    bot.user.setPresence({game: { name: 'prefix <'}});
    console.log("Bot Ready !");
});

bot.login (process.env.TOKEN);

bot.on("message" , message => {
    if(message.content.startsWith(prefix + 'ping')){
        message.reply("pong");
        console.log("ping pong");
    }

    
    if(message.content == '<help') {
        message.reply("les commande on était envoyer en MP");
        const embed = new Discord.RichEmbed()
          .setColor('#00AE86')
          .setAuthor("Commandes de coco bot")
          .setTitle("__Voici les différentes commandes de coco bot__:")
          .setThumbnail(message.author.avatarURL)
          .setDescription("**Voici les commandes** : \n" +
              " `<support` : *le bot vous donne le lien du serveur*\n" +
              " `<ping`: *le bot repond* ***pong***"
              ,"`<site` : *le bot vous donne le lien du site* \n" )
        message.author.sendMessage({embed});
    }
    });
    
;
    bot.on('message', message => {
        if (message.content.startsWith(prefix + 'site')){
        message.channel.send("le lien du site: https//cocobot283425959.wordpress.com/")
    
        }

        bot.on('message', message => {
            if (message.content.startsWith(prefix + 'support')){
            message.channel.send("le lien du serveur: https://discord.gg/HBST7Ew")

         }})})

         const discord = require('discord.js');
         const client = new discord.Client();
         const token = 'your bot token here';
         bot.on('message', message => {
            console.log('I am ready!');
            bot.on('message', message => {
            if (message.content.startsWith(prefix + "avatar"))
            message.reply(message.author.avatarURL);
            
            })})
