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
  original: UserDetails = { email: '', username: '' };
  update: UserDetails = { email: '', username: '' };


  constructor(private userService: UserService, private router: Router ) {

  }
  
  ngOnInit() {
    if(this.userService._UserName == ''){
      this.userService.getUserName(localStorage.email);
    }
    this.original.email = localStorage.email;
    this.original.username = this.userService._UserName;
  }

  editProfile({ update, valid }: { update: UserDetails, valid: boolean }){
    console.log('valid: ' ,valid);
    console.log('old user: ' ,this.original.username);
    console.log('old email: ' ,this.original.email);
    console.log('new user: ' ,this.update.username);
    console.log('new email: ' ,this.update.email);
    this.submitted = true;
    this.isRequesting = true;
    this.errors='';
    if(valid){
      this.updateUserData(this.update, this.original);
    }

  }

  updateUserData(update: UserDetails, old: UserDetails){
    //console.log('new user' ,value.newUsername);
    //console.log('old user' ,value.oldUsername);

    if(update.username != old.username || update.email != old.email){
      this.userService.setUserProfile(update.username, old.email, update.email)
        .finally(() => this.isRequesting = false)
        .subscribe(
          result => {   
            if (result) {
              old.username = update.username;
              old.email = update.email;
              this.changeEmail(update.email);
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
    this.update.username = this.userService._UserName;
  }

  changeEmail(email:string){
    localStorage.email = email;
  }

}
