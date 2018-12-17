import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  //Text: Text;
  @Input() public description: string;
  @Input() public photoUrl: string;
  @Input() public items: [];
  @Input() public id: string;
  constructor() { }

  ngOnInit() { 
  }

}
