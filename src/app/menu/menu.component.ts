import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public router: Router) {}
  public home: boolean = true;
  ngOnInit(): void {}

  
  isHomeRoute() {
    return this.router.url === '/';
  }
  toMySkills() {
    document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
  }
  toMyWork() {
    document.getElementById('my-work').scrollIntoView({ behavior: 'smooth' });
  }
  toAboutMe() {
    document.getElementById('about-me').scrollIntoView({ behavior: 'smooth' });
  }
  menuOnClick() {
    document.getElementById('menu-bar').classList.toggle('change');
    document.getElementById('nav').classList.toggle('change');
  }


}

