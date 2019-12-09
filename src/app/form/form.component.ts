import {Component, Input, OnInit} from '@angular/core';
import {FormFields} from '../FormFields';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public readonly formFields = FormFields;

  constructor() { }

  ngOnInit() {}
}
