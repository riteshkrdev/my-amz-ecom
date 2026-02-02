import { Component, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Sidebar } from '../sidebar/sidebar';
import { NgClass } from '@angular/common';
import { ToggleSidebarService } from 'src/app/common/services/toggle-sidebar';

@Component({
  selector: 'shop-layout',
  imports: [RouterOutlet,Header,Footer,Sidebar],
  templateUrl: './layout.html',
})
export class MainLayout {
  sidebarVisible = computed(() => this.toggleService.toggleSidebar());
  currentClasses: Record<string, boolean> = {};
  constructor(private toggleService: ToggleSidebarService){}

}
