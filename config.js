const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "905 131 075";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_15_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyLFxuICAgICAgICA4MixcbiAgICAgICAgNTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU1LFxuICAgICAgICA3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNSxcbiAgICAgICAgNTksXG4gICAgICAgIDc1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAsXG4gICAgICAgIDMsXG4gICAgICAgIDY5LFxuICAgICAgICA1NCxcbiAgICAgICAgOSxcbiAgICAgICAgOTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDksXG4gICAgICAgIDc0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDg3LFxuICAgICAgICA2NixcbiAgICAgICAgNDksXG4gICAgICAgIDUsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAzMSxcbiAgICAgICAgOTksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA5LFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjExLFxuICAgICAgICA2OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxODksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgODYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNixcbiAgICAgICAgMjA3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTE4LFxuICAgICAgICA2MixcbiAgICAgICAgNDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDY4LFxuICAgICAgICA3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg3LFxuICAgICAgICAyMyxcbiAgICAgICAgOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDc4LFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA1NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTksXG4gICAgICAgIDcxLFxuICAgICAgICA1NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg2LFxuICAgICAgICA5MyxcbiAgICAgICAgODAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDkxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE0OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzMixcbiAgICAgICAgNDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjExLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA3NCxcbiAgICAgICAgNCxcbiAgICAgICAgMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTMwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjAzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgODIsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAzNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODIsXG4gICAgICAgIDEzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRGJJN2ZkMGN2UU1pK0x0bjRINHcvL1BlUVNzZlFpano2NXY0TjZ3amk3VT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibDZsQ0EtcDNSZmEwREhfWFNVRFdyZ1wiLFxuICBcInBob25lSWRcIjogXCI2ZjAxOWI4ZC02MWVhLTRhNGYtYjAzMC01NGEzMGE3MjU5NjlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA2LFxuICAgICAgMTgsXG4gICAgICAyMyxcbiAgICAgIDc5LFxuICAgICAgMjM2LFxuICAgICAgNzgsXG4gICAgICAxNDksXG4gICAgICAxNixcbiAgICAgIDIzMCxcbiAgICAgIDgxLFxuICAgICAgMTkzLFxuICAgICAgMjQyLFxuICAgICAgOTAsXG4gICAgICAxMzYsXG4gICAgICAyMzUsXG4gICAgICAxMjgsXG4gICAgICA1MCxcbiAgICAgIDkxLFxuICAgICAgMjUxLFxuICAgICAgNjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOSxcbiAgICAgIDg3LFxuICAgICAgMTM4LFxuICAgICAgODksXG4gICAgICAxNzgsXG4gICAgICA2MCxcbiAgICAgIDEyMixcbiAgICAgIDgyLFxuICAgICAgMjEsXG4gICAgICAxMjYsXG4gICAgICAyMTEsXG4gICAgICAxMzgsXG4gICAgICAxNTMsXG4gICAgICAyMjEsXG4gICAgICAxNzEsXG4gICAgICAzMixcbiAgICAgIDk5LFxuICAgICAgMTM3LFxuICAgICAgNjEsXG4gICAgICAxOTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTjVERUhIM1ZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1MjkwNTEzMTA3NToxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjY2NDczMDI1MDgxNDIyOjEyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0wvN2pvTUNFUC9wNmJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiL2RqcVZ5MlNLam10SnU0N3RYRzhQemN0WkE5ZE1BaEhkQWxnY3RBMGdIOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJWVVR5a3BwaVZhcGt3M2U3SnNDSnVlNXhPQUk4NnpOTUdEMi9lY05aWS93RHBXR1dLQlIyYWZBb040QlgydlJJYWJJSDRtVkRuMzdnSFpZV1M2amNBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJiaHJkUW1PMWJTUUZROGQzMzUwTlFVbmJTMFVqOGdwMEFJblExRmh4NEp5UVZ1U1R5Qk82SnpQM3JDdENzbG8rMndqSDdycTVxZDhrMjZGVFVXNlRoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTI5MDUxMzEwNzU6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTM5ODUzMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1UY1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTVRjLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTjFHL3JOa2Zpc25rQk90eU5UMU4vbmlRSUZ4eFRsUldTcVNLM3FhaDMxTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NDM0MDc1NDksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "MOHAN",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
