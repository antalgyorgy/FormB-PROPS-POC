import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/models/test.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  testObj : Test;
  testObjAttr : any;
  formGroup: FormGroup = new FormGroup({});

  constructor() { 
    this.testObj = new Test();
    let attr = Object.entries(this.testObj);
    this.testObjAttr = [];
    attr.forEach(field => {
      let fieldName = field[0];
      if (fieldName != 'config') {
        this.formGroup.addControl(fieldName, new FormControl(this.testObj[fieldName]));
        this.testObjAttr.push({
          config: this.testObj.config[fieldName],
          name: fieldName,
          value: field[1]
        });
      }
    });    
  }

  ngOnInit() {
  }

}
