angular.module('directivasAlurapic', [])
.directive('painelFotos', function(){
    var ddo = {};

    ddo.restrict = "AE";
    ddo.transclude = true;

    ddo.scope = {
        titulo: '@titulo'
    };

    ddo.templateUrl = 'js/diretivas/painel-fotos.html';

    return ddo;
})
.directive('minhaFoto', function(){

    var ddo = {};

    ddo.restrict = 'AE';
    ddo.scope = {
        url : '@',
        titulo: '@'
    };

    ddo.templateUrl = 'js/diretivas/minha-foto.html';

    return ddo;
});
