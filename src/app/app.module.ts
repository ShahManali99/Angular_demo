import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsersModule } from './users/users.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DemoService } from './demo.service';
import { CustomStyleDirective } from './custom-style.directive';
import { HighlightPipe } from './highlight.pipe';
import { CarouselModule } from 'ngx-bootstrap/carousel';
@NgModule({
  declarations: [
    AppComponent,
    CustomStyleDirective,
    HighlightPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    FormsModule,
    CarouselModule.forRoot()
  ],
  providers: [DemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
