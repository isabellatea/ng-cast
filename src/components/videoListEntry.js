angular.module('video-player')
.controller('videoListEntryCtrl', function($scope) {


})

.directive('videoListEntry', function() {

  return {
    scope: {
      video: '<', //binds each video passed in to individual video list entry
      onClick: '<'
    },
    controllerAs: 'videoListEntryCtrl',
    bindToController: true,
    controller: 'videoListEntryCtrl',
    templateUrl: 'src/templates/videoListEntry.html'
  };

});

