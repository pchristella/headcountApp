import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChecklistPage } from '../pages/checklist/checklist';
//import { SummaryPage } from '../pages/summary/summary';


import { AngularFireDatabase, AngularFireDatabaseModule, Observable } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
//import { FirebaseProvider } from '../providers/firebase/firebase';

// export const firebaseConfig = {
//   apiKey: "AIzaSyBRVDn_sqHocknO4nSF2Pfy6VDjnOvGn3s",
//   authDomain: "checklist-01.firebaseapp.com",
//   databaseURL: "https://checklist-01.firebaseio.com",
//   projectId: "checklist-01",
//   storageBucket: "checklist-01.appspot.com",
//   messagingSenderId: "887356109663"
//   };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChecklistPage,
    //SummaryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCr6A3Z5mUvPB-ffIdbpx1l3zDyJPInFfI",
      authDomain: "headcount-checklist.firebaseapp.com",
      databaseURL: "https://headcount-checklist.firebaseio.com",
      projectId: "headcount-checklist",
      storageBucket: "headcount-checklist.appspot.com",
      messagingSenderId: "197178357914"
    }),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChecklistPage,
    //SummaryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireDatabase
  ]
})
export class AppModule {}
