import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DevService } from '.././services/dev.service';
import { Dev } from '../models/dev';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  // animations: [
  //   trigger('listStagger', [
  //     transition('* <=> *', [
  //       query(':enter', 
  //       [
  //         style({ opacity: 0, transform: 'translateY(-35px)' }),
  //         stagger('50ms', 
  //         animate('550ms ease-out',
  //       style({ opacity: 1, transform: 'translateY(0px)'})))
  //       ], {optional: true}),
 
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
