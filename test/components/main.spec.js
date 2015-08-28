import angular from 'angular';
import mocks from 'angular-mocks';
import uiRouter from 'angular-ui-router';
import { MainComponent, MainController, MainModule } from '../../src/app/components/main';

describe('Main View', () => {

  describe('Module', () => {

    it('should have a MainModule name',
        () => expect(MainModule.name).toEqual('MainModule'))
  });

  describe('Controller', () => {
    const Controller = new MainController();

    it('should have a Title',
        () => {
          expect(Controller.title).toBeDefined();
        });
  });

  describe('Component', () => {
    const Component = MainComponent();

    it('should have the MainController',
        () => expect(Component.controller).toBe(MainController));

    it('should use controllerAs',
        () => expect(Component.controllerAs).toBeDefined());

    it('should use "main" as controller instance',
        () => expect(Component.controllerAs).toEqual('main'));
  })
})
