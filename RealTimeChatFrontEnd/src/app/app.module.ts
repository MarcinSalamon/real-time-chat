import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { ChatInputComponent } from './chatbox/chat-input/chat-input.component';
import { ChatlineComponent } from './chatbox/chatline/chatline.component';
import { UsernameSelectionComponent } from './username-selection/username-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatboxComponent,
    ChatInputComponent,
    ChatlineComponent,
    UsernameSelectionComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
