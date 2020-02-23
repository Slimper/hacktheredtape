import {Component, Input} from '@angular/core';
import {Form} from '../../common/form';
import {Owner} from '../../common/owner';

@Component({
  selector: 'app-form-list-element',
  templateUrl: './form-list-element.component.html',
  styleUrls: ['./form-list-element.component.scss']

})
export class FormListElementComponent {
  protected _form: Form;
  protected _owner: Owner;

  public get form(): Form {
    return this._form;
  }

  @Input()
  public set form(value) {
    this._form = value;
  }

  public get owner(): Owner {
    return this._owner;
  }

  @Input()
  public set owner(value) {
    this._owner = value;
  }
}
