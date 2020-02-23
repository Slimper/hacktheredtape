import {Component, OnInit} from '@angular/core';
import {Form} from '../../common/form';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {Owner} from '../../common/owner';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {QuestionTypes} from '../../common/question-types';

const defaults = {
  [QuestionTypes.string]: '',
};

@Component({
  selector: 'app-form-fill',
  templateUrl: './form-fill.component.html',
  styleUrls: ['./form-fill.component.scss'],
})
export class FormFillComponent implements OnInit {
  protected _form: Form;
  protected _formGroup: FormGroup;
  protected _owner: Owner;

  public get form() {
    return this._form;
  }

  public get owner() {
    return this._owner;
  }

  public get formGroup() {
    return this._formGroup;
  }

  public set formGroup(value) {
    this._formGroup = value;
  }

  public get QuestionTypes() {
    return QuestionTypes;
  }

  constructor(protected _route: ActivatedRoute,
              protected _firestore: AngularFirestore,
              protected _formBuilder: FormBuilder) {
  }

  public ngOnInit(): void {
    this._route.paramMap.subscribe((params: ParamMap) => {
      this._firestore.collection('forms').doc(params.get('id'))
        .valueChanges()
        .subscribe((form: Form) => {
          this._form = form;

          if (form) {
            // load information about form owner
            this._firestore.collection('owners').doc(`${form.ownerId}`)
              .valueChanges()
              .subscribe((owner: Owner) => {
                this._owner = owner;
              });

            // prepare form
            this._prepareForm(form);
          }
        });
    });
  }

  protected _prepareForm(form: Form) {
    const controls = form.questions
      .map(q => ({
        ...q,
        default: defaults[q.type]
      }))
      .reduce((acc, element, index) => {
        return {
          ...acc,
          [index]: this._formBuilder.control(defaults[element.type], element.required ? [Validators.required] : [])
        };
      }, {});

    this._formGroup = this._formBuilder.group(controls);
  }

  public save() {

  }
}
