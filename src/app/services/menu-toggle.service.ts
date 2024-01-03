import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuToggleService {

constructor() { }

private isMenuOpen = new BehaviorSubject<boolean>(false);
menuState = this.isMenuOpen.asObservable();

toggleMenu() {
  this.isMenuOpen.next(!this.isMenuOpen.value);
}

}
