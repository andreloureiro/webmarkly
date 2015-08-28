import angular from 'angular';

const STORAGE_LOCALSTORAGE = window.localStorage || null;
const STORAGE_EXTENSION = chrome.storage.sync || null;

const appStorage = STORAGE_LOCALSTORAGE;

class WebmarklyService {
  constructor() {
    this.list = [];
  }

  getAll() {
    return this.list;
  }

  getAllByDomain(domain) {
    return this.list.filter(item => item.domain == domain);
  }

  add(text) {
    this.list.unshift({
      id: Date.now().toString(36),
      label: text,
      position: window.scrollY,
      domain: window.location.href
    });
  }

  remove(id) {
    this.list = this.list.filter(item => item.id != id);
  }

}

const WebmarklyModule = angular.module('WebmarklyModule', [])
  .service('WebmarklyService', WebmarklyService);

export { WebmarklyService, WebmarklyModule };
