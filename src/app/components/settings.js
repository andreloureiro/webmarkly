import angular from 'angular';
import uiRouter from 'angular-ui-router';

const SettingsComponent = () => {
  return {
    controller: SettingsController,
    controllerAs: 'settings',
    bindToController: true,
    scope: {},
    template: `
      <h1>{{ settings.title }}</h1>
      <a ui-sref="main">back</a>
    `
  }
}

class SettingsController {
  constructor() {
    this.title = 'Settings';
  }
}
SettingsController.$inject = [];

const SettingsModule = angular.module('SettingsModule', [
  uiRouter
])
  .directive('settingsComponent', SettingsComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('settings', {
        url: '/settings',
        template: '<settings-component></settings-component>'
      });
  })

export { SettingsComponent, SettingsController, SettingsModule };
