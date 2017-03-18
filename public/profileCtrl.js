angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService, $http ) {


	$scope.currentUser = friendService.currentUser;
	$scope.friends = friendService.currentUser.friends;
	console.log('xxx', $scope.currentUser)



	// FIX ME - assign values to $scope.currentUser and $scope.friends

  // $scope.currentUser = friendService.currentUser;
  // console.log(response.currentUser)

});
