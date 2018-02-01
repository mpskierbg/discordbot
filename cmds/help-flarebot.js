const Discord = require("discord.js");
const bot = new Discord.Client

module.exports.run = async (bot, message, args) => {
  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Rythm's Commands",
    url: "http://google.com",
    description: "Use !<command> (in white below).",
    fields: [{
        name: "play",
        value: "Plays a song or adds to queue."
      },
      {
        name: "disconnect",
        value: "Disconnect the bot from the voice channel it is in."
      },
      {
        name: "skip",
        value: "Skips the currently playing song."
      },
      {
        name: "join",
        value: "Summons the bot to your voice channel"
      },
      {
        name: "pause",
        value: "Pauses the currently playing track."
      },
      {
        name: "resume",
        value: "Resume paused music."
      },
      {
        name: "queue",
        value: "Views music queue."
      },
      {
        name: "skipto",
        value: "Skips to a certain position in the queue."
      },
      {
        name: "leavecleanup",
        value: "Removes absent user's songs from the Queue"
      },
      {
        name: "np",
        value: "Shows what song the bot is currently playing."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© MAS"
    }
  }
});
}
module.exports.help = {
  name: "help-flare"
}
