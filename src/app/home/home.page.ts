import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { TemplatesService } from '../services/templates.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  customTemplates: any;
  templates: any;
  constructor(
    private templateService: TemplatesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.templates = this.templateService.popularTemplates;
    
    this.customTemplates = this.templates.map((template: any) => template.components);
  }

  goToContacts(): void {
    this.router.navigate(['/chat-list'])
  }
}

// for (const template of this.templates) {
//   for (const component of template.components) {
//     if ('text' in component) {
//       console.log(component.text);
//       // Do something with the text value
//     }
//   }
// }
