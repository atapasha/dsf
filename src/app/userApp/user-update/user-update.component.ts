import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { customerObj } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  userObj: customerObj
  constructor(private route: ActivatedRoute) {

    this.userObj = new customerObj()

    this.route.queryParams.subscribe((res) => {
      this.userObj.userId = res['id']
    })
  }

  ngOnInit(): void {
  }


  getNewUserId() {

    const oldRecords = localStorage.getItem('userList');

    if (oldRecords !== null) {
      const userList = JSON.parse(oldRecords)

      return userList.Length + 1
    }
    return 1;

  }


  saveUser() {
    const latesId = this.getNewUserId();
    this.userObj.userId = latesId
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
