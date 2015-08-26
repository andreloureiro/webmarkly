import angular from 'angular';
import uiRouter from 'angular-ui-router';

const MainComponent = () => {
  return {
    controller: MainController,
    controllerAs: 'main',
    bindToController: true,
    scope: {},
    template: `
      <h1>{{ main.title }}</h1>
      <a ui-sref="settings">settings</a>
    `
  }
}

class MainController {
  constructor() {
    this.title = 'Webmarkly';
  }
}
MainController.$inject = []

const MainModule = angular.module('MainModule', [
  uiRouter
])
  .directive('mainComponent', MainComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/main');

    $stateProvider
      .state('main', {
        url: '/main',
        template: '<main-component></main-component>'
      })
  });

export { MainComponent, MainController, MainModule };
