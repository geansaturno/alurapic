angular.module('meusServicos', ['ngResource'])
	.factory('recursoFoto', function($resource) {

		return $resource('/v1/fotos/:fotoId', null, {
			'update' : {
				method: 'PUT'
			}
		});
	})
    .factory('salvarFoto', function(recursoFoto, $q, $rootScope){
        var service = {};

        var eventSave = 'fotoSalva';

        service.salvar = function(foto){
            return $q(function(resolve, reject){

                if(foto._id){
                    recursoFoto.update({fotoId: foto._id}, foto, function(){
                        $rootScope.$broadcast(eventSave);
                        resolve({
                            message: foto.titulo + ' alterada com sucesso',
                            wasCreated: false
                        });
                    }, function(error){
                        console.error(error);
                        reject({
                            messsage: 'Falha ao editar a imagem'
                        });
                    });

                } else {
                    recursoFoto.save(foto, function(){
                        $rootScope.$broadcast(eventSave);
                        resolve({
                            message: 'Nova imagem incluida com sucesso',
                            wasCreated: true
                        });
                    }, function(error){
                        console.error(error);
                        reject({
                            message: 'Falha na inclusão da imagem'
                        });
                    });
                }
            });
        };

        return service;
    });
