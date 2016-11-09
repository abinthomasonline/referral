'use strict';

/**
 * @ngdoc overview
 * @name referralApp
 * @description
 * # referralApp
 *
 * Main module of the application.
 */
angular
  .module('referralApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/:referee_index/', {
        templateUrl: 'views/form.html',
        controller: 'FormCtrl',
        controllerAs: 'form'
        //referee_index is a routeParam (URL parameter)
        //referee_index = 0 for direct facebook link and is equal to index of user for shared links
      })
      .when('/about/view', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/0/'
      });
  });
