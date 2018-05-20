import { Component, OnInit, Inject, Injectable } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.scss']
})
export class ProfileModalComponent implements OnInit {

  header:string;
  title:string;
  message:string;

  constructor(private dialogRef: MatDialogRef<ProfileModalComponent>, @Inject(MAT_DIALOG_DATA) data, private router: Router) {
    this.header = data.header;
    this.title = data.title;
    this.message = data.message;    
 }

  ngOnInit() {
  }

  confirm(){    
    this.dialogRef.close('Confirm');
  }

  cancel() {
    this.dialogRef.close('Cancel');    
  }

}
