import { Component, OnInit, Input } from '@angular/core';
import { RefrService } from 'src/app/services/refr.service';
import { Test } from 'src/app/models/test.model';

@Component({
    selector: 'app-params',
    templateUrl: './params.component.html',
    styleUrls: ['./params.component.css']
})
export class ParamsComponent implements OnInit {

    @Input() obj: Test;
    result: string[];
    color: string;

    constructor(private refrService: RefrService) {
        this.refrService.refrView.subscribe(obj => this.refresh(obj));
    }

    ngOnInit() {
        this.refresh(this.obj);
    }

    /**
     * itt most csak kiiratom az összes mezőt egyébként itt lenne a panel előnézet frissítése
     */
    refresh(obj): void {
        this.result = Object.entries(obj)
            .filter(field => (field[0].charAt(0) !== '_' && typeof field[1] !== 'function'))
            .map(field => `${field[0]}: ${field[1]}`);
    }
}
