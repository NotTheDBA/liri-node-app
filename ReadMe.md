# LIRI Bot

### Overview

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI is a command line Node.js app that takes in parameters and gives you back data.

LIRI will log and tweet all commands it is passed.

LIRI Bot can take in one of the following commands:
<p>

  * `my-tweets`
  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This will show your last 20 tweets and when they were created at in your terminal/bash window.</div>
</p>

  * `spotify-this-song '<song name>'` (song name in quotes)
  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This will show the following information about the song in your terminal/bash window:</div>

   ```
     * Artist(s)
     * The song's name     
     * A preview link of the song from Spotify
     * The album that the song is from
   ```
</div>

  * `movie-this '<movie name>'` (movie name in quotes)
  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This will output the following information to your terminal/bash window:</div>

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
  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This will run a random LIRI command.</div>

### Getting started

Download or clone this repo to your machine.

Rename the file .env_example to .env, and edit the placeholder values with your Twitter and Spotify api keys.

Run the following command in your shell:

  `npm install`

Run LIRI from the shell, passing it a command, and a parameter if needed.

  `node liri <comand> '<parameter>'` (parameter - song name or movie name - in quotes)

If you get stuck, you can view a help message:
  ```
  `node liri ?`
  `node liri -h`
  `node liri help`
  ```