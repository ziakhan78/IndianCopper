import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { QualityComponent } from './quality/quality.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfilesComponent } from './profiles/profiles.component';
import { from } from 'rxjs';
import{AboutModule} from './about/about.module';
import { SitemapComponent } from './sitemap/sitemap.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    QualityComponent,
    InfrastructureComponent,
    ContactComponent,
    FooterComponent,
    ProfilesComponent,
    SitemapComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AboutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
