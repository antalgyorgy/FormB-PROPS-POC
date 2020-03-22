import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Test } from '../models/test.model';

@Injectable({
  providedIn: 'root'
})
export class RefrService {

  refrView = new Subject<Test>();

  constructor() { 
  }
}
