angular.module('my-app')
  .controller('AppCtrl', function($scope, $mdDialog) {
    $scope.showAlert = showAlert;

    function showAlert() {
      // var parent = angular.element(document.getElementById('popupContainer'));
      var options = {
        title : 'This is title',
        textContent : 'This is contents',
        ok: 'Got it'
      },
      aleart = $mdDialog.alert(options);
      $mdDialog.show(aleart);
    }

  });
