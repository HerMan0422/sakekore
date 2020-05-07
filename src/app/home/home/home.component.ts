import { Component, OnInit } from '@angular/core';
import { Osake } from 'src/app/interfaces/osake';
import { OsakeService } from 'src/app/services/osake.service';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  osake: Osake = {
    osakeId: 1,
    name: 'Beer',
    level: 0,
    drinked: 2,
    userId: '1'
  };

  osake$: Observable<Osake> = this.osakeService.getOsake(
    this.authService.uid
  );

  constructor(
    private osakeService: OsakeService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
