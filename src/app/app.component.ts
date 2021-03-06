import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from './service/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor (private _localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {

    this._localStorageService.createLocalStorageUser();
    this._localStorageService.getCurrentUser();
  }
}
