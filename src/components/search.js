angular.module('video-player')

.controller('searchCtrl', function($scope) {

})


.directive('search', function() {

  return {
    scope: {},
    controllerAs: 'searchCtrl',
    bindToController: true,
    controller: 'searchCtrl',
    templateUrl: 'src/templates/search.html'
  };

});
