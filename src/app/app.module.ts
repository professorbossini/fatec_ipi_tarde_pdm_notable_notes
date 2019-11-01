import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NoteService } from './note.service';

import {AngularFireModule} from 'angularfire2'
import {AngularFireDatabaseModule} from 'angularfire2/database'

const firebaseConfig = {
  apiKey: "AIzaSyA8rPL_s392aBP30C08XNUlcHCAjShkSLg",
  authDomain: "fatec-ipi-tarde-notable-c5406.firebaseapp.com",
  databaseURL: "https://fatec-ipi-tarde-notable-c5406.firebaseio.com",
  projectId: "fatec-ipi-tarde-notable-c5406",
  storageBucket: "fatec-ipi-tarde-notable-c5406.appspot.com",
  messagingSenderId: "949990773308",
  appId: "1:949990773308:web:557336cae2e57c2f22a939",
  measurementId: "G-082L5E5YJJ"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NoteService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
