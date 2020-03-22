import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/models/test.model';
import { FormGroup, FormControl } from '@angular/forms';
import { RefrService } from 'src/app/services/refr.service';
import { EAttribute } from 'src/app/models/eattribute.model';

/**
 * beállításokat tartalmazó container component
 * hozzátartozó formGroup egybefogja az összes beállítást külön hozzátartozó formControlokkal
 * minden változtatás esetén elküldi RefrService Subject jével az új beállításokkal a törzsobjektumot
 * amire paramComponents konstruktorban feliratkozott és ez alapján frissíti a tartalmát
*/
@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
    testObj: Test;
    testObjAttr: EAttribute[];
    formGroup: FormGroup;

    constructor(private refrService: RefrService) {
        const storedObj = localStorage.getItem('setup');
        this.testObj = storedObj !== null ? JSON.parse(storedObj) : new Test();

        this.testObjAttr = getEAttributeObjects(this.testObj)
        this.formGroup = createFormGroup(this.testObjAttr);
    }

    ngOnInit() { }

    onChange() {

        // objektum paramétereinek frissítése (rejtett szereplők megtartásával)
        this.testObj = { ...this.testObj, ...this.formGroup.value };
        const objToStore = JSON.stringify(this.testObj);
        localStorage.setItem('setup', objToStore);

        // nézetfrissítés refrService Subject-jével
        this.refrService.refrView.next(this.testObj);
    }

}

/**
 * adott "panel" objektum paramétereinek összegyűjtése
 *
 * @param {Test} source bejövő Test objektum (panel mock)
 */
function getEAttributeObjects(source): EAttribute[] {
    let attributes = Object.entries(source)
        .filter(field => (field[0].charAt(0) !== '_' && typeof field[1] !== 'function'))
        .map(field => {
            return {
                config: source._config[field[0]],
                name: field[0],
                value: field[1]
            }
        });
    return attributes;
}

/**
 * attribútumtömb alapján létrehoz egy FormGroup-ot a beállítások űrlap kezeléséhez
 *
 * @param {EAttribute[]} attributes
 */
function createFormGroup(attributes: EAttribute[]): FormGroup {
    let formGroup = new FormGroup({});
    attributes.forEach(attribute => {
        formGroup.addControl(attribute.name, new FormControl(attribute.value));
    });
    return formGroup;
}
