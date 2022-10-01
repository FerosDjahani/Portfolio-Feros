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
    alert('Message sent!');
  }


  borderchange1(){
    document.getElementById('name').classList.remove('inside');
    document.getElementById('name').classList.add('active');
  }
  borderchange2(){
    document.getElementById('e-mail').classList.remove('inside');
    document.getElementById('e-mail').classList.add('active');
  }
  borderchange3(){
    document.getElementById('message').classList.remove('inside');
    document.getElementById('message').classList.add('active');
  }
}
