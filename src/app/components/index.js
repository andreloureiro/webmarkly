import angular from 'angular';
import { MainModule } from './main';
import { SettingsModule } from './settings';

export const Components = angular.module('Components', [
  MainModule.name,
  SettingsModule.name
]);
