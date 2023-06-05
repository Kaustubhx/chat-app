import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Contact, Contacts } from '@ionic-native/contacts/ngx';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.page.html',
  styleUrls: ['./chat-list.page.scss'],
})
export class ChatListPage implements OnInit {
  users: any;
  myContacts: Contact[] = [];

  constructor(private usersService: UsersService, private contacts: Contacts) {}

  ngOnInit() {
    this.users = this.usersService.usersList;
  }

  importContacts() {
    let options = {
      filter: '',
      multiple: true,
      hasPhoneNumber: true
    }

    this.contacts.find(['*'], options).then((contacts: Contact[]) => {
      this.myContacts = contacts
      console.log('Phone contacts:', contacts);
      // Process the retrieved contacts as per your requirements
    });
  }
}
