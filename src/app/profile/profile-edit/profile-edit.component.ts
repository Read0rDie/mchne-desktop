import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../../shared/models/user.details.interface';
import { UserService } from '../../shared/services/user.service';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {

  isRequesting: boolean;
  submitted: boolean = false;
  errors: string;
  userName : Observable<string>;
  update: UserDetails = { oldEmail: '', newEmail: '', oldUsername: '', newUsername: '' };

  constructor(private userService: UserService, private router: Router ) {

  }
  
  ngOnInit() {
    if(this.userService._UserName == ''){
      this.userService.getUserName(localStorage.email);
    }
    this.update.oldEmail = localStorage.email;
    this.update.oldUsername = this.userService._UserName;
  }

  editProfile({ value, valid }: { value: UserDetails, valid: boolean }){
    this.submitted = true;
    this.isRequesting = true;
    this.errors='';
    if(valid){
      this.updateUserData(value);
    }

  }

  updateUserData(value: UserDetails){
    if(value.newUsername != value.oldUsername || value.newEmail != value.oldEmail){
      this.userService.setUserProfile(value.newUsername, value.newEmail)
        .finally(() => this.isRequesting = false)
        .subscribe(
          result => {                               
            if (result) {
              value.oldUsername = value.newUsername;
              value.oldEmail = value.newEmail;
              this.changeEmail(value.newEmail);
              this.router.navigate(['/profile']);                           
              }
            },
          error => this.errors = error);
    }    
    else{
      this.errors = "No changes to user details detected";
    }

  }  

  refreshUsername(){
    this.update.oldUsername = this.userService._UserName;
  }

  changeEmail(email:string){
    localStorage.email = email;
  }

}
