angular.module('alurapic').controller('FotosController', function($scope, recursoFoto){

    $scope.fotos = [];
    $scope.filtro = '';
    $scope.msg = '';

    recursoFoto.query(function(fotos){
        $scope.fotos = fotos;
    }, function(error){
        console.log(error);
    });

    $scope.deletar = function(foto){
        recursoFoto.delete({fotoId: foto._id}, function(){
            var indice = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indice, 1);
            $scope.msg = foto.titulo + ' removido com sucesso';

        }, function(error){
            console.log(error);
            $scope.msg = 'Falha ao remover ' + foto.titulo;
        });
    };
});
