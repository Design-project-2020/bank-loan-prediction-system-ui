import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = true;
  showSearchApplication = false;
  showProgressBar = false;

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  constructor(private _formBuilder: FormBuilder,private dialog: MatDialog,)  { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
goforPrediction(){
  
    this.dialog.open(DashboardComponent, {
      
    width: '80%',
    height: 'auto',
    maxHeight: '90vh',
    disableClose: true,
    autoFocus: false
    }).afterClosed().subscribe(()=>{
this.ngOnInit();
    })
  }


  searchApplication(){
    this.showSearchApplication = true;
console.log("search");
  }

  newApplication(){
    this.showSearchApplication = false;
console.log("search");
  }

  findApplication(){
    this.showProgressBar = true;
    console.log("findApplication")
    

  }
  
}
