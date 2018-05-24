import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http'
import { LibraryService } from '../shared/services/library.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit, OnDestroy {

  private req : any;
  novelList;
  constructor(private _http:Http, private libraryService : LibraryService) { }

  ngOnInit() {
    this.libraryService.allNovels().subscribe(res => this.novelList = res);    
  }

  ngOnDestroy()
  {
    this.req.unsubscribe();
  }

}
