const Discord = require("discord.js");
const bot = new Discord.Client

module.exports.run = async (bot, message, args) => {
  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Fredboat's Commands",
    url: "http://google.com",
    description: "Use ;;<command> (in white below).",
    fields: [{
        name: "play",
        value: "Plays a song or adds to queue."
      },
      {
        name: "stop",
        value: "Stops the player and clears the playlist. Reserved for moderators."
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
        name: "unpause",
        value: "Resume paused music."
      },
      {
        name: "list",
        value: "Views play list."
      },
      {
        name: "shuffle",
        value: "shuffles current play list"
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
  name: "help-fredboat"
}
