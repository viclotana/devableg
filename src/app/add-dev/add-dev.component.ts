import { Component, OnInit } from '@angular/core';
import { DevService } from '../services/dev.service';
import { Dev } from '../models/dev';

@Component({
  selector: 'app-add-dev',
  templateUrl: './add-dev.component.html',
  styleUrls: ['./add-dev.component.scss']
})
export class AddDevComponent implements OnInit {
  dev: Dev = {
    name: '',
    twitter: '',
    github: '',
    stack: ''
  }

  constructor(private devService: DevService) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.dev.name != '' && this.dev.github != '' && this.dev.stack != '' ){
      this.devService.addDeveloper(this.dev);
      this.dev.name = '';
      this.dev.github = '';
      this.dev.twitter = '';
      this.dev.stack = '';

    }
  }

}
