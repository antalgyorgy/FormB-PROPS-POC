import { Component, OnInit, Input } from '@angular/core';
import { RefrService } from 'src/app/services/refr.service';

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.css']
})
export class ParamsComponent implements OnInit {

  @Input() obj;
  result: string[];
  color: string;

  constructor(private refrService: RefrService) { 
    this.refrService.refrView.subscribe( obj => {this.obj = obj; this.refresh();})
  }

  ngOnInit() {
    this.refresh();
  }

  /**
   * itt most csak kiiratom az összes mezőt egyébként itt lenne a panel előnézet frissítése
   */
  refresh() {
    let attr = Object.entries(this.obj);
    this.result = [];
    attr.forEach(field => {
      let fieldName = field[0];
      if (fieldName.charAt(0) !== '_' && typeof field[1] !== 'function') {
        this.result.push(`${fieldName}: ${field[1]}`);
      }
    });
  }
}
