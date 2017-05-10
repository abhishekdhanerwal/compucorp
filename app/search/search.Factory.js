(function () {
    'use strict';
    angular
        .module('musicApp.search')
        .factory('searchMusicFactory', searchMusicFactory);

    searchMusicFactory.$inject = ['$http'];
    function searchMusicFactory($http) {
        var service = {};

        service.getData = function (name , type) {
            var promise = $http.get("https://api.spotify.com/v1/search?q="+name+"&type="+type)
                .then(
                    function (data) {
                        return data;
                    },
                    function (errors) {
                        return errors;
                    });
            return promise;
        };
        return service;
    };
})();
