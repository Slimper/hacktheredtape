import {Component, OnInit} from '@angular/core';
import {Form} from '../../common/form';
import {AngularFirestore} from '@angular/fire/firestore';
import {Owner} from '../../common/owner';

@Component({
  selector: 'app-forms-list',
  templateUrl: './forms-list.component.html',
  styleUrls: ['./forms-list.component.scss']
})
export class FormsListComponent implements OnInit {
  protected _formsList: Array<Form>;
  protected _ownersList: Array<Owner> = [];

  public get formsList(): Array<Form> {
    return this._formsList;
  }

  constructor(protected _firestore: AngularFirestore) {
  }

  public ngOnInit(): void {
    this._firestore.collection('forms').valueChanges().subscribe((forms: Array<Form>) => {
      this._formsList = forms;
    });
    this._firestore.collection('owners').valueChanges().subscribe((owners: Array<Owner>) => {
      this._ownersList = owners;
    });
  }

  public getOwner(form: Form) {
    console.log('qq');
    return this._ownersList.find(_ => _.id === form.id);
  }
}
