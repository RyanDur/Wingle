angular.module('ngWingleApp')
  .factory('Murmurs_resource', function($resource){
    return $resource("http://localhost\\:4567/murmurs");
  });
});

angular.module('ngWingleApp')
  .factory('Murmurs', function (Murmurs_resource) {
    var murmurs = Murmurs_resource.get();
    return {
      getMurmurs: function() {
        return murmurs;
      }
    };
});
