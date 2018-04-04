//#region Read and set environment variables
require("dotenv").config();
var request = require("request");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var fs = require("fs");
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
//#endregion

// Run the commands...
liriSwitch(process.argv[2], process.argv[3]);

//#region Command Switch
function liriSwitch(command, option1) {
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
            console.log("Sorry, I don't know how to '" + command + "'...   Yet!")
    }
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

    var queryUrl = "http://www.omdbapi.com/?t=" + option1 + "&y=&plot=short&apikey=trilogy"

    request(queryUrl, function(error, response, body) {
        // If the request is successful
        if (!error && response.statusCode === 200) {
            // console.log(JSON.parse(body))
            // Then log the Release Year for the movie
            console.log("'" + option1 + "' was released in " + JSON.parse(body).Year + ".");

        }
    });

}
//#endregion

//#region Do What It Says
function doThis(option1) {


    fs.readFile("random.txt", "utf8", function(err, data) {

        if (err) {
            return err;
        }

        var comOpts = data.split(",")
        console.log("Selecting command...")
        console.log("Running command...")
        console.log("Command: " + comOpts[0] + "...")
        console.log("Option: " + comOpts[1] + "...")

        liriSwitch(comOpts[0], comOpts[1])

    });

}
//#endregion