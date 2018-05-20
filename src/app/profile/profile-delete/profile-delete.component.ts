import { Component, OnInit, HostListener } from '@angular/core';
import { UserLogin } from '../../shared/models/user.login.interface';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig } from '@angular/material';
import { ProfileModalComponent } from '../profile-modal/profile-modal.component';

@Component({
  selector: 'app-profile-delete',
  templateUrl: './profile-delete.component.html',
  styleUrls: ['./profile-delete.component.scss']
})
export class ProfileDeleteComponent implements OnInit {

  isRequesting: boolean;
  submitted: boolean = false;
  errors: string;
  delete: UserLogin = { email: '', password: '' };
  dialogResult:string;
  

  constructor(private dialog: MatDialog, private userService : UserService, private router : Router) { }

  ngOnInit() {
    if(this.userService._UserName == ''){
      this.userService.getUserName(localStorage.email);
    }
  }

  deleteAccount({ update, valid }: { update: UserLogin, valid: boolean }){
    this.submitted = true;
    this.isRequesting = true;
    this.errors='';
    if(valid){
      this.openDialog();
    }
  }

  removeAccount(){
    this.userService.deleteAccount(this.delete.email, this.delete.password)
        .finally(() => this.isRequesting = false)
        .subscribe(
          result => {   
            if (result) {        
              this.userService.logout();     
              this.router.navigate(['']);                           
            }
          },
          error => this.errors = error);
  }

  openDialog() {
  
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '600px';
    dialogConfig.hasBackdrop = true;
    dialogConfig.data = {
      id: 1,
      title: 'Delete Account',
      message: 'Are you sure you want to delete your account. This account is irreversible and all of your data will be lost?',
      header: localStorage.username,
    }; 
    this.dialog.open(ProfileModalComponent, dialogConfig,).afterClosed()
      .subscribe(result => {
        this.dialogResult = result;
        if(this.dialogResult.toString() == 'Confirm'){
          this.removeAccount();
        }    
        else{
          this.isRequesting = false;
        }
      });
  }
}
