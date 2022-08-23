import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {
  images = ['bg1.jpg'];
  currentImage = 0;
  showImage = true;
  constructor() { }

  ngOnInit(): void {
  }

}
