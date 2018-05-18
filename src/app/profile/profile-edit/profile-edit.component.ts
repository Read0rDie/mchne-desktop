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
    this.submitted = true;
    this.isRequesting = true;
    this.errors='';
    if(valid){
      this.updateUserData(this.update, this.original);
    }

  }

  updateUserData(update: UserDetails, old: UserDetails){

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
      this.isRequesting = false;
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
