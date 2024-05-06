import { AfterViewInit, Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
        public scrollTop = 0;
        public hideNav = false; 
        
        @HostListener('window:scroll', ['$event']) 
        onScroll() {
                this.hideNav = this.scrollTop < window.scrollY;
                this.scrollTop = window.scrollY;
        }  
        
        intersectView(e: any) {
                e.classList.add('show');
        }
}
