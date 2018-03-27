import { Injectable } from '@angular/core';

@Injectable()
export class TehnologiesService {

  constructor() { }

  getTehnologies() {
    return [
      {'id': 1, 'tehnology': 'Angular', 'version': 5},
      {'id': 2, 'tehnology': 'React', 'version': 5},
      {'id': 3, 'tehnology': 'es6', 'version': 5},
      {'id': 4, 'tehnology': 'Angularjs', 'version': 1.75},
      {'id': 5, 'tehnology': 'nodejs', 'version': 9}
    ];
  }

}
