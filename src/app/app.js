import angular from 'angular';
import { Components } from './components';
import { Services } from './services';

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
  Components.name,
  Services.name
])
  .directive('webmarklyApp', AppComponent);
