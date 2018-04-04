//#region Requires
// Read and set environment variables
require("dotenv").config();
var request = require("request");
var Twitter = require('twitter');
var keys = require("./keys.js");
//#endregion

//#region variables
// var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
//#endregion

//#region Confirmations
// prints `your key` to the console
console.log(process.env.TWITTER_CONSUMER_KEY)

// prints `your spotify id` to the console
// console.log(process.env.SPOTIFY_ID)

//#endregion

//#region pseudo-code
/**
 * Make it so liri.js can take in one of the following commands:

    * `my-tweets`

    * `spotify-this-song`

    * `movie-this`

    * `do-what-it-says`
 */

//#endregion

//#region Twitter
var params = { screen_name: 'NotTheDBABot' };
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        console.log(tweets);
    }
});
//#endregion