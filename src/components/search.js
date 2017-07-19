angular.module('video-player')

.controller('searchCtrl', function($scope) {

  this.search = (query) => {
    console.log(' In Search ');
    console.log(this);

    this.updateVideos(query);
  };

})


.directive('search', function() {

  return {
    scope: {
      result: '<',
      updateVideos: '<'
    },

    controllerAs: 'searchCtrl',
    bindToController: true,
    controller: 'searchCtrl',
    templateUrl: 'src/templates/search.html'
  };

});
