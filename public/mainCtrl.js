angular.module('userProfiles')
.controller('mainCtrl', function( $scope, friendService, $location ) {

	$scope.login = function( user ) {
		friendService.login(user).then(function( response ) {
			if (response.data.userFound) {
				console.log('this is response.data', response.data)
				$location.path('/profile');
			} else {
				alert('user not found');
			}
		});
	}

});
