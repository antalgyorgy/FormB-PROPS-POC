import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/models/test.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { RefrService } from 'src/app/services/refr.service';

/**beállításokat tartalmazó container component
 * hozzátartozó formGroup egybefogja az összes beállítást külön hozzátartozó formControlokkal
 * minden változtatás esetén elküldi RefrService Subject jével az új beállításokkal a törzsobjektumot
 * amire paramComponents onInit-ben feliratkozott és "frissíti az adott mezők értékét"..
 * 
 * a viselkedés csak demonstrációja hogy egy adott beállítás módosításakor egy másik komponensben történjen változás
*/
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  testObj : Test;
  testObjAttr : any;
  formGroup: FormGroup = new FormGroup({});

  constructor(private refrService: RefrService) { 
    this.testObj = new Test();
    this.testObjAttr = getAttributeObjects(this.testObj, this.formGroup);
  }

  ngOnInit() {
  }

  onChange() {
    // objektum paramétereinek frissítése (rejtett szereplők megtartásával)
    this.testObj = {...this.testObj, ...this.formGroup.value};
    // nézetfrissítés refrService Subject-jével
    this.refrService.refrView.next(this.testObj);
  }

}

/**adott objektum paramétereinek összegyűjtése és formGroup paraméterben referenciaként
*  átadott objektumban hozzátartozó kontrolok létrehozása
*/
function  getAttributeObjects(source, formGroup) {
  let attr = Object.entries(source);
  let result = [];
  attr.forEach(field => {
    let fieldName = field[0];
    if (fieldName.charAt(0) !== '_' && typeof field[1] !== 'function') {
      formGroup.addControl(fieldName, new FormControl(source[fieldName]));
      result.push({
        config: source._config[fieldName],
        name: fieldName,
        value: field[1]
      });
    }
  });
  return result;    
}