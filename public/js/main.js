"use strict";

const app = angular.module('app', []);

app.controller('ctr1', ['$scope', "$timeout", 'serverService', 'data', function($scope, $timeout, serverService, data){
  $scope.currentImg = "./logoImages/logoDominoFinal.png";
  $scope.currentPrice = 0;
  $scope.companies = data.company;
  $scope.switchCompany = (index) => {
    $scope.currentImg = data.company[index]["brandLogoPath"];
  }
  $scope.updatePoints = () => {
    serverService.talk();
  }

  if (annyang) {
    const pauseHandle = () => {
      annyang.pause();
      setTimeout(() => {
        annyang.start();
      }, 2000);
    }

    const cash = (index) => {
      $scope.currentImg = data.company[index]["brandLogoPath"];
      $scope.currentIndex = index;
      data.company[index]++;
      $scope.currentPrice = data.company[index]["points"];
    }
    // Let's define our first command. First the text we expect, and then the function it should call
    var commands = {
      'amazon': function() {
        console.log('amazon');
        cash(1);
        $('.balance p').text('amazon');
        pauseHandle();
      },
      'barnes and noble': function() {
        console.log('barnes');
        cash(2);
        $('.balance p').text('barnes');
        pauseHandle();
      },
      'gatorade': function() {
        console.log('gatorade');
        cash(3);
        $('.balance p').text('gatorade');
        pauseHandle();
      },
      'dominos pizza': function() {
        console.log('dominos');
        cash(4);
        $('.balance p').text('dominos');
        pauseHandle();
      },
      'major league hacking': function() {
        console.log('major');
        cash(5);
        $('.balance p').text('major');
        pauseHandle();
      },
      'spotify': function() {
        console.log('spotify');
        cash(6);
        $('.balance p').text('spotify');
        pauseHandle();
      },
      'steam': function() {
        console.log('steam');
        cash(7);
        $('.balance p').text('steam');
        pauseHandle();
      },
      'wawa': function() {
        console.log('wawa');
        cash(8);
        $('.balance p').text('wawa');
        pauseHandle();
      },
    };

    // Add our commands to annyang
    annyang.addCommands(commands);
    annyang.debug();
    // Start listening. You can call this here, or attach this call to an event, button, etc.
    //annyang.start();
  }

}]);

app.service('serverService', function(data, $http){
  this.updatePoints = (id) => {
    const set = data.company[id];
    $http({
      method: 'POST',
      url: '/savePoints',
      data: JSON.stringify({points: 2}),
      headers: { 'Content-Type': 'application/json' }
    }).then(
        (success) => { successCallback(success) },
        (error) => { errorCallback(error.data) }
      );

    const successCallback = (success) => {
      console.log("successfully logged in");
      //set profile information
      // this.setUserInfo(success)
      // $rootScope.successfullyLoggedIn = true;
    }

    const errorCallback = () => {
      console.log("error logging in");
      // $(".signFormMessage p").text("Username or Password incorrect");
      // $('.signFormMessage').fadeIn();
    }
  };
  this.talk = () => {

    $http({
      method: 'GET',
      url: '/talktodevice',
    }).then(
        (success) => { successCallback(success) },
        (error) => { errorCallback(error.data) }
      );

    const successCallback = (success) => {
      console.log("successfully logged in");
    }

    const errorCallback = () => {
      console.log("error");
    }
  };
})

app.service('data', function(){
  this.company = [
    {
      "points": 0,
      "brandName":"Amazon",
      "recognitionText":"amazon",
      "recognitionText2":"prime",
      "recognitionText3":"alexa",
      "brandLogoPath":"./logoImages/amazonLogo.png",
      "preferredColor": "#FFF"
    },
    {
      "points": 0,
      "brandName":"BarnesAndNoble",
      "recognitionText":"barnes and noble",
      "recognitionText2":"barnes and nobles",
      "recognitionText3":"barnes and",
      "brandLogoPath":"./logoImages/barnes-and-noble-logo.png",
      "preferredColor": "#FFF"
    },
    {
      "points": 0,
      "brandName":"Gatorade",
      "recognitionText":"gatorade",
      "recognitionText2":"propel",
      "recognitionText3":"gatorades",
      "brandLogoPath":"./logoImages/gatoradeLogo.png",
      "preferredColor": "#FFF"
    },
    {
      "points": 0,
      "brandName":"DominosPizza",
      "recognitionText":"domino's pizza",
      "recognitionText2":"domino's",
      "recognitionText3":"dominoes",
      "brandLogoPath":"./logoImages/logoDominoFinal.png",
      "preferredColor": "#FFF"
    },
    {
      "points": 0,
      "brandName":"MajorLeagueHacking",
      "recognitionText":"mlh",
      "recognitionText2": "major league hacking",
      "recognitionText3": "major hacking",
      "brandLogoPath":"./logoImages/mlhLogo.png",
      "preferredColor": "#FFF"
    },
    {
      "points": 0,
      "brandName":"Spotify",
      "recognitionText":"spotify",
      "recognitionText2": "spot",
      "recognitionText3": "spotify playlist",
      "brandLogoPath":"./logoImages/spotifyLogo.png",
      "preferredColor": "#FFF"
    },
    {
      "points": 0,
      "brandName":"Steam",
      "recognitionText":"gabon",
      "recognitionText2": "steam",
      "recognitionText3": "valve",
      "brandLogoPath":"./logoImages/steamLogo.png",
      "preferredColor": "#FFF"
    },
    {
      "points": 0,
      "brandName":"Wawa",
      "recognitionText":"wawa",
      "recognitionText2": "hoagie fest",
      "recognitionText3": "wawa",
      "brandLogoPath":"./logoImages/steamLogo.png",
      "preferredColor": "#FFF"
    }
  ]
})
