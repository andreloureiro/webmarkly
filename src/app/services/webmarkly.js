import angular from 'angular';

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

  add(item) {
    this.list.push(item);
  }

  remove(id) {
    this.list = this.list.filter(item => item.id != id);
  }

}

const WebmarklyModule = angular.module('WebmarklyModule', [])
  .service('WebmarklyService', WebmarklyService);

export { WebmarklyService, WebmarklyModule };
