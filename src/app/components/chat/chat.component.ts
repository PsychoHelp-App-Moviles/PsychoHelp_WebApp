import { Component } from '@angular/core';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages: { content: string; isUser: boolean }[] = [];
  userInput: string = '';

  sendMessage() {
    if (this.userInput.trim() === '') {
      return;
    }

    this.messages.push({ content: this.userInput, isUser: true });
    this.userInput = '';

    // Aquí puedes agregar la lógica para procesar la respuesta del chatbot
  }
}
