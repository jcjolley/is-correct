import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import '../../public/css/styles.css';

@Component({
  	selector: 'my-app',
  	templateUrl: 'app.component.html',
  	styleUrls: ['app.component.css'],
	encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit 
{
	ngOnInit(): void {
	}

}
