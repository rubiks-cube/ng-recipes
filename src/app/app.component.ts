import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
     apiKey: 'AIzaSyCrmvfy4hkdZZ77FBmQsQ1k648g-ER1YfU',
    authDomain: 'recipe-app-3393.firebaseapp.com'
    });
  }

}
