import { Component, OnInit } from '@angular/core';
import { Osake } from 'src/app/interfaces/osake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  osake: Osake = {
    name: 'Beer',
    URL: 'assets/images/Drink-1.png',
    level: 0,
    drinked: 2

  }

  constructor() { }

  ngOnInit(): void {
  }

}
