import angular from 'angular';
import {Components} from './components';

const AppComponent = () => {
  return {
    controller: AppController,
    controllerAs: 'app',
    bindToController: true,
    scope: {},
    template: `
      <ui-view></ui-view>
    `
  }
};

class AppController {
  constructor() {}
}

const AppModule = angular.module('Webmarkly', [
  Components.name
])
  .directive('webmarklyApp', AppComponent);
