angular.module('video-player')

.controller('appCtrl', function(youTube) {
  this.videos = window.exampleVideoData;
  this.currentVideo = window.exampleVideoData[0];
  console.log(this.currentVideo);

  var changeCurrentVideo = (obj) => {
    this.currentVideo = obj;
    console.log(this);
    console.log(this.currentVideo.snippet.title);
  };

  var updateVideos = (query) => {
  youTube.search(query, (items) => {
    console.log('Searching... ' + query);
    this.videos = items;
    this.currentVideo = items[0];
  });
  }
    this.onClick = changeCurrentVideo;

    updateVideos("doggie");

    this.updateVideos = updateVideos;

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
