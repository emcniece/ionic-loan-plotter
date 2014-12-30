angular.module('starter.services', [])

.factory('Markers', function() {

  // Could be pulled from Deals, except with geo data
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

.factory('Deals', function(){

  var deals = [
    {id: 0, userId: 1, type: "prime", amount: 10342.32, title: "2010 Mazda 3 GS"},
    {id: 1, userId: 0, type: "sub-prime", amount: 10343.32, title: "2011 Mazda 3 GS"},
    {id: 2, userId: 2, type: "prime", amount: 10344.32, title: "2012 Mazda 3 GS"},
    {id: 3, userId: 1, type: "cash", amount: 10345.32, title: "2013 Mazda 3 GS"},
    {id: 4, userId: 0, type: "prime", amount: 10346.32, title: "2014 Mazda 3 GS"},
    {id: 5, userId: 2, type: "sub-prime", amount: 10347.32, title: "2015 Mazda 3 GS"},
    {id: 6, userId: 1, type: "cash", amount: 10348.32, title: "2016 Mazda 3 GS"}
  ];

  return {
    all: function(){
      return deals;
    },
    get: function(dealId){
      return deals[dealId];
    },
    getById: function(dealId){
      return getObjByKey('id', dealId, deals);
    },
    getByUser: function(userId){
      var tmpDeals = [];
      angular.forEach(deals, function(deal){
        if(userId == deal.userId) tempDeals.push(deal);
      });
      return tmpDeals;
    }
  }
}) // Deals
;