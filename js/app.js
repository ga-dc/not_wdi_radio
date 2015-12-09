"use strict";

(function(){
  angular
  .module("wdiRadio", [
    "ui.router"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("songsIndex", {
      url: "/songs",
      templateUrl: "js/songs/index.html"
    })
    .state("songsShow", {
      url: "/songs/:id",
      templateUrl: "js/songs/show.html"
    });
  }
}());
