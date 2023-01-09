import { Injectable } from '@angular/core';
import { WindowService } from '@progress/kendo-angular-dialog';

@Injectable({
  providedIn: 'root'
})
/**
 * These component should already be loaded into memory in order to be called dynamically
 */
export class WindowSharedService {

  constructor(
    private windowService: WindowService
  ) { 

  }
}
