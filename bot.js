const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const fs = require("fs");

const prefix = botSettings.prefix;

const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
bot.mutes = require("./mutes.json");

fs.readdir("./cmds/", (err, files) => {
  if(err) console.error(err);

  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  if(jsfiles.length <= 0) {
    console.log("No commands to load!");
    return;
  }

  console.log(`Loading ${jsfiles.length} commands!`);

  jsfiles.forEach((f, i) => {
    let props = require(`./cmds/${f}`);
    console.log(`${i + 1}: ${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", message => {
  console.log(`Bot is ready! ${bot.user.username}`);
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;

  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

  if(!command.startsWith(prefix)) return;

  let cmd = bot.commands.get(command.slice(prefix.length));
  if(cmd) cmd.run(bot, message, args);

});

bot.on("guildMemberAdd", function(member) {

  bot.users.get('325505435283095553').send(member.toString() + " joined the server!").catch(error => console.log(error));

  member.send(member.toString() + " welcome to the Surviving Us server, so far all I can do is show you the weather. If you type ~weather [your city name] weather info will appear. Happy gaming!").catch(error => console.log(error));

  member.addRole(member.guild.roles.find("name", "Saviors")).catch(error => console.log(error));

});

bot.login(botSettings.token);
