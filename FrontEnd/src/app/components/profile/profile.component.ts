import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  eventName :String;
  adress: String;
  description : String;
  user : any;
  collection : any;
  event : any;
  constructor(private userService : UserService) { }

  ngOnInit() {

  }


}
