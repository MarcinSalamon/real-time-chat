import { Component, OnInit } from '@angular/core';
import { ChatHandlerService } from '../services/chathandler.service';

@Component({
  selector: 'app-username-selection',
  templateUrl: './username-selection.component.html',
  styleUrls: ['./username-selection.component.css']
})
export class UsernameSelectionComponent implements OnInit {

  user = '';
  constructor() { }

  ngOnInit() {
  }

  sendUser() {
    console.log(this.user);
    ChatHandlerService.assignUser(event);
  }

}
