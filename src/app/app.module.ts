import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { LoginComponent } from './login/login.component';
import { UsersListComponent } from './users-list/users-list.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CustomCompComponent } from './custom-comp/custom-comp.component';
import { EventbindingComponent } from './databinding/eventbinding.component';
import { PropertybindingComponent } from './databinding/propertybinding.component';
import { TwowaybindingComponent } from './databinding/twowaybinding.component';
import { DemoexampleComponent } from './databinding/demoexample.component';
import { IntercommComponent } from './intercomm/intercomm.component';
import { ImgpanelComponent } from './intercomm/imgpanel.component';
import { BtnpanelComponent } from './intercomm/btnpanel.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { LifecycleindexComponent } from './lifecycle/lifecycleindex.component';
import { ProjectionsComponent } from './projections/projections.component';
import { ProjectionsindexComponent } from './projections/projectionsindex.component';
//import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    LoginComponent,
    UsersListComponent,
    DatabindingComponent,
    CustomCompComponent,
    EventbindingComponent,
    PropertybindingComponent,
    TwowaybindingComponent,
    DemoexampleComponent,
    IntercommComponent,
    ImgpanelComponent,
    BtnpanelComponent,
    LifecycleComponent,
    LifecycleindexComponent,
    ProjectionsComponent,
    ProjectionsindexComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

