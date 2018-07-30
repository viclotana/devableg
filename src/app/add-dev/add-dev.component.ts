import { Component, OnInit } from '@angular/core';
import { DevService } from '../services/dev.service';
import { Dev } from '../models/dev';

@Component({
  selector: 'app-add-dev',
  templateUrl: './add-dev.component.html',
  styleUrls: ['./add-dev.component.scss']
})
export class AddDevComponent implements OnInit {

  constructor(private devService: DevService) { }

  ngOnInit() {
  }

}
