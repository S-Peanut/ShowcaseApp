import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
        constructor(private renderer: Renderer2) {}

        preventScroll(e:any,id: string) {
                // e.preventDefault();
                const accordionItem = document.getElementById(id);
                let scrollTop = accordionItem?.getBoundingClientRect().top
                this.renderer.setStyle(accordionItem, 'scroll-margin-top', `${scrollTop}px`);
        }
}

