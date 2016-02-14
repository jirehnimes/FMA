angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



    .state('main', {
      url: '/main',
      templateUrl: 'templates/main.html',
      controller: 'mainCtrl'
    })





    .state('about', {
      url: '/about',
      templateUrl: 'templates/about.html',
      controller: 'aboutCtrl'
    })





    .state('category', {
      url: '/category',
      templateUrl: 'templates/category.html',
      controller: 'categoryCtrl'
    })





    .state('identityTheft', {
      url: '/identitytheft',
      templateUrl: 'templates/identityTheft.html',
      controller: 'identityTheftCtrl'
    })





    .state('cyberBullying', {
      url: '/cyberbullying',
      templateUrl: 'templates/cyberBullying.html',
      controller: 'cyberBullyingCtrl'
    })





    .state('onlineHarassment', {
      url: '/onlineharassment',
      templateUrl: 'templates/onlineHarassment.html',
      controller: 'onlineHarassmentCtrl'
    })





    .state('mypopover', {
      url: '/mypopover',
      templateUrl: 'templates/my-popover.html',
      controller: 'popoverCtrl'
    })
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/main');

});
