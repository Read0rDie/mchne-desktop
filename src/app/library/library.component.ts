import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { LibraryService } from '../shared/services/library.service';
import { Observable } from 'rxjs/Rx';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  novelList;
  display : boolean[]
  constructor(private _http:Http, private libraryService : LibraryService) { 
    this.display = [];
    this.libraryService.allNovels().subscribe(res => this.novelList = res);    
  }

  ngOnInit() {
    for(let i = 0; i < this.novelList.length; i++){
      this.display.push(false);
    }
  }  

  toggle(index: number){
    if(this.display[index]){
      this.display[index] = false;
    }
    else{
      this.display[index] = true;
    }
  }

}
