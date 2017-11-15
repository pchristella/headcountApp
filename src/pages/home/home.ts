import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChecklistPage } from '../checklist/checklist';
import { AngularFireDatabase, Observable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public staffs : Observable<any[]>;

  constructor(public navCtrl: NavController, private af: AngularFireDatabase) {
    //this.staffs = this.af.list('/staffs').valueChanges();
  }

  pickDept(dept: string) {
    this.staffs = this.af.list('staffs',
    ref => ref.orderByChild('dept').equalTo(dept)).valueChanges();
  }

  nextpage() {
    this.navCtrl.push(ChecklistPage);
  }

}
