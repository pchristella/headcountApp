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


import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
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
      apiKey: "AIzaSyBRVDn_sqHocknO4nSF2Pfy6VDjnOvGn3s",
      authDomain: "checklist-01.firebaseapp.com",
      databaseURL: "https://checklist-01.firebaseio.com",
      projectId: "checklist-01",
      storageBucket: "checklist-01.appspot.com",
      messagingSenderId: "887356109663"
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
