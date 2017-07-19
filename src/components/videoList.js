angular.module('video-player')
.controller('videoListCtrl', function($scope) {
  //this.videos = window.exampleVideoData;

})

.directive('videoList', function() {

  return {
    scope: {
      videos: '<', //bind all videos to videoList.js
      onClick: '<'
    },
    controllerAs: 'videoListCtrl',
    bindToController: true,
    controller: 'videoListCtrl',
    templateUrl: 'src/templates/videoList.html'
  };

});
