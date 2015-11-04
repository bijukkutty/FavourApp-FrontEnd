angular.module('starter.services', [])

  .factory('Favourforums', function () {

    var favourforums = [{
      id: 0,
      name: 'susendran',
      lastText: 'You on your way?',
      face: 'http://www.hairbeautyfashiontips.com/wp-content/uploads/2015/01/nail.jpg'
    }, {
      id: 1,
      name: 'prabhu',
      lastText: 'Hey, it\'s me',
      face: 'http://cdn.skim.gs/images/ca2d3289ce4a29615fcd/cool-nail-designs-glitter-and-glitz-nail-design'
    }, {
      id: 2,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
    }, {
      id: 3,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
    }, {
      id: 4,
      name: 'Mike Harrington',
      lastText: 'This is wicked good ice cream.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }];

    return {
      all: function () {
        return favourforums;
      },
      remove: function (favourforum) {
        favourforums.splice(favourforums.indexOf(favourforum), 1);
      },
      get: function (favourforumId) {
        for (var i = 0; i < favourforums.length; i++) {
          if (favourforums[i].id === parseInt(favourforumId)) {
            return favourforums[i];
          }
        }
        return null;
      }
    };
  })

  .factory('askFavourServ', function ($http){
    return {
      createFavour: function (favourInput) {
        var promise = $http.post('https://moonlit-buckeye-111306.appspot.com/rest/favour/persistfavour', favourInput);
        promise.then(function(resp) {
         alert('Success: ' + resp.data);
        }, function(reason) {
         alert('Failed: ' + reason.data);
        });
      }
    };
  })

.factory('favourForumServ', function ($http){
  return {
    createforum: function () {
      var promise = $http.post('https://moonlit-buckeye-111306.appspot.com/rest/favour/queryfavours','');
      return promise;
    }
    }
});
