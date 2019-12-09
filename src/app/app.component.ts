import { Component } from '@angular/core';
import {FormFields} from './FormFields';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public readonly fields = FormFields;
}
