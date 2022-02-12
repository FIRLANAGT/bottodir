"use strict";

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
const { Client, Intents, Collection } = require("discord.js");
const { getAllFiles } = require("./util.js");
const { cyan, green, red } = require("colors/safe");
const config = require("../../Controller/owners.json");


                                                                                                                                                                                                                                                                                                                            /*

                                        ----- INFORMATION ----- INFORMATION ----- INFORMATION ----- INFORMATION ----- INFORMATION ----- INFORMATION 

                                                                            THIS IS THE TIME SYSTEM OF THE BOT.
                                                                                    MODIFY AT YOUR OWN RISK.

                                                                - THIS FILE IS ONLY NEEDED FOR INIT. THE TIME UTIL QUERIES.

                                     - SUPPORT IS NOT PROVIDED IF THIS IS MODIFIED/CHANGED/MOVED IN ANY WAY THAT MAY BREAK COMMANDS/EVENTS/FUNCTIONS.




                                                                                                                                                                                                                                                                                                                    */



                                                                                                                                                                                                                                                                                                                                    /*



                                                                                %CopyrightBegin%


                                                                    Copyright Bottodir 2021. All Rights Reserved.

                                                            Licensed under the Apache License, Version 2.0 (the "License");
                                                            you may not use this file except in compliance with the License.

                                                                    You may obtain a copy of the License at

                                                                    http://www.apache.org/licenses/LICENSE-2.0

                                                            Unless required by applicable law or agreed to in writing, software
                                                            distributed under the License is distributed on an "AS IS" BASIS,
                                                        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                        See the License for the specific language governing permissions and
                                                                            limitations under the License.


                                                                                    %CopyrightEnd%    
                                                                                    
                                                                                    
                                                                                    
                                                                        --      last update: 12/2/2022         --                                                                                                                                                                                                       */


  

/* Initilize the client and define the intents necessary for commands/events ... */
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_SCHEDULED_EVENTS,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_WEBHOOKS,
  ],
});
client.commands = new Collection();

/* Load commands. */
console.log(cyan("Loading Commands . . ."));
/* Get an array of all files in the commands folder. */
const commands = getAllFiles(path.join(__dirname, "../commands"));
if (commands.length <= 0) console.log(red("NO COMMANDS FOUND"));
else {
  /* Iterate every file in the array and require it. Also map it to the commands collection. */
  commands.forEach((file, i) => {
    const props = require(`${file}`);
    console.log(
      green(
        `${++i}. Command: ${file.split("\\").pop().split("/").pop()} loaded!`
      )
    );
    client.commands.set(props.data.name, props);
  });
}

/* Load events. */
console.log(cyan("Loading Events . . ."));
/* Get an array of all files in the events folder. */
const events = getAllFiles(path.join(__dirname, "../events"));
if (events.length <= 0) console.log(red("NO EVENTS FOUND"));
else {
  /* Iterate every file in the array and require it. Also register every event. */
  events.forEach((file, i) => {
    const event = require(`${file}`);
    console.log(
      green(`${++i}. Event: ${file.split("\\").pop().split("/").pop()} loaded!`)
    );
    if (event.data.once)
      client.once(event.data.name, (...args) =>
        event.run(...args).catch((err) => console.error(red(err)))
      );
    else
      client.on(event.data.name, (...args) =>
        event.run(...args).catch((err) => console.error(red(err)))
      );
  });
}

/* Login and connect the bot to the api. */
client.login(process.env.BOT_TOKEN);

<<<<<<< HEAD
module.exports = client;
=======
module.exports = client;
>>>>>>> 48dc4b62c7b424239ce6c0ee28745c8fc064744c
