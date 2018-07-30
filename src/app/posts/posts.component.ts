import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  events: Event[];
  constructor() { }

  ngOnInit() {

  }

}
