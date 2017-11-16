import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChecklistPage } from '../checklist/checklist';
import { AngularFireDatabase, Observable } from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  //public departments : Observable<any[]>;

  constructor(public navCtrl: NavController, private af: AngularFireDatabase) {
    //this.staffs = this.af.list('/staffs').valueChanges();
  }

  // pickDept(dept: string) {
  //   this.departments = this.af.list('departments',
  //   ref => ref.orderByChild('dept').equalTo(dept)).valueChanges();
  // }

  nextpage() {
    this.navCtrl.push(ChecklistPage);
  }

}
