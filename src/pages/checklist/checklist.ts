import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { AngularFireDatabase, Observable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
/**
 * Generated class for the ChecklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checklist',
  templateUrl: 'checklist.html',
})
export class ChecklistPage {

  public staffs : Observable<any[]>;

  constructor(private af: AngularFireDatabase,
              public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              private modalCtrl : ModalController,
              private platform  : Platform) {
  }

  ionViewDidLoad()
  {
     this.platform.ready()
     .then(() =>
     {
        this.staffs = this.af.list('/staffs').valueChanges();
     });
  }

  addRecord()
  {
     let modal = this.modalCtrl.create('ModalsPage');
     modal.present();
  }

  editStaff(staff)
  {
     let params = { staff: staff, isEdited: true },
         modal  = this.modalCtrl.create('ModalsPage', params);

     modal.present();
  }
}
