/**
 * Angular Js Module


 */

var app=angular.module("app",['ngRoute','ngCookies'])
app.config(function($routeProvider){
	$routeProviderr
	.when('/register',{
		templateUrl:'views/registerform.html',
		controller:'UserController'
	})
	
	.when('/login',{
		templateUrl:'views/login.html',
		controller:'UserController'
	})
	.otherwise({
		templateUrl:'views/home.html',
		controller:'UserController'
	    
	})
})
app.run(function($rootScope,$cookieStore,UserService,$location){
	if($rootScope.currentUser==undefined)
		$rootScope.currentUser=$cookieStore.get("currentUser")
		
		$rootScope.logout=function(){
        UserService.logout().then(function(response){
        	$rootScope.logoutSuccess="Loggedout Successfully.."
        		delete $rootScope.currentUser
        		$cookieStore.remove("currentUser")
        		$location.path('/login');
        },function(response){
        	$scope.error=response.data
        	$location.path('/login')
        })		
	}		
})

