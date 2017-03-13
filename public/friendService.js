angular.module('userProfiles')
.service('friendService', function( $http ) {


    this.login = function( user ) {
      /* FIX ME */
      return $http({
        method: 'POST',
        url: '/api/login',
        data: {name: user.name, password: user.password}
      })
    };

    this.getFriends = function() {
    	/* FIX ME */
    };

});
