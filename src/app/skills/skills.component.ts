import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {


  skills = [
    {
      icon: './assets/img/javascripts.png',
      title: 'JavaScript',
    },
    {
      icon: './assets/img/angular.png',
      title: 'Angular',
    },
   
    {
      icon: './assets/img/htmlcss.png',
      title: 'HTML',
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
      icon: './assets/img/typescript.png',
      title: 'TypeScript ',
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
      icon: './assets/img/htmlcss.png',
      title: ' (S)CSS',
    },
    {
      icon: './assets/img/react.png',
      title: 'React',
    },
    {
      icon: './assets/img/vue.png',
      title: 'Vue.js',
    },
  ];


  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
