/**
 * User Service
 */
app.factory('UserService',function($http){
	var BASE_URL="http://localhost:8084/project2middleware"
		var userService={}
	userService.registerUser=function(user){
		//http://localhost:8082/project2middleware         /register
  		//BASE_URL                                        +"/registeruser
		
		return $http.post(BASE_URL +"/registeruser",user)//4
	}
	userService.login=function(user){
        console.log(user)
        return $http.post(BASE_URL+"/login",user)
    }
	
	userService.logout=function(){
		return $http.get(BASE_URL+"/logout")
	}
})