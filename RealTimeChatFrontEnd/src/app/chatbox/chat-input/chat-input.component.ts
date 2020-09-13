import { Component, OnInit } from '@angular/core';
import { ChatHandlerService } from 'src/app/services/chathandler.service';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSend(event) {
  }
}
