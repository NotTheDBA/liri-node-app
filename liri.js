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

        case '?':
        case 'h':
        case 'help':
            help();
            break;

        case 'my-tweets':
            getTweets();
            break;

        case 'spotify-this-song':
            spotifyThis(option1)
            break;

        case "movie-this":
            movieThis(option1);
            break;

        case "do-what-it-says":
            doThis(option1);
            break;

        default:
            console.log();
            console.log("Sorry, I don't know how to '" + command + "'...   Yet!")
            help()
    }
}
//#endregion

function help() {
    console.log();
    console.log("Try one of these commands:")
    console.log("   my-tweets")
    console.log("   spotify-this-song 'name of a song'")
    console.log("   movie-this 'name of a movie'")
    console.log("   do-what-it-says")
}

//#region My Tweets
function getTweets() {
    var params = { screen_name: 'NotTheDBABot' };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            for (tweet in tweets) {
                var tweet = "@" + tweets[tweet]["user"]["name"] + " tweets: '" + tweets[tweet]["text"] + " | " + tweets[tweet]["created_at"]
                console.log(tweet);
            }
        }
    });
}
//#endregion

//#region Spotify This Song
function spotifyThis(option1) {
    console.log(option1);
    if (typeof option1 === "undefined") {
        option1 = "The Sign"
    }
    option1 = option1.replace(" ", "+")
    spotify.search({ type: 'track', query: option1 })
        .then(function(response) {
            console.log(response["tracks"]);
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
            // console.log(JSON.parse(body));
            console.log();
            console.log("Movie");
            console.log("=====");
            movie = JSON.parse(body);
            console.log(movie.Title);
            console.log(movie.Year);
            console.log(movie.Language);
            console.log("Made in: " + movie.Country);
            console.log("Ratings");
            movie.Ratings.forEach(element => {
                if (element.Source === 'Internet Movie Database') {
                    console.log("   IMDB: " + element.Value);
                }
                if (element.Source === 'Rotten Tomatoes') {
                    console.log("   Rotten Tomatoes: " + element.Value);
                }
            });
            console.log("Starring");
            movie.Actors.split(",").forEach(element => {
                console.log("   " + element.trim());
            })
            console.log(movie.Plot);
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