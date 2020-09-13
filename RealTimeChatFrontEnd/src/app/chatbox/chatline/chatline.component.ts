import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chatline',
  templateUrl: './chatline.component.html',
  styleUrls: ['./chatline.component.css']
})
export class ChatlineComponent implements OnInit {

  constructor() { }
  @Input() line = '';

  ngOnInit() {
  }

}
