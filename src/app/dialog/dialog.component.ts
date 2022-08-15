import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
import { FormControl } from '@angular/forms';
import { AngularIbanModule } from 'angular-iban';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  title = 'FormValidation';

  customerForm!: FormGroup
  actionBtn: string = "save"
  constructor(private formBuilder: FormBuilder, private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any, private dialogRef: MatDialogRef<DialogComponent>
  ) { }

  ngOnInit(): void {



    this.customerForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      date: new FormControl(null, Validators.required),
      phone: new FormControl(null, [Validators.required, Validators.pattern("[7-8]{1}[0-9]{9}")]),
      bankAccountNumber: new FormControl(null, [Validators.required, Validators.pattern(/^([A-Z]{2})([0-9]{2})([A-Z0-9]{9,30})$/)]),


    })


    console.log(this.editData)


    if (this.editData) {
      this.actionBtn = "Update"
      this.customerForm.controls['firstName'].setValue(this.editData.firstName)
      this.customerForm.controls['lastName'].setValue(this.editData.lastName)
      this.customerForm.controls['email'].setValue(this.editData.email)
      this.customerForm.controls['date'].setValue(this.editData.date)
      this.customerForm.controls['phone'].setValue(this.editData.phone)
      this.customerForm.controls['bankAccountNumber'].setValue(this.editData.bankAccountNumber)

    }

  }

  addCustomer() {
    console.log(this.customerForm.value)

    if (!this.editData) {




      if (this.customerForm) {
        this.api.postCustomer(this.customerForm.value)
          .subscribe({
            next: (res) => {
              alert("customers added successfully");

              this.customerForm.reset()
              this.dialogRef.close('save')
            },
            error: () => {

              alert('error while adding occurd')
            }
          })
      }

    } else {
      this.updateCustomer()
    }
  }

  updateCustomer() {

    this.api.putCustomer(this.customerForm.value, this.editData.id)
      .subscribe({
        next: (res) => {
          alert("Customer uodated Successfully")

          this.customerForm.reset();
          this.dialogRef.close('update')
        },
        error(err) {
          alert("erroe while updating")
        },
      })

  }

}
