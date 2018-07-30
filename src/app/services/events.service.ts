import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from
'angularfire2/firestore';
import { Event } from '../models/event';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventsService {
   eventCollection: AngularFirestoreCollection<Event>;
   events: Observable<Event[]>;

  constructor(public tax: AngularFirestore) { 
    this.events = this.tax.collection('events').valueChanges();
  }

  getEvents(){
    return this.events;
  }
}