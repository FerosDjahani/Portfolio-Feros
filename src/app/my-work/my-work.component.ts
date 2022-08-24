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
    },
    {
      image: 'assets/img/sharky.png',
      title: 'Sharky',
      description: 'JavaScript based game (OOP)',
      type: 'Javascript',
      link: 'http://f01463b4@feros-djahani.developerakademie.net/SHARKY/index.html',
    },
    {
      image: 'assets/img/pollo.png',
      title: 'El Pollo Loco',
      description: 'JavaScript based game (OOP)',
      type: 'Javascript',
      link: 'http://f01463b4@feros-djahani.developerakademie.net/el%20pollo%20loco/index.html',
    },
    {
      image: 'assets/img/fire.png',
      title: 'Ringoffire',
      description:
        'Angular based web app with Firebase (Multiplayer availible)',
      type: 'Angular',
      link: 'http://f01463b4@feros-djahani.developerakademie.net/RingOfFire/index.html',
    },
    {
      image: 'assets/img/join.png',
      title: 'Join',
      description: 'Join is a kanban built with JavaScript (Group Project)',
      type: 'Javascript',
      link: 'http://feros-djahani.developerakademie.net/JOIN/index.html',
    },
    {
      image: 'assets/img/pokedex.png',
      title: 'Pokedex',
      description: 'A Pokedex built with the PokeApi and JavaScript',
      type: 'Javascript',
      link: 'http://f01463b4@feros-djahani.developerakademie.net/Pokedex/index.html',
    },
    {
      image: 'assets/img/pixta.png',
      title: 'Instagram Clone',
      description:
        'A simple Instagram clone with a comment function',
      type: 'Javascript',
      link: 'http://f01463b4@feros-djahani.developerakademie.net/instagram/insta.html',
    },
    {
      image: 'assets/img/lifer.png',
      title: 'Lieferking Clone',
      description: 'A clone of the popular food delivery app',
      type: 'Javascript',
      link: 'http://f01463b4@feros-djahani.developerakademie.net/lieferking/lieferking.html',
    },
    {
      image: 'assets/img/quizz.png',
      title: 'Quizapp',
      description: 'A simple quiz game built with Javascript',
      type: 'JavaScript',
      link: 'http://f01463b4@feros-djahani.developerakademie.net/quiz%20app/QuizApp.html',
    },
    {
      image: 'assets/img/kochwelt.png',
      title: 'Kochwelt Clone',
      description: 'A clone of the popular food recipe app',
      type: 'JavaScript',
      link: 'http://f01463b4@feros-djahani.developerakademie.net/Feros%20Aktualisiert%20Kochwelt/index.html',
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

