import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Contact, Contacts } from '@ionic-native/contacts/ngx';
import { Gesture, GestureController, IonGrid } from '@ionic/angular';
// import { FileChooser } from '@ionic-native/file-chooser/ngx';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.page.html',
  styleUrls: ['./chat-list.page.scss'],
})
export class ChatListPage implements OnInit, AfterViewInit {
  @ViewChild('tappedChat') tappedChat!: ElementRef;

  users: any;
  myContacts: Contact[] = [];

  constructor(
    private usersService: UsersService,
    private contacts: Contacts,
    private gestureCtrl: GestureController // private fileChooser: FileChooser,
  ) {}

  ngOnInit() {
    this.users = this.usersService.usersList;

    // for (const user of this.users) {
    //   console.log(user?.id?.value)
    // }
  }

  ngAfterViewInit(): void {}

  handleLongPress() {
    console.log('Long press detected!');
    // Add your custom logic here
  }

  selectChat(chatId: any) {
    console.log(chatId);

    const targetElement = chatId.nativeElement;
    // Do something with the target element
    console.log(targetElement);
  }

  importContacts() {
    let options = {
      filter: '',
      multiple: true,
      hasPhoneNumber: true,
    };
    this.contacts.find(['*'], options).then((contacts: Contact[]) => {
      this.myContacts = contacts;
      console.log('Phone contacts:', contacts);
      // Process the retrieved contacts as per your requirements
    });
  }

  /*
  Un-Comment when testing on a simulator

  openFileChooser() {
    this.fileChooser.open()
      .then(uri => {
        // Check if the selected file has a .CSV extension
        if (uri.endsWith('.csv')) {
          // Process the selected .CSV file
          console.log('Selected file:', uri);
        } else {
          console.log('Please select a .CSV file.');
        }
      })
      .catch(err => console.log('Error while choosing file:', err));
  }
  */
}
