angular.module('starter.controllers', [
	'uiGmapgoogle-maps',
	'ngStorage'
])

.controller('DashCtrl', function($scope, Markers, uiGmapGoogleMapApi) {

	$scope.map = {
		center: {
			latitude: 48.474671,
			longitude: -123.412514
		},
		zoom: 11
	};

	$scope.markers = Markers.all();
	console.log( Markers.all() );

	uiGmapGoogleMapApi.then(function(maps) {
		console.log('ready?');
		//google.maps.event.trigger(map, 'resize'); // define map?
    });

	var events = {
      places_changed: function (searchBox) {
      	console.log(searchBox);
      }
    }
    $scope.searchbox = { template:'searchbox.tpl.html', events:events};

})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
