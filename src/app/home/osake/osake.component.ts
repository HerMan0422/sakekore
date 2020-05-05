import { Component, OnInit, Input } from '@angular/core';
import { Osake } from 'src/app/interfaces/osake';


@Component({
  selector: 'app-osake',
  templateUrl: './osake.component.html',
  styleUrls: ['./osake.component.scss']
})
export class OsakeComponent implements OnInit {

  @Input() osake: Osake;

  constructor() { }

  ngOnInit(): void {
  }

  getDrinkedPercentage(): number{
    return this.osake.drinked / 10 * 100;
  }
}
