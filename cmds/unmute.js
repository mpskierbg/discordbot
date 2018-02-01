const fs = module.require('fs');

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have manage messages.");

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.send("You did not specify a user mention or ID!");

  if(toMute.id === message.author.id) return message.channel.send("You cannot unmute yourself.");
  if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.send("You cannot unmute a memeber who is higher or has same role as you.");

  let role = message.guild.roles.find(r => r.name === "SADB mute");

  if(!role || !toMute.roles.has(role.id)) return message.channel.send("This user is not muted!");

  await toMute.removeRole(role);
  message.channel.send("I have unmuted them.")

  return;
}

module.exports.help = {
  name: "unmute"
}
