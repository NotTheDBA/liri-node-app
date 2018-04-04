// import { keys } from "./keys.js";

//#region Requires
// Read and set environment variables
require("dotenv").config();
var request = require("request");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");

//#endregion

//#region Read Arguments
var command = process.argv[2];
var option1 = process.argv[3];

//#endregion

//#region variables
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
//#endregion

//#region Confirmations
// prints `your key` to the console
// console.log(process.env.TWITTER_CONSUMER_KEY)

// prints `your spotify id` to the console
// console.log(process.env.SPOTIFY_ID)

//#endregion

//#region Command Switch
switch (command) {

    case 'my-tweets':
        getTweets();
        break;

    case 'spotify-this-song':
        // spotify(option1);
        spotifyThis(option1)
        break;


    case "movie-this":
        movieThis(option1);
        break;

    case "do-what-it-says":
        doThis(option1);
        break;

    default:
        console.log("Sorry, I don't know how to '" + command + "'")
}
//#endregion

//#region My Tweets
function getTweets() {
    var params = { screen_name: 'NotTheDBABot' };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            console.log(tweets);
        }
    });
}
//#endregion

//#region Spotify This Song
function spotifyThis(option1) {

    console.log("I don't know how to 'spotify-this-song'... yet!")

    spotify
        .search({ type: 'track', query: option1 })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(err) {
            console.log(err);
        });

}
//#endregion

//#region Movie This
function movieThis(option1) {
    console.log("I don't know how to 'movie-this'... yet!")

}
//#endregion

//#region Do What It Says
function doThis(option1) {
    console.log("I don't know how to 'do-what-it-says'... yet!")

}
//#endregion