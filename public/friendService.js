angular.module('userProfiles')
.service('friendService', function( $http ) {



    this.login = function( user ) {
      /* FIX ME */
      return $http({
        method: 'POST',
        url: '/api/login',
        data: {name: user.name, password: user.password}
      }).then((response) => {

        this.currentUser = response.data.currentUser;
        return response
      })
    };


    // this.getFriends = function(user) {
    // 	return $http({
    //     method: 'POST',
    //     url: '/api/login',
    //     data: {name: user.name, password: user.password}
    //   }).then(function(response){
    //     console.log('this is response.data', response.data);
    //     return response.data
    //   })
    // };
    //
    // this.currentUser = this.getFriends();

});
