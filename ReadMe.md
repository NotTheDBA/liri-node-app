# LIRI Bot

### Overview

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI is a command line Node.js app that takes in parameters and gives you back data.

Liri Bot can take in one of the following commands:

  * `my-tweets`
  * This will show your last 20 tweets and when they were created at in your terminal/bash window.

  * `spotify-this-song` [song name]  - Pulls Spotify information for the song
  * This will show the following information about the song in your terminal/bash window
   ```
     * Artist(s)
     * The song's name     
     * A preview link of the song from Spotify
     * The album that the song is from
   ```

  * `movie-this`
  * This will output the following information to your terminal/bash window:

   ```
     * Title of the movie.
     * Year the movie came out.
     * Language of the movie.
     * Country where the movie was produced.
     * IMDB Rating of the movie.
     * Rotten Tomatoes Rating of the movie.
     * Actors in the movie.
     * Plot of the movie.
   ```

  * `do-what-it-says`
  * This will run a random LIRI command.

 
### Getting started

Download or clone this repo to your machine.
Run the following command in your shell:
  npm install

Run Liri from the shell, passing it a command, and a parameter if needed.

  `node liri <comand> <'parameter'>`

If you get stuck, you can view a help message:
  `node liri ?`
  `node liri -h`
  `node liri help`