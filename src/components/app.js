angular.module('video-player')

.controller('appCtrl', function($scope) {
  this.videos = window.exampleVideoData;
  this.currentVideo = window.exampleVideoData[0];
  console.log(this.currentVideo);

  var changeCurrentVideo = (obj) => {
    this.currentVideo = obj;
    console.log(this);
    console.log(this.currentVideo.snippet.title);
  };

  this.onClick = changeCurrentVideo;

})


.directive('app', function() {

  return {
    scope: {
      // onClick:'<'
    },
    controllerAs: 'appCtrl', //need controller As
    bindToController: true,
    controller: 'appCtrl',
    templateUrl: 'src/templates/app.html'
  };

});
