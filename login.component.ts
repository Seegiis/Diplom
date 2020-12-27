import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private notification: NzNotificationService,
    private router: Router,
  ) { }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  login(){
    if(
      this.validateForm.controls['userName'].value != null && 
      this.validateForm.controls['userName'].value  != '')
      {
        if(this.validateForm.controls['userName'].value == 'user' && this.validateForm.controls['password'].value == "1234"){
          let params = {
            "email": this.validateForm.controls['userName'].value,
            "password": this.validateForm.controls['password'].value
          };
          console.log('params');
          console.log(params);
          this.router.navigateByUrl('dash/map');
        }else {
          this.notification.create(
            'warning',
            'Алдаа',
            'Нэвтрэх нэр нууц үг буруу байна!'
          );
        }
        
        
      }
  }
}
