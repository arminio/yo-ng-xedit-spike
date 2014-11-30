/* global User */
'use strict';

angular.module('mecoNgApp')
  .controller('MainCtrl', function ($scope) {

    $scope.users = [
      new User(1,'Armin', 'Keyvanloo'),
      new User(2,'Alex', 'Wibowo')
    ];

    $scope.removeUser = function (index) {
      console.log('removing index', index);
      this.users.splice(index, 1);
    };

    // add user
    $scope.addUser = function () {
      $scope.inserted = {
        id: $scope.users.length+1,
        firstName: '',
        lastName: ''
      };
      $scope.users.push($scope.inserted);
    };


    $scope.saveUser = function(data,id) {
      angular.extend(data, {id:id});
    };
  });
