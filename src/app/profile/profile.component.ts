import { Component, OnInit } from '@angular/core';
import { ModalService } from "../components/_modal";
import { User } from "../models/user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User = new User;

  constructor(
    private ms: ModalService
  ) { }

  ngOnInit(): void {
  }

  openEditProfileModal(){
    this.ms.open("edit-profile");
  }

  closeEditProfileModal(){
    this.ms.close("edit-profile");
  }

  openPromptDelete(){
    this.ms.open("prompt-delete")
  }

  closePromptDelete(){
    this.ms.close("prompt-delete")
  }

  confirmEdit(){

  }

  confirmDelete(){

  }

}
