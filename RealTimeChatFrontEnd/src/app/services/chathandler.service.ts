import { Injectable } from '@angular/core';
import { userInfo } from 'os';

@Injectable({
  providedIn: 'root'
})
export class ChatHandlerService {
  static user = null;
  constructor() { }

  static getUser() {
    return ChatHandlerService.user;
  }

  static assignUser(user) {
    ChatHandlerService.user = user;
    console.log('todo assign user in API');
  }

  static sendMessage(message) {
    console.log('todo send message to API');
  }
}
