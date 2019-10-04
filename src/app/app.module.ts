import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContractorsComponent } from './contractors/contractors.component';
import {  HttpClientModule } from '@angular/common/http';
import { ArticleService } from './myapp.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { routing } from './app.routing';
import { NgModule } from '@angular/core';
import { NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SidebarModule} from 'primeng/sidebar';
import { SidebarComponent } from './menu/sidebar/sidebar.component';
import { ReversePipe } from './reverse.pipe';
import { FilePipe } from './file.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContractorsComponent,
    MenuComponent,
    SidebarComponent,
    ReversePipe,
    FilePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbAlertModule,
    NgbModule,
    routing,
    ToastModule,
    BrowserAnimationsModule,
    SidebarModule,


  ],
  providers: [ArticleService, MessageService],
  bootstrap: [AppComponent]

})
export class AppModule { }
