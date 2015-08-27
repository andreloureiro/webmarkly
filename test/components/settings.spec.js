import { SettingsComponent, SettingsController, SettingsModule } from '../../src/app/components/settings';
import mocks from 'angular-mocks';

describe('Settings View', () => {

  describe('Module', () => {

    it('should have SettingsModule name',
        () => expect(SettingsModule.name).toBe('SettingsModule'))

  });

  describe('Controller', () => {
    let Controller = new SettingsController();

    it('should be defined',
        () => expect(Controller).toBeDefined());

    it('should have a Title property named "Settings"',
        () => {
          expect(Controller.title).toBeDefined();
          expect(Controller.title).toEqual('Settings');
        });

  });

  describe('Component', () => {
    let Component = SettingsComponent();

    it('should be defined',
        () => expect(Component).toBeDefined());

    it('should have SettingsController',
        () => {
          expect(Component.controller).toBeDefined();
          expect(Component.controller).toBe(SettingsController);
        });

    it('should have a Controller instance named "settings"',
        () => {
          expect(Component.controllerAs).toBeDefined();
          expect(Component.controllerAs).toBe('settings');
        });

    it('should have bindToController: true',
        () => expect(Component.bindToController).toBeTruthy());
  })

});
