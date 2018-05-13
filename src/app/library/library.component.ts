import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http'

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit, OnDestroy {

  private req : any;
  novelList : [any];
  constructor(private _http:Http) { }

  ngOnInit() {
    this.req = this._http.get('http://localhost:5050/api/novels').subscribe(data =>{
      console.log(data.json())
      this.novelList = data.json() as [any]
    })
  }

  ngOnDestroy()
  {
    this.req.unsubscribe();
  }

}
