"use strict";
var currentUser = {};
(function(){
  angular
  .module("wdiRadio", [
    "ui.router",
    "songs",
    "ng-token-auth"
  ])
  .config([
    "$stateProvider",
    RouterFunction,
  ])
  .config([
    "$authProvider",
    function($authProvider) {
      $authProvider.configure({
        apiUrl: 'http://localhost:3000'
      });
    }]);

    function RouterFunction($stateProvider){
      $stateProvider
      .state("songsIndex", {
        url: "/songs",
        templateUrl: "js/songs/index.html",
        controller: "SongsIndexController",
        controllerAs: "SongsIndexViewModel"
      })
    }

    angular.module('wdiRadio')
    .controller('LoginCtrl', function($auth) {
      this.submitLogin = function() {
        $auth.submitLogin({email: this.loginForm.email, password: this.loginForm.password})
        .then(function(resp) {
          console.log(resp);
          currentUser = resp;
        })
        .catch(function(resp) {
          console.log(resp);
        });
      };

      this.signOut = function() {
        $auth.signOut()
        .then(function(resp) {
          // handle success response
          console.log(resp);
        })
        .catch(function(resp) {
          console.log(resp);
          // handle error response
        });
      }
    });
  }()
);
