import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

/*  constructor(public http: Http) {
    console.log('Hello FirebaseProvider Provider');
  }
*/
constructor(public afd: AngularFireDatabase) { }

getStaffs() {
  return this.afd.list('/staffs/');
}

addStaff(name) {
  this.afd.list('/staffs/').push(name);
}

removeStaff(id) {
  this.afd.list('/staffs/').remove(id);
}

}
