'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.module('phoneList').component('phoneList', {
  templateUrl: 'phone-list/phone-list.template.html',
  // Use an inline annotation where, instead of just providing the function, you provide an array.
  // This array contains a list of the service names, followed by the function itself as the last item of the array
  controller: ['$http',
    function PhoneListController($http) {
      var self = this;
      self.orderProp = 'age';

      $http.get('phones/phones.json').then(function (response) {
        self.phones = response.data;
      });
    }
  ]
});
