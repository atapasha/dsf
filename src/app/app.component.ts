
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit, VERSION, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DialogComponent } from './dialog/dialog.component';
import { ApiService } from './services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "crud-operation"
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'phone', 'bankAccountNumber', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api: ApiService) {

  }
  ngOnInit(): void {


    this.getAllCustomers()

  }
  openDialog() {
    console.log("sa")
    this.dialog.open(DialogComponent, {
      width: '30 %'

    }).afterClosed().subscribe(val => {

      if (val == 'update') {
        this.getAllCustomers();
      }

    })
  }

  getAllCustomers() {

    this.api.getCustomer().subscribe({
      next: (res) => {

        this.dataSource = new MatTableDataSource(res)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort
        console.log(res)

      },
      error: (err) => {
        alert("error happend")
      }



    })

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  editCustomer(row: any) {

    this.dialog.open(DialogComponent, {

      width: '30%',
      data: row
    }).afterClosed().subscribe(val => {

      if (val == 'update') {
        this.getAllCustomers();
      }

    })
  }


  deleteCustomers(id: number) {
    this.api.deleteCustomer(id).subscribe({
      next: (res) => {
        alert("customer successfulll deleted")
      },
      error(err) {
        alert(" error occure customer  deleted")
      },

    })
  }

}  