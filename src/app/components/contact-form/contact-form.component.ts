import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit{
FormData: FormGroup = new FormGroup({});

        constructor(private builder: FormBuilder) {}

        ngOnInit(): void {
                this.FormData = this.builder.group({
                       Fullname: new FormControl('', [Validators.required]),
                       Email: new FormControl('', [Validators.email, Validators.required]),
                       Phone: new FormControl('', [Validators.required]),
                       Comment: new FormControl('', [Validators.required])
                })
        }
}
