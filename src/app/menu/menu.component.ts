import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit,AfterViewInit {
   @ViewChild(SidebarComponent,{static:true}) child: SidebarComponent;
  visibleSidebar:boolean=false;

  constructor() { }
  ngOnInit(){
    // this.visibleSidebar1();

  }

  ngAfterViewInit(){
    // this.visibleSidebar1();

  }

visibleSidebar1(){
  this.visibleSidebar=true;
  this.child.sidebar();
}

}
