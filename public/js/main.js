angular.module('alurapic', ['directivasAlurapic', 'ngAnimate', 'ngRoute'])
.config(function($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $routeProvider.when('/fotos', {
        templateUrl : 'parciais/principal.html',
        controller: 'FotosController'
    });

    $routeProvider.when('/', {
        redirectTo: '/fotos'
    });

    $routeProvider.when('/fotos/new', {
        templateUrl: "parciais/new.html",
        controller: 'FotoController'
    });

    $routeProvider.otherwise({
        templateUrl : 'parciais/not-found.html'
    });
});
