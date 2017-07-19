angular.module('video-player')
.service('youTube', function($http, $window) {
// Simple GET request example:
  var search = function(query, callback) {
    var params = {
      q: query || 'kitties',
      maxResults: 5,
      key: $window.YOUTUBE_API_KEY,
      videoEmbeddable: true,
      part: 'snippet',
      type: 'video'
    };

  // $http.get({
  //   url: 'https://www.googleapis.com/youtube/v3/search',
  //   params: params,
  // }).then(function successCallback(response) {
  //     console.log(response)
  //   },
  //    function errorCallback(response) {
  //     console.log("error - " + response)
  //   });

    $http.get('https://www.googleapis.com/youtube/v3/search', {params}).then(
      function(response) {
        callback(response.data.items); //performs callback on returned objects from search
      }, function() {
      console.log('FAIL');
    });

  };

  return {search: search};

});

