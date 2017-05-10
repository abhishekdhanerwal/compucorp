describe('App.js' , function () {

    var $routeProvider;
    var $locationProvider;


    beforeEach(angular.mock.module('ngRoute'));

    beforeEach(function () {
        module(function(_$locationProvider_) {
            $locationProvider = _$locationProvider_;
            spyOn($locationProvider, 'html5Mode');
        });
        module(function(_$routeProvider_) {
            $routeProvider = _$routeProvider_;
            spyOn($routeProvider, 'when').and.callThrough();;
            spyOn($routeProvider, 'otherwise');
        });
        module('musicApp');

        inject();
    });

    it('should run location provider' , function () {

        expect($locationProvider.html5Mode)
            .toHaveBeenCalledWith(true);
    });

    it('should run route provider' , function () {
        expect($routeProvider.otherwise).toHaveBeenCalled();
    });

});
