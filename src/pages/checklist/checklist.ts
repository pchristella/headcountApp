import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
//import { SummaryPage } from '../summary/summary';

//import { FirebaseProvider } from './../../providers/firebase/firebase';
//import { AngularFireDatabase} from 'angularfire2/database';
import { AngularFireDatabase, Observable } from 'angularfire2/database';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
//import * as firebase from 'firebase';
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

  // staffsRef$: Observable<any[]>;
  // newStaff = '';
  //public movies : Observable<any[]>;
  public staffs : Observable<any[]>;

  constructor(private af: AngularFireDatabase,
              public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              private modalCtrl : ModalController,
              private platform  : Platform) {

    // this.staffsRef$ = db.list('/staffs').valueChanges();
  }

  ionViewDidLoad()
  {
     this.platform.ready()
     .then(() =>
     {
        //this.movies = this.af.list('/films').valueChanges();
        this.staffs = this.af.list('/staffs').valueChanges();
     });
  }

  // isPresent(){
  //   this.staffPresent = true;
  //
  // }

  addRecord()
  {
     let modal = this.modalCtrl.create('ModalsPage');
     modal.present();
  }

  // editMovie(movie)
  // {
  //    let params = { movie: movie, isEdited: true },
  //        modal  = this.modalCtrl.create('ModalsPage', params);
  //
  //    modal.present();
  // }
  //
  // deleteMovie(movie : any)
  // {
  //    this.movies.remove(movie);
  // }

  editStaff(staff)
  {
     let params = { staff: staff, isEdited: true },
         modal  = this.modalCtrl.create('ModalsPage', params);

     modal.present();
  }

  // deleteStaff(staff : any)
  // {
  //    this.staffs.remove(staff);
  // }


  // summary() {
  //   this.navCtrl.push(SummaryPage);
  // }
  //
  promptStaff() {
    let prompt = this.alertCtrl.create({
      title: 'Remark',
      message: "Insert last known location",
      inputs: [
        {
          name: 'remark',
          placeholder: 'Remark'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
}
