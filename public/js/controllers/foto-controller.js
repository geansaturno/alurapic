angular.module('alurapic').controller('FotoController', function($scope, $http){

    $scope.foto = {};
    $scope.msg = '';

    $scope.salvar = function(){

        if($scope.formulario.$valid){
            $http.post('/v1/fotos', $scope.foto)
            .success(function(){
                $scope.foto = {};
                $scope.formulario.$submitted = false;
                $scope.msg = 'Nova imagem incluida com sucesso';
            })
            .error(function(erro){
                console.log(erro);
                $scope.msg = 'Falaha na inclusão da imagem';
            });
        }
    };
});
