import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { WebmarklyService } from '../services/webmarkly';

const MainComponent = () => {
  return {
    controller: MainController,
    controllerAs: 'main',
    bindToController: true,
    scope: {},
    template: `
      <h1>{{ main.title }}</h1>
      <input type="text" ng-keyup="main.handleInputKeyup($event)" autofocus />
      <ul>
        <li ng-repeat="item in main.list">{{ item.label }}</li>
      </ul>
      <a ui-sref="settings">settings</a>
    `
  }
}

class MainController {
  constructor($scope, WebmarklyService) {
    this.title = 'Webmarkly';
    this.list = WebmarklyService.list;
    this.handleInputKeyup = event => {
      if (event.keyCode == 13) {
        WebmarklyService.add(event.target.value);
        this.list = WebmarklyService.getAllByDomain(window.location.href);
        event.target.value = '';
      }
    }
  }
}
MainController.$inject = ['$scope', 'WebmarklyService'];

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
