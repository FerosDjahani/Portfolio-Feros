import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {


  skills = [
    {
      icon: './assets/img/JavaScript.png',
      title: 'JavaScript',
    },
    {
      icon: './assets/img/angular.png',
      title: 'Angular',
    },
    {
      icon: './assets/img/htmlcss.png',
      title: 'HTML / (S)CSS',
    },
    {
      icon: './assets/img/scrum.png',
      title: 'SCRUM',
    },
    {
      icon: './assets/img/git.png',
      title: 'Git',
    },
    {
      icon: './assets/img/designthinking.png',
      title: 'Design Thinking',
    },
    {
      icon: './assets/img/api.png',
      title: 'Rest API',
    },
    {
      icon: './assets/img/testautomation.png',
      title: 'Test Automation',
    },
    {
      icon: './assets/img/databases.png',
      title: 'Databases',
    },
  ];


  constructor() { }

  ngOnInit(): void {
    Aos.init();
  }

}
