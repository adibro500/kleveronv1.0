import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SettingsComponent } from "./dashboard/settings/settings.component";
import { DynamicModule } from 'ng-dynamic-component';
import { TabTwoComponent } from "./dashboard/settings/tabs/tab2.component";
import { TabThreeComponent } from "./dashboard/settings/tabs/tab3.component";
import { DashTabComponent } from "./dashboard/tabs/dashtab.component";
import { TranslateService, TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateStore } from "@ngx-translate/core/src/translate.store";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Http, HttpModule, RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { NguiDatetimePickerModule } from '@ngui/datetime-picker';
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { SettingsMenuComponent } from "./dashboard/settings/settingsmenu.component";
import { DashMenuComponent } from "./dashboard/dashboardmenu.component";
import { ConfigMenuComponent } from "./config/configmenu.component";
import { ConfigTab2Component } from "./config/tabs/configtab2.component";
import { ConfigTab1Component } from "./config/tabs/configtab1.component";
import { CreatePageMenuComponent } from "./createPage/createPage.component";
import { ModalModule, TimepickerModule } from 'ngx-bootstrap';
import { CssClassForDivsService } from "./createPage/createPage.service";
import { CalendarModule } from 'primeng/primeng';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RlTagInputModule } from 'angular2-tag-input';

import { NgbdDatepickerPopup } from "./createPage/Datepicker.component";
import { EscapeHtmlPipe } from "./createPage/keep-html.pipe";
import { AdminInputMaster } from "./admin/admin-on-board.component";
import { AppCheck } from "./createPage/templatecheck.component";
import { AuthGuardService } from "./auth-guard.service";
import { LoginService } from "./login/login.service";
import { EscapeJSPipe } from "./createPage/keep-js.pipe";
import { TextboxComponent } from "./createPage/textbox.component";
import { NgxDnDModule } from "@swimlane/ngx-dnd";
import { createPage1Component } from "./createPage/createPage1.component";
const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'createPage', component: CreatePageMenuComponent,
    children: [
      { path: 'createPageMenu', component: createPage1Component },
      { path: 'adminInputMaster', component: AdminInputMaster },]
  },
  {
    path: 'configs', component: ConfigMenuComponent,
    children: [
      { path: 'config1', component: ConfigTab1Component },
      { path: 'config2', component: ConfigTab2Component },
    ]

  },
  {
    path: 'dash', component: DashMenuComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'dashtab', component: DashTabComponent },
    ]

  },
  {
    path: 'settingsmenu', component: SettingsMenuComponent,
    children: [
      { path: 'settings', component: SettingsComponent },
      { path: 'settingstab2', component: TabTwoComponent },
      { path: 'settingstab3', component: TabThreeComponent },
    ]
  },
  { path: 'appcheck', component: AppCheck },

  //AppCheck
];

export function createTranslateLoader(http: HttpClient) {

  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    createPage1Component,
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SettingsComponent,
    TabTwoComponent,
    TabThreeComponent,
    DashTabComponent,
    SettingsMenuComponent,
    DashMenuComponent,
    ConfigMenuComponent,
    ConfigTab1Component,
    CreatePageMenuComponent,
    ConfigTab2Component,
    NgbdDatepickerPopup,
    EscapeHtmlPipe,
    AdminInputMaster,
    AppCheck,
    EscapeJSPipe,
    TextboxComponent,
  ],
  imports: [
    NgxDnDModule,
    DynamicModule.withComponents([TextboxComponent]),
    NguiDatetimePickerModule,
    NgbModule.forRoot(),
    FormsModule,
    CalendarModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    RlTagInputModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    TimepickerModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  exports: [NgxDnDModule],
  providers: [
    TranslateService, CssClassForDivsService, AuthGuardService, LoginService],
  entryComponents: [NgbdDatepickerPopup],
  bootstrap: [AppComponent]
})
export class AppModule {



}
