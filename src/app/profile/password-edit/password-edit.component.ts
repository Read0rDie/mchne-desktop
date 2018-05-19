import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';
import { UserPassword } from '../../shared/models/user.password.interface';

@Component({
  selector: 'app-password-edit',
  templateUrl: './password-edit.component.html',
  styleUrls: ['./password-edit.component.scss']
})
export class PasswordEditComponent implements OnInit {

  isRequesting: boolean;
  submitted: boolean = false;
  errors: string;
  update: UserPassword = { oldPassword: '', newPassword: '', confirmPassword: '' };  

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit() {
  }

  changePassword({ update, valid }: { update: UserPassword, valid: boolean }){
    this.submitted = true;
    this.isRequesting = true;
    this.errors='';
    if(valid){
      this.updateUserPassword();
    }
  }

  updateUserPassword(){
    if(this.update.newPassword == this.update.confirmPassword){
      this.userService.setUserPassword(localStorage.email, this.update.oldPassword, this.update.newPassword)
        .finally(() => this.isRequesting = false)
        .subscribe(
          result => {   
            if (result) {             
              this.router.navigate(['/profile']);                           
            }
          },
          error => this.errors = error);
    }
    else{
      this.isRequesting = false;
      this.errors='The new password and the password confirmation do not match';
    }
  }

}
