import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  LoginForm:FormGroup;

  constructor(private fb:FormBuilder) { 
    
  }

  ngOnInit(): void {

    this.LoginForm=this.fb.group({
      'Email':new FormControl('',[
        Validators.required,
       
      ]),
      'Password' : new FormControl('',[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(8)
      ])
     

    })
  }

  submitData(){
    console.log(this.LoginForm.value)
  }

}
