import { Component, OnInit } from '@angular/core';
import { customerObj } from 'src/app/interfaces/user';
import { __values } from 'tslib';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  userObj: customerObj
  constructor() {

    this.userObj = new customerObj()
  }

  ngOnInit(): void {
  }


  getNewUserId() {

    const oldRecords = localStorage.getItem('userList');

    if (oldRecords !== null) {
      const userList = JSON.parse(oldRecords);
      console.log(userList.Length + 1)
      return userList.Length + 1
    } else {
      return 23;
    }
  }


  saveUser() {
    const latesId = this.getNewUserId();
    console.log(latesId)
    const oldRecords = localStorage.getItem('userList');


    if (oldRecords !== null) {
      const userList = JSON.parse(oldRecords)
      userList.push(this.userObj)
      localStorage.setItem('userList', JSON.stringify(userList));
    } else {
      const userArr = [];
      userArr.push(this.userObj)
      localStorage.setItem('userList', JSON.stringify(userArr))
    }

  }
}