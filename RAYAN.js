//===============RAYAN============//
const Discord = require("discord.js");
const RAYAN = new Discord.Client();
//===============RAYAN============//
RAYAN.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`PLAYING BY YT DEV RAYAN`];
  setInterval(function () {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    RAYAN.user.setActivity(STREAMING, {
      type: "PLAYING",
      url: "https://www.twitch.tv/faith",
    });
  }, 2000);
});
//===============RAYAN============//
RAYAN.on("ready", () => {
  var join = RAYAN.channels.get(""); /// id voice
  if (join) join.join();
});
//===============RAYAN============//
RAYAN.login(""); /////TOKEN DANE
//===============RAYAN============//
