import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements AfterViewInit,OnInit {
  @ViewChild(SidebarComponent,{static:true}) child: SidebarComponent;
  constructor() { }
  visibleSidebar;
ngOnInit(){
  // this.visibleSidebar1();

}
  ngAfterViewInit(){

 this.visibleSidebar1();
  }
visibleSidebar1(){
  this.child.sidebar();
  this.visibleSidebar=false;



}

}
