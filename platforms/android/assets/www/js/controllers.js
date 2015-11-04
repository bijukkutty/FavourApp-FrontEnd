angular.module('starter.controllers', [])

  .controller('FavourforumCtrl', function ($scope, $location, $window, Favourforums, favourForumServ) {
    var promise = favourForumServ.createforum();
    promise.then(function(resp) {
     // alert('Success: ' + resp.data);
       $scope.favourforums = resp.data;
      return resp.data;
    }, function(reason) {
     // alert('Failed: ' + reason.data);
    });
    $scope.remove = function (favourforum) {
      Favourforums.remove(favourforum);
    };
  })

  .controller('AskfavourCtrl', function ($scope,$window, $http,$location, askFavourServ) {
    $scope.askFavour = function (askFavInput) {
      askFavInput['userId'] = 'XYZ';
      askFavourServ.createFavour(askFavInput);
     // alert("Done Posting");
     $location.path('tab-favourforum');
      $window.location.reload();

    };
  })

  .controller('ProvidefavourCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  })
