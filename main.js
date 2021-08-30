let Discord = require("discord.js")
let client = new Discord.Client()

client.on("ready", () => {
   client.user.setPresence({ activity: {name: "+help | Watching over Ancalagon!"}, status: "idle"})
})

client.on("message", message => {
  if (message.content === '+ping') {  
    message.channel.send(`Pong!\n Latency is ${Date.now() - message.createdTimestamp}ms. \n API Latency is ${Math.round(client.ws.ping)}ms!`);
  }
  if (message.content === '+about') {  
    message.channel.send(`Hi there! This bot was coded by RooRay#0702. Please do not DM me anywhere asking for me to make you a bot like this one, even if I wanted to, I couldn't maintain it. Thanks for your co-operation and have fun in Ancalagon!`);
  }
  if (message.content === '+version') {  
    message.channel.send(`The bot is currently on version alpha 0.1! This build of the bot was released on the 8th of April, 2021.`);
  }
  if (message.content === '+variant') {  
    message.channel.send(`The bot is on variant "cutting-edge". Please send me your feedback!`);
  }
  if (message.content === '+help') {  
    message.channel.send(`The bot's prefix is currently "+". This may be subject to change in the future. \n\nThe bot currently has the following commands: \n
    +ping - Pings the bot and the API.\n
    +about - Tells you info about the bot.\n
    +version - Tells you the current version of the bot.\n
    +variant - Tells you the variant (of which there are currently 2) of the bot. \n
    +backup - Incase you need a fucking bot to back you up in your arguments... \n
    +motivateme (1-4)- Get a motivational message! 1 through 4. Say it like "+motivatme1".`);
  }
  if (message.contains === '+motivateme1') {  
    message.channel.send(`Think about what you'll get at the end! (Cookie, perhaps?)`);
  }
   if (message.content === '+motivateme2') {  
    message.channel.send(`You can do it if you put yer back into it!`);
  }
   if (message.content === '+motivateme3') {  
    message.channel.send(`Final push, c'mon! You can keep going! <3`);
  }
   if (message.content === '+motivateme4') {  
    message.channel.send(`You can do it! Keep going! :D`);
  }
  const args = message.content.slice(message.content[0]).trim().split(' ');
const command = args.shift().toLowerCase();

if (command === ';game-ping' || command === ';gameping') {
  if(!args) {
    message.channel.send(`@everyone! **${message.member.nickname}** wants to play game! Join the Gaming VC to participate!`)
  }
  if(args) {
  message.channel.send(`@everyone! **${message.member.nickname}** wants to play **${args.join(" ")}**! Join the Gaming VC to participate!`) 
  }
}

});

client.login(process.env.token)
