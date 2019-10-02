import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  visibleSidebar;
  ngOnInit() {
    this.visibleSidebar = false;
    this.sidebar();

    }
    sidebar(){
this.visibleSidebar = true;
      this.ngOnInit();
 }

    }


