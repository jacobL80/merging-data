/* 
    app.js
    Angular application for the address book challenge

    Add code here to create a new Angular application and controller.
    The array of employee objects is already in a global variable named 'pawneeEmployees'
*/

"use strict";

angular.module('AddressBook', [])
    .controller('AddressController', ['$scope', function($scope) {
        $scope.sortCol = 'lastName';
        $scope.employees = pawneeEmployees;
        var reverse = false;
    }]);