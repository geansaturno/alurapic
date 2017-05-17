angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams){

    $scope.foto = {};
    $scope.msg = '';

    var fotoId = $routeParams.fotoId;

    if(fotoId){
        $http.get('/v1/fotos/' + fotoId)
        .success(function(foto){
            $scope.foto = foto;
        })
        .error(function(error){
            console.log(error);
        });
    }

    $scope.salvar = function(){

        if(fotoId){
            $http.put('/v1/fotos/' + fotoId, $scope.foto)
            .success(function(){
                $scope.msg = $scope.foto.titulo + ' alterada com sucesso';
                $scope.formulario.$submitted = false;
            })
            .error(function(error){
                console.log(error);
                $scope.msg = 'Falha ao editar a imagem';
            });
        }

        if($scope.formulario.$valid){
            $http.post('/v1/fotos', $scope.foto)
            .success(function(){
                $scope.foto = {};
                $scope.formulario.$submitted = false;
                $scope.msg = 'Nova imagem incluida com sucesso';
            })
            .error(function(erro){
                console.log(erro);
                $scope.msg = 'Falha na inclusão da imagem';
            });
        }
    };
});
