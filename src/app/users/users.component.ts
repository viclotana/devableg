import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DevService } from '.././services/dev.service';
import { Dev } from '../models/dev';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  devs: Dev[];

  constructor(private devService: DevService) { }

  ngOnInit() {
    this.devService.getDevelopers().subscribe(devs => {
      //console.log(devs);
      this.devs = devs;
    });
  }

}
