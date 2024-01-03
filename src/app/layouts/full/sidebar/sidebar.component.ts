import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MenuItems } from '../../../shared/menu-items/menu-items';
import { MaterialModule } from 'src/app/material-module';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports:[MaterialModule, NgFor, NgIf, RouterModule, CommonModule, MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class AppSidebarComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,
    public menuItems: MenuItems
  ) {
    console.log('[menuItems]', menuItems.getMenuitem());
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  private hoveredItem: any | null = null;

  isHovered(item: any): boolean {
    return this.hoveredItem === item;
  }

  setHoveredItem(item: any): void {
    this.hoveredItem = item;
  }

  clearHoveredItem(): void {
    this.hoveredItem = null;
  }

  isSelected(item: any): boolean {
    return this.router.isActive(`/${item.state}`, false);
  }


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
