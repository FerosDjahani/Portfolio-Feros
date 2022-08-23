import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  submit() {
    document.getElementById('name').innerHTML = '';
    document.getElementById('e-mail').innerHTML = '';
    document.getElementById('message').innerHTML = '';
  }
}
