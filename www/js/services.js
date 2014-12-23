angular.module('starter.services', [])

.factory('Markers', function() {

  var markers = [
    {id: 0, latitude: 48.431671, longitude: -123.338871, title: "Marker 1"},
    {id: 1, latitude: 48.462187, longitude: -123.333035, title: "Marker 2"},
    {id: 2, latitude: 48.454901, longitude: -123.435001, title: "Marker 3"},
    {id: 3, latitude: 48.430532, longitude: -123.407536, title: "Marker 4"}
  ];

  return {
    all: function() {
      return markers;
    },
    get: function(markerId) {
      // Simple index lookup
      return markers[markerId];
    }
  }
})

;