import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from
'angularfire2/firestore';
import { Dev } from '../models/Dev';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DevService {
   devCollection: AngularFirestoreCollection<Dev>;
   devs: Observable<Dev[]>;

  constructor(public lax: AngularFirestore) { 
    // this.devs = this.lax.collection('developers').valueChanges();
    this.devCollection = this.lax.collection('developers');
    this.devs = this.devCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Dev;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getDevelopers(){
    return this.devs;
  }

  addDeveloper(dev: Dev){
    this.devCollection.add(dev);
  }
}


