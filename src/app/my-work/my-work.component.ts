import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {
  projects = [
    {
      image: 'assets/img/port.png',
      title: 'Portfolio',
      description: 'My Portfolio built with Angular',
      type: 'Angular',
      link: 'http://f01463b4@feros-djahani.developerakademie.net/Portfolio/index.html',
      git:'https://github.com/FerosDjahani/Portfolio-Feros'
    },
    {
      image: 'assets/img/sharky.png',
      title: 'Sharky',
      description: 'JavaScript based game (OOP)',
      type: 'Javascript',
      link: 'http://f01463b4@feros-djahani.developerakademie.net/SHARKY/index.html',
      git:'https://github.com/FerosDjahani/Sharky'
    },
    {
      image: 'assets/img/pollo.png',
      title: 'El Pollo Loco',
      description: 'JavaScript based game (OOP)',
      type: 'Javascript',
      link: 'http://f01463b4@feros-djahani.developerakademie.net/el%20pollo%20loco/index.html',
      git:'https://github.com/FerosDjahani/El-Pollo-Loco'
    },
    {
      image: 'assets/img/fire.png',
      title: 'Ringoffire',
      description:
        'Angular based web app with Firebase (Multiplayer availible)',
      type: 'Angular',
      link: 'http://f01463b4@feros-djahani.developerakademie.net/RingOfFire/index.html',
      git:'https://github.com/FerosDjahani/RingofFire'
    },
    {
      image: 'assets/img/join.png',
      title: 'Join',
      description: 'Join is a kanban built with JavaScript (Group Project)',
      type: 'Javascript',
      link: 'https://feros-djahani.developerakademie.net/JOIN/index.html',
      git:'https://github.com/FerosDjahani/JOIN'
    },
    {
      image: 'assets/img/pokedex.png',
      title: 'Pokedex',
      description: 'A Pokedex built with the PokeApi and JavaScript',
      type: 'Javascript',
      link: 'http://f01463b4@feros-djahani.developerakademie.net/Pokedex/index.html',
      git:'https://github.com/FerosDjahani/Pokedex'
    },
    {
      image: 'assets/img/pixta.png',
      title: 'Instagram Clone',
      description:
        'A simple Instagram clone with a comment function',
      type: 'Javascript',
      link: 'http://f01463b4@feros-djahani.developerakademie.net/instagram/insta.html',
      git:'https://github.com/FerosDjahani/Pixtragram'
    },
    {
      image: 'assets/img/lifer.png',
      title: 'Lieferking Clone',
      description: 'A clone of the popular food delivery app',
      type: 'Javascript',
      link: 'http://f01463b4@feros-djahani.developerakademie.net/lieferking/lieferking.html',
      git:'https://github.com/FerosDjahani/Lieferking'
    },
    {
      image: 'assets/img/quizz.png',
      title: 'Quizapp',
      description: 'A simple quiz game built with Javascript',
      type: 'JavaScript',
      link: 'http://f01463b4@feros-djahani.developerakademie.net/quiz%20app/QuizApp.html',
      git:'https://github.com/FerosDjahani/QuizApp'
    },
    {
      image: 'assets/img/kochwelt.png',
      title: 'Kochwelt Clone',
      description: 'A clone of the popular food recipe app',
      type: 'JavaScript',
      link: 'https://github.com/FerosDjahani/Kochwelt',
    },
  ];

  filterdProjects = this.projects;
  constructor() { }

  ngOnInit(): void {}
  showAll() {
    document.getElementById('all-btn').classList.add('selected');
    document.getElementById('angular-btn').classList.remove('selected');
    document.getElementById('javascript-btn').classList.remove('selected');
    this.filterdProjects = this.projects;
  }
  showAngular() {
    document.getElementById('all-btn').classList.remove('selected');
    document.getElementById('angular-btn').classList.add('selected');
    document.getElementById('javascript-btn').classList.remove('selected');
    this.filterdProjects = this.projects.filter((p) => p.type == 'Angular');
  }
  showJavascript() {
    document.getElementById('all-btn').classList.remove('selected');
    document.getElementById('angular-btn').classList.remove('selected');
    document.getElementById('javascript-btn').classList.add('selected');
    this.filterdProjects = this.projects.filter((p) => p.type == 'Javascript');
  }
}


