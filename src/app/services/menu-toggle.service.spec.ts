/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MenuToggleService } from './menu-toggle.service';

describe('Service: MenuToggle', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuToggleService]
    });
  });

  it('should ...', inject([MenuToggleService], (service: MenuToggleService) => {
    expect(service).toBeTruthy();
  }));
});
