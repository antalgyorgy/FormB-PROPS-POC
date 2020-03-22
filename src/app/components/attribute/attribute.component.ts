import { Component, OnInit, Input, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {

  @Input() field: any;
  @Input() formGrp: FormGroup;
  config : any;
  constructor() { }

  ngOnInit() {
    this.config = this.field.config;
  }
}
