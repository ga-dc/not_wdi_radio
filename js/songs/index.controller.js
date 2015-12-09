"use strict";

(function(){
  angular
    .module("songs")
    .controller("SongsIndexController", [
      "SongFactory",
      SongsIndexControllerFunction
    ])
    function SongsIndexControllerFunction (SongFactory){
      this.songs = SongFactory.query();
      this.newSong = new SongFactory();
      this.play = function(song){
        console.log("i was clicked", song);
        this.playSong = song
        console.log(this);
      }
    }
}())
