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
        template: "<h1 class='text-center'>Nova Imagem</h1>"
    });

    $routeProvider.otherwise({
        templateUrl : 'parciais/not-found.html'
    });
});
