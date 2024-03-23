import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
mobileNavOn = false;

toggleMenu() {
        if(this.mobileNavOn) {
                this.mobileNavOn = false;
        } else {
                this.mobileNavOn = true;
        }
}
}
