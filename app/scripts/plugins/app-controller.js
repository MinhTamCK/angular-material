angular.module('my-app')
  .controller('AppCtrl', AppCtrl);

AppCtrl.$inject = ['$mdDialog'];
function AppCtrl($mdDialog) {

  var vm = this;
  console.log(vm);
  vm.showAlert = showAlert;

  function showAlert() {
    var options = {
        title: 'This is title',
        textContent: 'This is contents',
        ok: 'Got it'
      },
      aleart = $mdDialog.alert(options);
    $mdDialog.show(aleart);
  }

}
