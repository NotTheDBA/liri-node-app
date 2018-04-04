// Read and set environment variables
require("dotenv").config();

// prints `our key` to the console
console.log(process.env.TWITTER_CONSUMER_KEY)

// prints `our secret` to the console
console.log(process.env.TWITTER_CONSUMER_SECRET)
    // etc.