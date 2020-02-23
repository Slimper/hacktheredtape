import {Component} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HackTheRadTape';

  constructor(public fireAuth: AngularFireAuth) {
  }

  login() {
    this.fireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(console.log);
  }
}
