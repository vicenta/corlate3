'use strict';

/**
 * @ngdoc overview
 * @name corlateApp
 * @description
 * # corlateApp
 *
 * Main module of the application.
 */
angular
  .module('corlateApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about-us', {
        templateUrl: 'views/about-us.html',
        controller: 'About-usCtrl',
        controllerAs: 'about-us'
      })
      .when('/services', {
        templateUrl: 'views/services.html',
        controller: 'ServicesCtrl',
        controllerAs: 'services'
      })
      .when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioCtrl',
        controllerAs: 'portfolio'
      })
      .when('/pricing', {
        templateUrl: 'views/pricing.html',
        controller: 'PricingCtrl',
        controllerAs: 'pricing'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl',
        controllerAs: 'blog'
      })
      .when('/contact-us', {
        templateUrl: 'views/contact-us.html',
        controller: 'ContactUsCtrl',
        controllerAs: 'contactUs'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
