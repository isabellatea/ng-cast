angular.module('video-player')

.controller('videoPlayerCtrl', function($scope) {

})


.directive('videoPlayer', function() {

  return {
    scope: {
      video: '<'
    },
    controllerAs: 'videoPlayerCtrl',
    bindToController: true,
    controller: 'videoPlayerCtrl',
    templateUrl: 'src/templates/videoPlayer.html'
  };

});
