angular.module('alurapic')
	.controller('FotoController', function($scope, salvarFoto, recursoFoto, $routeParams) {

		$scope.foto = {};
		$scope.mensagem = '';

		if($routeParams.fotoId) {
			recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto) {
				$scope.foto = foto;
			}, function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível obter a foto';
			});
		}

        $scope.submeter = function() {

            if($scope.formulario.$valid){
                salvarFoto.salvar($scope.foto)
                .then(function(dados){
                    $scope.mensagem = dados.message;
                    $scope.formulario.$submitted = false;
                    if(dados.wasCreated){
                        $scope.foto = {};
                    }
                })
                .catch(function(dados){
                    $scope.mensagem = dados.message;
                });
            }
        };
	});
