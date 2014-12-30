/*=========================================
=            Get Object By Key            =
=========================================*/
getObjByKey = function(key, value, object){
    var out = false;
    angular.forEach(object, function(objValue, objKey){
        if( objValue[key] == value){
            out = objValue;
        }
    });

    if(false === out){
    	console.log("getObjByKey Failed: ", key, value, object);
    }

    return out;
};