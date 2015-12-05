(function(){
  angular.module('autotest',[])
  .factory('bigger', function(){
    return function(a, b){
      return a > b ;
    }
  })
})()
