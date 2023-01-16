import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CountDownComponent } from './count-down/count-down.component';
import { PrezComponent } from './prez/prez.component';
const routes: Routes = [
  { path: 'prez', component: PrezComponent },
  { path: '', component: CountDownComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    CountDownComponent,
    PrezComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
