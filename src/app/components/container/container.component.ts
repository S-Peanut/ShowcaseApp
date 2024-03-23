import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
scrollTop = 0;
hideNav = false;   

@HostListener('window:scroll', ['$event']) 
onScroll() {
        this.hideNav = this.scrollTop < window.scrollY;
        this.scrollTop = window.scrollY;
        }
}
