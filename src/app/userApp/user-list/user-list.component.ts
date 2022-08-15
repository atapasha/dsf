import { Component, OnInit } from '@angular/core';
import { customerObj } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: customerObj[]
  constructor() {

    this.userList = [];
  }

  ngOnInit(): void {

    const records = localStorage.getItem('userList')

    if (records !== null) {
      this.userList = JSON.parse(records);


    }

  }


}