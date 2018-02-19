import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";
import { DynamicModule } from 'ng-dynamic-component';
import { TranslateService, TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateStore } from "@ngx-translate/core/src/translate.store";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Http, HttpModule, RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { NguiDatetimePickerModule } from '@ngui/datetime-picker';
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { ConfigMenuComponent } from "./config/configmenu.component";
import { ConfigTab2Component } from "./config/tabs/configtab2.component";
import { ConfigTab1Component } from "./config/tabs/configtab1.component";
import { ModalModule, TimepickerModule } from 'ngx-bootstrap';
import { CalendarModule } from 'primeng/primeng';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RlTagInputModule } from 'angular2-tag-input';

import { OwlModule } from 'ngx-owl-carousel';

import { AuthGuardService } from "./auth-guard.service";
import { LoginService } from "./login/login.service";
import { NgxDnDModule } from "@swimlane/ngx-dnd";

import { AdminListMasterComponent } from "./admin/admin-list-master.component";
import { AdminGridMasterComponent } from "./admin/admin-grid-master.component";
import { DashRecComponent } from "./dashboardrec/dashrec.component";
import { MenuToggleRightComponent } from "./menuToggle/menuToggle.component";
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragulaModule, DragulaService } from "ng2-dragula/ng2-dragula"
import { RenderInputMaster } from './admin/renderInputMaster.component';
import { AuthGuard } from './auth-guard';
import { InputMasterService } from './admin/admin-input-master.service';
import { RenderInputMasterService } from './admin/render-input-master.service';
import { RenderInput } from './admin/render-input.component';
import { AdminPanel } from './admin/admin-panel.component';
import { AdminWidgetMaster } from './admin/admin-widget-master.component';
import { TieredMenuModule } from 'primeng/primeng';
import { ToggleButtonModule } from 'primeng/primeng';
import { ToolbarModule } from 'primeng/primeng';
import { TooltipModule } from 'primeng/primeng';
import { TreeModule } from 'primeng/primeng';
import { TreeTableModule } from 'primeng/primeng';
import { ColorPickComponent } from './colorPicker/color-picker.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { AdminInput } from './admin/adminInput.component';
import { OwlCar } from './admin/widgetContent/owl-carousel.component';
import { DxDataGridModule } from 'devextreme-angular';
import { Service } from './admin/grid-master.service';
import { ListComponent } from './admin/listContent/list.component';
import { ColumnComponent } from './admin/listContent/column.component';
import { DatatableComponent } from './admin/listContent/datatable.component';
import { TableSortDirective } from 'ng-table-sort/table-sort.directive';
import { GridListComponent } from './admin/listContent/gridlist.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RenderList } from './admin/renderGrid.component';
import { IndexComponent } from './index/index.component';

import { MaterializeModule } from 'angular2-materialize';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgxResizeWatcherDirective } from './admin/listContent/grid.directive';
import { AdminMaster } from './admin2/admin-input.component';
import { AdminService } from './admin2/admin-input.service';
import { RenderAdmin2 } from './admin2/renderAdmin.component';
import { DateTimePickerModule } from 'ngx-datetime-picker';
import { ParentComponent } from './parent-main.component';
import { SelectControlComponent } from './select-control/select-control.component';
import { SafePipe } from './admin2/safe-pipe';
import { Keep } from './admin2/keep-pipe';
import { ContenteditableModel } from './admin/ContentEditableModel';
import { GridsterModule } from 'angular-gridster2';
import { NgGridModule } from 'angular2-grid';
import { RenderWidget } from './admin/renderWidget.component';
import { ContenteditableDirective } from 'ng-contenteditable';
import { DraggableDirective } from './admin/drag.directive';
import { TabsComponent } from './tabbed/tabs.component';


const appRoutes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'index', component: IndexComponent },
  { path: 'adminMaster', component: AdminMaster },

  { path: 'render/:index', component: RenderInputMaster },
  { path: 'renderinput', component: RenderInput },
  { path: 'adminPanel', component: AdminPanel },

  {
    path: 'parent', component: ParentComponent,
    children: [
      { path: 'adminMaster', component: AdminMaster },
      { path: 'adminWidget', component: AdminWidgetMaster },
      { path: 'adminGridMaster/:uname', component: AdminGridMasterComponent },
      { path: 'tabs', component: TabsComponent },

      {
        path: 'configs', component: ConfigMenuComponent,

        children: [
          { path: 'config1', component: ConfigTab1Component },
          { path: 'config2', component: ConfigTab2Component },
        ]

      },

      { path: 'render2/:id', component: RenderAdmin2 },
      { path: 'renderWidget/:id', component: RenderWidget },
      { path: 'adminListMaster/:uname', component: AdminListMasterComponent },
      { path: 'adminPanel', component: AdminPanel },



    ]
  },
  { path: 'colorPick', component: ColorPickComponent },
  { path: 'adminInput', component: AdminInput },
  { path: 'List', component: ListComponent },
  //RenderList
  { path: 'renderGrid/:id', component: RenderList },
  { path: 'gridList', component: GridListComponent },
  //GridComponent
  //RenderCreateComponent


  { path: 'adminListMaster/:uname', component: AdminListMasterComponent },
  { path: 'dashboard/:uname', component: DashRecComponent },



  {
    path: 'configs', component: ConfigMenuComponent, canActivate: [AuthGuard],

    children: [
      { path: 'config1', component: ConfigTab1Component },
      { path: 'config2', component: ConfigTab2Component },
    ]

  },




];

export function createTranslateLoader(http: HttpClient) {


  return new TranslateHttpLoader(http, 'https://kleveron-backend.herokuapp.com/lang/', '.json');

}


@NgModule({
  declarations: [
    TabsComponent,
    DraggableDirective,
    RenderList,
    RenderWidget,
    SelectControlComponent,
    ColumnComponent,
    AdminWidgetMaster,
    ContenteditableDirective,
    ListComponent,
    OwlCar,
    RenderInputMaster,
    DashRecComponent,
    AdminListMasterComponent,
    AdminGridMasterComponent,
    NgxResizeWatcherDirective,
    IndexComponent,
    AppComponent,
    LoginComponent,
    ConfigMenuComponent,
    ConfigTab1Component,
    ConfigTab2Component,
    AdminMaster,
    ContenteditableModel,
    ParentComponent,
    MenuToggleRightComponent,
    AdminInput,
    RenderInput,
    AdminPanel,
    SafePipe,
    Keep,
    ColorPickComponent,
    TableSortDirective,
    DatatableComponent,
    GridListComponent,
    RenderAdmin2,
  ],
  imports: [
    NgxDnDModule,
    NoopAnimationsModule,
    NgGridModule,
    DateTimePickerModule,
    DxDataGridModule,
    GridsterModule,
    NgxDatatableModule,
    ColorPickerModule,
    ColorPickerModule,
    TreeModule,
    TreeTableModule,
    TooltipModule,
    TieredMenuModule,
    ToggleButtonModule,
    ToolbarModule,
    DragulaModule,
    NgxDnDModule,
    BrowserModule,
    OwlModule,
    FormsModule,
    MaterializeModule,
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

    ColorPickerModule,

    TimepickerModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],

  exports: [NgxDnDModule, ColorPickerModule],
  providers: [AdminService, Service, NgxResizeWatcherDirective,
    TranslateService, AuthGuardService, LoginService, AuthGuard, InputMasterService, RenderInputMasterService],

  bootstrap: [AppComponent]
})

export class AppModule {



}
