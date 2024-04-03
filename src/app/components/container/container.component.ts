import { AfterContentChecked, Component, HostListener, Renderer2 } from '@angular/core';

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
        
        intersectView(e: any) {
                e.classList.add('show');
         }
}
