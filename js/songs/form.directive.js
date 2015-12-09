"use strict";

(function(){
  angular
    .module("songs")
    .directive("songForm", [
      "SongFactory",
      "$state",
      SongFormDirectiveFunction
    ])
    function SongFormDirectiveFunction(SongFactory, $state){
      return {
        templateUrl: "js/songs/form.html",
        scope: {
          song: "="
        },
        link: function(scope){
          scope.create = function(){
            scope.song.$save(function(response){
              $state.go("songsIndex", {}, {reload: true})
            })
          }
        }
      }
    }
}());
