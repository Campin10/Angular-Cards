import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  postItem:any;
  id:any;
  constructor(public rest:RestService,private _route: ActivatedRoute) { 
    this.id = this._route.snapshot.paramMap.get('id'); 
  }

  ngOnInit() {
    this.getPosts();
  }
  
  getPosts() {
    this.rest.getPostItem(this.id).subscribe((data: {}) => {
      console.log(data);
      this.postItem = data;
    });
  }

}
