//#region Read and set environment variables
require("dotenv").config();
var request = require("request");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var lineReader = require('line-reader');
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
//#endregion

// Run the commands the user passed in...
liriSwitch(process.argv[2], process.argv[3]);

//#region Command Switch
function liriSwitch(command, option1) {
    switch (command) {

        case '?':
        case '-h':
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
    console.log();
    console.log("To see this message again, type:")
    console.log("   node liri help");
}

//#region My Tweets
function getTweets() {
    var params = { screen_name: 'NotTheDBABot' };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {

            console.log("@" + tweets[0]["user"]["name"] + " tweets:");

            for (tweet in tweets) {
                var tweet = tweets[tweet]["created_at"] + ": '" + tweets[tweet]["text"]
                console.log(tweet);
            }
        }
    });
}
//#endregion

//#region Spotify This Song
function spotifyThis(option1) {
    if (typeof option1 === "undefined") {
        option1 = "The Sign"
    }
    querySong = option1.split(" ").join("+");

    spotify.search({ type: 'track', query: querySong })
        .then(function(response) {
            tracks = response["tracks"];

            tracks.items.forEach(song => {

                if (song.type === "track" && song.name.toLowerCase() === option1.toLowerCase()) {

                    console.log();
                    //  The song's name     
                    console.log("Song: " + song.name);
                    //  The album that the song is from
                    console.log("Album: " + song.album.name);
                    //  A preview link of the song from Spotify
                    console.log("Preview: " + song.preview_url);

                    // Artist(s)
                    console.log("Artist(s)");
                    song.artists.forEach(artist => {
                        console.log("   " + artist.name);
                    })
                }

            })

        })
        .catch(function(err) {
            console.log(err);
        });

}
//#endregion

//#region Movie This
function movieThis(option1) {
    if (typeof option1 === "undefined") {
        option1 = "Mr. Nobody"
    }
    var queryUrl = "http://www.omdbapi.com/?t=" + option1 + "&y=&plot=short&apikey=trilogy"

    request(queryUrl, function(error, response, body) {
        // If the request is successful
        if (!error && response.statusCode === 200) {

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
function doThis() {
    var commands = [];
    var comOpts = [];
    console.log("Selecting command...")

    lineReader.eachLine('random.txt', function(line, last) {
        // do whatever you want with line...
        var comOpts = line.split(",");
        commands.push(comOpts);

        if (last) {
            var rand = Math.floor(Math.random() * commands.length);
            console.log("Running command...")
            console.log("Command: " + commands[rand][0])
            if (typeof commands[rand][1] !== "undefined") {
                console.log("Option: " + commands[rand][1])
            }
            liriSwitch(commands[rand][0], commands[rand][1])
        }
    });

}
//#endregion