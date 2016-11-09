'use strict';

/**
 * @ngdoc function
 * @name referralApp.controller:FormCtrl
 * @description
 * # FormCtrl
 * Controller of the referralApp
 */

 //For tile select animation
function set_tile(div) {
    var className = div.getAttribute("class");
    if(className=="tile") 
    {
        div.className = "selected";
    }
    else
    {
        div.className = "tile";
    }
}



angular.module('referralApp')
  .controller('FormCtrl', function ($scope, $routeParams, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if($routeParams.referee_index != 0) //Shows referee box only if index!=0 (if index = 0, then user was not referred by anyone)
    	$scope.showreferee = true;     //referee_index is the URL parameter - index of referee
    //Name corressponding to referee_index is obtained from server and stored as $scope.referee_name
    $scope.sum = 0; //sum of tiles  
    $scope.on_submit = function() { //function executed on submitting the form
    	$scope.set_tile_value();   //calculates sum of tiles and stores in $scope.sum
    	document.getElementById("submit").className = 'ng-hide';   //hides submit button
    	$scope.showlink = true;    //reveals link to share
    
    //Current number of users has to be retrieved from server, incremented to produce index of current user
    //Form details (index, name, sum, referred by(url parameter)) have to be sent to server for storage
	//Link is generated with current index as $scope.index

    //$routeParams.referee_index, $scope.referee_name and $scope.index are used in the form.html view.

    }
    $scope.set_tile_value = function(){ //function to calculate sum of tiles
    	var class_name = (document.getElementById("tile1")).className;
    	if(class_name == "selected")    	
	    {
	    	$scope.sum = $scope.sum + 1;
	    }
	    class_name = (document.getElementById("tile2")).className;
    	if(class_name == "selected")    	
	    {
	    	$scope.sum = $scope.sum + 2;
	    }
	    class_name = (document.getElementById("tile3")).className;
    	if(class_name == "selected")    	
	    {
	    	$scope.sum = $scope.sum + 3;
	    }
	    class_name = (document.getElementById("tile4")).className;
    	if(class_name == "selected")    	
	    {
	    	$scope.sum = $scope.sum + 4;
	    }
	    class_name = (document.getElementById("tile5")).className;
    	if(class_name == "selected")    	
	    {
	    	$scope.sum = $scope.sum + 5;
	    }
	    class_name = (document.getElementById("tile6")).className;
    	if(class_name == "selected")    	
	    {
	    	$scope.sum = $scope.sum + 6;
	    }
	    class_name = (document.getElementById("tile7")).className;
    	if(class_name == "selected")    	
	    {
	    	$scope.sum = $scope.sum + 7;
	    }
	    class_name = (document.getElementById("tile8")).className;
    	if(class_name == "selected")    	
	    {
	    	$scope.sum = $scope.sum + 8;
	    }
	    class_name = (document.getElementById("tile9")).className;
    	if(class_name == "selected")    	
	    {
	    	$scope.sum = $scope.sum + 9;
	    }
	}   
});

