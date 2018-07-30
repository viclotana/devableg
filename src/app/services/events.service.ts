import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from
'angularfire2/firestore';
import { Dev } from '../models/Dev';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventsService {
   devCollection: AngularFirestoreCollection<Dev>;
   devs: Observable<Dev[]>;

  constructor(public lax: AngularFirestore) { 
    this.devs = this.lax.collection('events').valueChanges();
  }

  getDevelopers(){
    return this.devs;
  }
}