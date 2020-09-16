import { Component, OnInit } from '@angular/core';
import { Notification } from "../../models/notification";
import { Conversation } from "../../models/conversation";

const CONVERSATIONS: Conversation[] = [
  {
    content: 'I sent you a message earlier, you did not say anything...',
    from: 'George R.'
  },
  {
    content: 'When are you coming to school tomorrow?',
    from: 'Susan S.'
  },
  {
    content: 'Thank you for the materials that you brought earlier...',
    from: 'Luka D.'
  },
  {
    content: 'Well done.',
    from: 'Djordje O.'
  }
];

@Component({
  selector: 'app-my-conversations',
  templateUrl: './my-conversations.component.html',
  styleUrls: ['./my-conversations.component.css']
})
export class MyConversationsComponent implements OnInit {

  conversations = CONVERSATIONS;

  constructor(

  ) { }

  ngOnInit(): void {
  }

}
