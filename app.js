// Calling Packages
const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('message', message => {

    let msg = message.content.toUpperCase();
    let sender = message.author;


    if(sender.id === '391830456724750347'){
      return;
    }
    var censorArray = ['SHITTY', 'ASS', 'ASSHOLE', 'SHIT', 'FUCKER', 'DYKE',
                      'COON', 'HOMO', 'JIZZ', 'NIGGA', 'PUSSY', 'QUEER', 'TWAT',
                      'FUCK', 'TREE', 'BUTT', 'TITS', 'DICK', 'NIGGER', 'NIGER',
                      'RETARD', 'REDTARDED', 'WHORE', 'JEW',  'SAND NIGGER',
                      'WETBACK', 'SPICK', 'CUNT', 'GAY', 'FAG', 'CHINK'];
    sham = bot.users.get('325505435283095553');
    bajita = bot.users.get('335466868162691072');

    var d = new Date();
    for (var i = 0; i < censorArray.length; i++) {
      upper = message.content.toUpperCase()
      if (upper.includes(censorArray[i])) {
            console.log(censorArray[i] + " said by " + sender.username + " in Surviving Us' general text channel on " + d);
            message.delete();
            var word = censorArray[i];
            message.author.send('You have been logged. On ' + d + ' you used the word ' + word + '. Come on man, I am just a bot and I know thats not cool. Please refrain from using it in the future. I believe in you!');
            sham.send(censorArray[i] + " said by " + sender.username + " in Surviving Us' general text channe on " + d + ". The word has been deleted from the chat.");
          }
      }
});


bot.on('ready', () => {

    // We can post into the console that the bot launched.
    console.log('Bot started.');

});

bot.login('MzkxODMwNDU2NzI0NzUwMzQ3.DReYPw.6mrXjON5eiJn__FDViVZO5iaBUs');
