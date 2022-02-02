import { Component } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formvalidation';

  loginForm:any;
  constructor(FormBuilder:FormBuilder){
    this.loginForm=FormBuilder.group({
      firstname:['',[Validators.required,Validators.minLength(8)]],
      lastname:['',[Validators.required]],
      email:['',[Validators.required]]
    }

    );

  }
  onsubmit() {
    console.log(this.loginForm.value);
  }
  get username(){
    return this.loginForm.get('username')
  }
}
