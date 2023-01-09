import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { KendoWindowContainer } from './core/utilities/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('container', { static: true, read: ViewContainerRef }) kendoWindowContainer: ViewContainerRef | undefined;
  ngOnInit() {
    KendoWindowContainer.viewContainer = this.kendoWindowContainer;
  }
}
