import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CircularComponent } from './circular/circular.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule} from '@angular/material';
import { SearchComponent } from './search/search.component';
import { GithubService } from './github/github.service';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {appRoutes} from './app.routes';
import {RouterModule} from '@angular/router';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    CircularComponent,
    SearchComponent,
    UserComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, HttpModule, FormsModule
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
