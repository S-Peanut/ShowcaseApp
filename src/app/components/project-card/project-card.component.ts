import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
@ViewChild('backdrop') public Backdrop : ElementRef | undefined;
@ViewChild('backdropBtn') public backdropBtn : ElementRef | undefined;

@Input () reverse: boolean = false;
@Input () skeleton: boolean = false;
                 
        @HostListener('document:click', ['$event'])  
        backdropToggle(e: any) {
                e.stopPropagation(); 
                let hidden = this.Backdrop?.nativeElement.classList.contains('hide');
        
                if (hidden && e.target === this.backdropBtn?.nativeElement) {
                        this.Backdrop?.nativeElement.classList.remove('hide');
                        this.backdropBtn?.nativeElement.classList.add('hide-backdrop-btn');

                }  
                if (!hidden && e.target !== this.Backdrop?.nativeElement){
                        this.Backdrop?.nativeElement.classList.add('hide');
                        this.backdropBtn?.nativeElement.classList.remove('hide-backdrop-btn');
                }    
        }
}
