import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  usersList = [
    {
      gender: 'male',
      name: 'Kaustubh Ganekar',
      phone: '051-428-8489',
      cell: '081-548-2618',
      id: { "name": "CPR", "value": "270174-6924" },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/10.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/10.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/10.jpg',
      },
      nat: 'IE',
    },
    {
      gender: 'female',
      name: 'Jayesh Nakti',
      phone: '(946) 582-1745',
      cell: '(268) 329-0980',
      id: { "name": "DNI", "value": "50180509-X" },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/83.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/83.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/83.jpg',
      },
      nat: 'US',
    },
    {
      gender: 'female',
      // name: 'Abhishek Gupta',
      phone: '(642) 968-4825',
      cell: '(343) 810-4984',
      id: { "name": "FN", "value": "10108617697" },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/78.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/78.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/78.jpg',
      },
      nat: 'US',
    },
    {
      gender: 'male',
      name: 'Saurabh Mathre',
      phone: '034-7289-929',
      cell: '060-8433-836',
      id: { "name": "PPS", "value": "4211607T" },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/0.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/0.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/0.jpg',
      },
      nat: 'RS',
    },
    //Copies
    {
      gender: "male",
      name: "Marius Sørensen",
      email: "marius.sorensen@example.com",
      phone: "63016619",
      cell: "38790761",
      id: { "name": "CPR", "value": "200659-0424" },
      picture: {
        large: "https://randomuser.me/api/portraits/men/36.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/36.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/36.jpg"
      },
      nat: "DK"
    },
    {
      gender: "male",
      name: "Armando Patiño",
      phone: "(648) 062 6790",
      cell: "(652) 399 2231",
      id: { "name": "NSS", "value": "95 93 96 3446 6" },
      picture: {
        large: "https://randomuser.me/api/portraits/men/99.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/99.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/99.jpg"
      },
      nat: "MX"
    },
    {
      gender: "male",
      name: "Anton Madsen",
      phone: "93768883",
      cell: "50032403",
      id: { "name": "CPR", "value": "180598-6026" },
      picture: {
        large: "https://randomuser.me/api/portraits/men/48.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/48.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/48.jpg"
      },
      nat: "DK"
    },
    {
      gender: "female",
      name: "Reinhild Straßer",
      phone: "0827-4774800",
      cell: "0170-8017768",
      id: { "name": "SVNR", "value": "19 110380 S 845" },
      picture: {
        large: "https://randomuser.me/api/portraits/women/43.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/43.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/43.jpg"
      },
      nat: "DE"
    },
    {
      gender: "female",
      name: "Sofia Davis",
      phone: "061-142-5017",
      cell: "081-551-1713",
      id: { "name": "PPS", "value": "2634272T" },
      picture: {
        large: "https://randomuser.me/api/portraits/women/26.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/26.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/26.jpg"
      },
      nat: "IE"
    },
    {
      gender: "female",
      name: "Gloria Gaillard",
      phone: "079 676 95 04",
      cell: "079 044 67 50",
      id: { "name": "AVS", "value": "756.9619.6350.63" },
      picture: {
        large: "https://randomuser.me/api/portraits/women/61.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/61.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/61.jpg"
      },
      nat: "CH"
    },
  ];
}
