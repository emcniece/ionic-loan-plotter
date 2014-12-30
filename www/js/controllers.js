angular.module('starter.controllers', [
	'uiGmapgoogle-maps',
	'ngStorage'
])

.controller('MapCtrl', function($scope, Markers, uiGmapGoogleMapApi) {

	$scope.map = {
		center: {
			latitude: 48.474671,
			longitude: -123.412514
		},
		zoom: 11
	};

	$scope.markers = Markers.all();

	uiGmapGoogleMapApi.then(function(maps) {
		console.log('map ready');
		// Should $scope.map be defined in here?
    });

	var events = {
      places_changed: function (searchBox) {
      	console.log(searchBox);
      }
    }
    $scope.searchbox = { template:'templates/searchbox.tpl.html', events:events};

})

.controller('DealsCtrl', function($scope, Deals, Users) {
  var dealerUsers = Users.all();
  var allDeals = Deals.all();

  // Load user object into each deal
  angular.forEach(allDeals, function(deal, key){
    allDeals[key].user = getObjByKey('id', deal.userId, dealerUsers);
  });

  // Populate view
  $scope.deals = allDeals;
})

.controller('LeaderCtrl', function($scope, Deals) {
  $scope.deals = Deals.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
