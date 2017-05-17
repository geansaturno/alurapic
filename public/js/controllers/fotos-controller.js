angular.module('alurapic').controller('FotosController', function($scope, $http){

    $scope.fotos = [];
    $scope.filtro = '';
    $scope.msg = '';

    $http.get('/v1/fotos')
    .success(function(fotos){
        $scope.fotos = fotos;
    })
    .error(function(error){
        console.log(error);
    });

    $scope.deletar = function(foto){
        $http.delete('/v1/fotos/' + foto._id)
        .success(function(){
            var indice = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indice, 1);
            $scope.msg = foto.titulo + ' removido com sucesso';
        })
        .error(function(erro){
            console.log(erro);
            $scope.msg = 'Falha ao remover ' + foto.titulo;
        });
    };
});
