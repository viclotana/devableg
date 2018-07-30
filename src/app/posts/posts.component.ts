import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventsService } from '.././services/events.service';
import { Event } from '../models/event';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  events: Event[];

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.getEvents().subscribe(events => {
      //console.log(events);
      this.events = events;
    });
  }

}
