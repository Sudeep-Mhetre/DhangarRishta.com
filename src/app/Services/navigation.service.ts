import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  notify: Subject<string> = new Subject<string>();
  onNotify(event: any) {
          this.notify.next(event);
  }  
}
