//#region Requires
// Read and set environment variables
require("dotenv").config();

var request = require("request");
//#endregion

//#region Confirmations
// prints `our key` to the console
console.log(process.env.TWITTER_CONSUMER_KEY)

// prints `our secret` to the console
console.log(process.env.TWITTER_CONSUMER_SECRET)

//#endregion