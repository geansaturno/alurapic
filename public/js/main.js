angular.module('alurapic', ['directivasAlurapic', 'ngAnimate', 'ngRoute'])
.config(function($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        redirectTo: '/fotos'
    });

    $routeProvider.when('/fotos', {
        templateUrl : 'parciais/fotos.html',
        controller: 'FotosController'
    });

    $routeProvider.when('/foto/:fotoId', {
        templateUrl: "parciais/new.html",
        controller: 'FotoController'
    });

    $routeProvider.when('/fotos/new', {
        templateUrl: "parciais/new.html",
        controller: 'FotoController'
    });

    $routeProvider.otherwise({
        templateUrl : 'parciais/not-found.html'
    });
});
