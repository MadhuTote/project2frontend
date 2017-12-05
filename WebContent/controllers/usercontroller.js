/**
 * User Controller
 */
app.controller('UserController',function(UserService,$scope,$rootScope,$location,$cookieStore){
	$scope.user={}
	
	if($rootScope.currentUser!=undefined){
	UserService.getUser().then(function(response){
		$scope.user=response.data;
	},function(response){
		console.log(response.status)
		$location.path('/home')
	})
	}
	$scope.registerUser=function(){
		UserService.registerUser($scope.user).then(function(response){
			alert('Registered successfully.. Please login.. ')
			console.log($scope.message)
			$location.path('/login')
		},function(response){
			console.log(response.status)
			console.log(response.data)
			$scope.error=response.data
			$location.path('/register')
		})
	}
	$scope.login=function(){
		UserService.login($scope.user).then(function(response)
				{
			$rootscope.currentUser=responsedata
			$cookieStore.put('currentUser',response.data)
			$location.path('/home')
				},function(response){
					if(response.data==401){
						$scope.error=response.data	
						$location.path('/login')
					}
				})
	}
})

	
	
	
	