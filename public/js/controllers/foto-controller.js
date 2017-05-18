angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams, recursoFoto ){

    $scope.foto = {};
    $scope.msg = '';

    var fotoId = $routeParams.fotoId;

    if(fotoId){
        recursoFoto.get({fotoId: fotoId}, function(foto){
            $scope.foto = foto;
        }, function(error) {
            console.log(error);
        });
    }

    $scope.salvar = function(){

        if(fotoId){
            var foto = $scope.foto;
            delete foto._id;

            recursoFoto.update({fotoId: fotoId}, $scope.foto, function(){
                $scope.msg = $scope.foto.titulo + ' alterada com sucesso';
                $scope.formulario.$submitted = false;
            }, function(error){
                console.log(error);
                $scope.msg = 'Falha ao editar a imagem';
            });

        } else {
            if($scope.formulario.$valid){
                recursoFoto.save($scope.foto, function(){
                    $scope.foto = {};
                    $scope.formulario.$submitted = false;
                    $scope.msg = 'Nova imagem incluida com sucesso';

                }, function(error){
                    console.log(erro);
                    $scope.msg = 'Falha na inclusão da imagem';
                });
            }
        }
    };
});
