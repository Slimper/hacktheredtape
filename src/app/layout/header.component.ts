import {Component, Input} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
    .fill-remaining-space {
      flex: 1 1 auto;
    }

    .button-logout {
      margin-left: 8px;
    }
  `,
  ]
})
export class HeaderComponent {
  public title = 'HackTheRedTape';
  @Input() public user;

  constructor(public fireAuth: AngularFireAuth) {
  }

  logout() {
    this.fireAuth.auth.signOut().then(console.log);
  }
}
