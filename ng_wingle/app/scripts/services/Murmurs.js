'use strict';

angular.module('ngWingleApp')
  .factory('Murmurs', function (Murmurs_resource) {
      var murmurs = Murmurs_resource.murmurs();
      return {
          getMurmurs: function() {
              return murmurs;
          }
      };
  });
