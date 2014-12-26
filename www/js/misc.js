/*=========================================
=            Get Object By Key            =
=========================================*/
getObjByKey = function(key, value, object){
    console.log(key, value, object);
    var out = false;
    angular.forEach(object, function(objValue, objKey){
        if( objValue[key] == value){
            out = objValue;
        }
    });

    return out;
};