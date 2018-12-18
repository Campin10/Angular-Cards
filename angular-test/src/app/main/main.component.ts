import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  posts:any;
  constructor(public rest:RestService) { }

  ngOnInit() {
    this.getPosts();
  }
  
  getPosts() {
    this.rest.getPosts().subscribe((data: {}) => {
      console.log(data);
      this.posts = data;
    });
  }

}
