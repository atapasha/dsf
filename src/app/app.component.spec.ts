import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component, NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { of } from 'rxjs'
import { ActivatedRoute } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatDialogModule,
        HttpClientTestingModule,
      ],

      declarations: [
        AppComponent
      ],

      providers: [ApiService],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'crud-operation'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toContain('crud-operation');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.toolbar span')?.textContent).toContain('Crud-App');
  });



  it("getAllCustomers", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const service = fixture.debugElement.injector.get(ApiService)
    spyOn(service, "getCustomer").and.returnValue(of([{ firstName: "ata" }]))

    app.getAllCustomers();

    expect(app.getAllCustomers).toEqual([{ firstName: "ata" }])
  })
});
