import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Osake } from '../interfaces/osake';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OsakeService {

  constructor(
    private db: AngularFirestore,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  createOsake(osake: Osake){
    const id = this.db.createId();

    return this.db.doc(`osakes/${id}`).set(osake).then(() => {
      this.snackBar.open('お酒を登録しました', null, {
        duration: 2000
      });
      this.router.navigateByUrl('/');
    });
  }

  getOsake(userId: string): Observable<Osake>{
    return this.db
    .collection<Osake>('osakes', ref => ref.where('userId', '==', userId))
    .valueChanges()
    .pipe(
      map(osakes => {
        if (osakes.length){
        return osakes[0];
      } else {
        return null;
      }
    }
      )
    );
  }
}
