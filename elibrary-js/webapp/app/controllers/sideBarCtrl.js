(function () {
    'use strict';

    angular.module('App')
        .controller('SidebarCtrl', SidebarCtrl);


    function SidebarCtrl($location){
        var vm = this;

        vm.location = $location;

        vm.isActive = function(location) {
            return (location === $location.path());
        }
    }


}());