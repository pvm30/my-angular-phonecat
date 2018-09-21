'use strict';

function PhoneListController($http) {
  var self = this;
  self.orderProp = 'age';

  $http.get('phones/phones.json').then(function (response) {
    self.phones = response.data;
  });
}

//Create an $inject property on the controller function which holds an array of strings.
// Each string in the array is the name of the service to inject for the corresponding parameter
PhoneListController.$inject = ['$http'];

// Register `phoneList` component, along with its associated controller and template
angular.module('phoneList').component('phoneList', {
  templateUrl: 'phone-list/phone-list.template.html',
  controller: PhoneListController
});
