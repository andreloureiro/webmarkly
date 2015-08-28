import angular from 'angular';
import * as store from 'lockr';

class WebmarklyService {
  constructor() {
    this.__domain = window.location.href;
    this.__initialize();
  }

  __initialize() {
    if (!!store.get('items_' + this.__domain)) {
      this.__updateList();
    } else {
      store.set('items_' + this.__domain, []);
    }
  }

  __updateList() {
    this.list = store.get('items_' + this.__domain);
  }

  getAll() {
    this.__updateList();
  }

  getAllByDomain(domain) {
    return this.list.filter(item => item.domain == domain);
  }

  add(text) {
    let itemsArr = store.get('items_' + this.__domain);
    itemsArr.unshift({
      id: Date.now().toString(36),
      label: text,
      position: window.scrollY,
      domain: window.location.href
    });
    store.set('items_' + this.__domain, itemsArr);
    this.__updateList();
  }

  remove(id) {
    let itemsArr = store.get('items_' + this.__domain);
    itemsArr = itemsArr.filter(item => item.id != id);
    store.set('items_' + this.__domain, itemsArr);
    this.__updateList();
  }

}

const WebmarklyModule = angular.module('WebmarklyModule', [])
  .service('WebmarklyService', WebmarklyService);

export { WebmarklyService, WebmarklyModule };
