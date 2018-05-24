import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { OverlayContainer } from "@angular/cdk/overlay";
import { HttpClientModule } from "@angular/common/http";

//Components
import { AppComponent } from "./app.component";
import { EmployersComponent } from "./employers/employers.component";

//Angular Material
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { MatSelectModule } from "@angular/material/select";
import { MatCardModule } from "@angular/material/card";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from "@angular/material/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatListModule } from "@angular/material/list";
//Routes
import { routing } from "./app.routing";
import { ProvidersComponent } from "./providers/providers.component";
import { MovesComponent } from "./moves/moves.component";
import { BusinessComponent } from "./business/business.component";
import { MenuComponent } from "./menu/menu.component";
import { EmployerAddComponent } from "./employer-add/employer-add.component";
import { ProviderAddComponent } from "./provider-add/provider-add.component";
import { MoveAddComponent } from "./move-add/move-add.component";
import { BranchOfficeComponent } from "./branch-office/branch-office.component";
import { BranchOfficeAddComponent } from "./branch-office-add/branch-office-add.component";
import { InventariesComponent } from "./inventaries/inventaries.component";
import { InventaryAddComponent } from "./inventary-add/inventary-add.component";
import { CategoryComponent } from "./category/category.component";
import { CategoryAddComponent } from "./category-add/category-add.component";
import { EmployerService } from "./service/employer.service";
import { ProviderService } from "./service/provider.service";
import { EmployerEditComponent } from "./employer-edit/employer-edit.component";
import { EmployerDeleteComponent } from "./employer-delete/employer-delete.component";
import { BranchOfficeService } from "./service/branch-office.service";
import { ProviderEditComponent } from "./provider-edit/provider-edit.component";
import { ProviderDeleteComponent } from "./provider-delete/provider-delete.component";
import { BranchOfficeEditComponent } from "./branch-office-edit/branch-office-edit.component";
import { BranchOfficeDeleteComponent } from "./branch-office-delete/branch-office-delete.component";
import { InventaryService } from "./service/inventary.service";
import { InventaryEditComponent } from "./inventary-edit/inventary-edit.component";
import { InventaryDeleteComponent } from "./inventary-delete/inventary-delete.component";
import { CategoryEditComponent } from "./category-edit/category-edit.component";
import { CategoryDeleteComponent } from "./category-delete/category-delete.component";
import { CategoryService } from "./service/category.service";
import { FilterInventaryPipe } from "./filter-inventary.pipe";
import { RegisterComponent } from "./register/register.component";
import { AuthService } from "./service/auth-service.service";
import { LoginComponent } from "./login/login.component";
import { UploadService } from "./service/upload.service";
import { SendToken } from "./service/SendToken.service";
import { BusinessService } from "./service/business.service";
import { InvoiceComponent } from "./invoice/invoice.component";
import { LoginEmployeeComponent } from "./login-employee/login-employee.component";
import { PurchaseComponent } from "./purchase/purchase.component";
import { BranchOfficeInventaryComponent } from "./branch-office-inventary/branch-office-inventary.component";
import { BranchOfficeInventaryEditComponent } from "./branch-office-inventary-edit/branch-office-inventary-edit.component";
import { BranchOfficeInventaryDeleteComponent } from "./branch-office-inventary-delete/branch-office-inventary-delete.component";
import { BranchOfficeInventaryAddComponent } from "./branch-office-inventary-add/branch-office-inventary-add.component";
import { BranchOfficeInventaryService } from "./service/branch-office-inventary.service";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { SettingsComponent } from "./settings/settings.component";
import { PrincipalComponent } from "./principal/principal.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { NgxBarcodeModule } from "ngx-barcode";
import { MatTabsModule } from "@angular/material/tabs";
import { StatisticsComponent } from "./statistics/statistics.component";
import { MovesService } from "./service/moves.service";
import { MoveEditComponent } from "./move-edit/move-edit.component";
import { MoveDeleteComponent } from "./move-delete/move-delete.component";
import { ToastServiceService } from "./service/toast-service.service";
//Themes Angular

@NgModule({
  declarations: [
    AppComponent,
    EmployersComponent,
    ProvidersComponent,
    MovesComponent,
    BusinessComponent,
    MenuComponent,
    EmployerAddComponent,
    ProviderAddComponent,
    MoveAddComponent,
    BranchOfficeComponent,
    BranchOfficeAddComponent,
    InventariesComponent,
    InventaryAddComponent,
    CategoryComponent,
    CategoryAddComponent,
    EmployerEditComponent,
    EmployerDeleteComponent,
    ProviderEditComponent,
    ProviderDeleteComponent,
    BranchOfficeEditComponent,
    BranchOfficeDeleteComponent,
    InventaryEditComponent,
    InventaryDeleteComponent,
    CategoryEditComponent,
    CategoryDeleteComponent,
    FilterInventaryPipe,
    RegisterComponent,
    LoginComponent,
    InvoiceComponent,
    LoginEmployeeComponent,
    PurchaseComponent,
    BranchOfficeInventaryComponent,
    BranchOfficeInventaryEditComponent,
    BranchOfficeInventaryDeleteComponent,
    BranchOfficeInventaryAddComponent,
    SettingsComponent,
    PrincipalComponent,
    NavigationComponent,
    StatisticsComponent,
    MoveEditComponent,
    MoveDeleteComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatTabsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    NgxBarcodeModule,
    MatListModule,
    MatDatepickerModule,
    MatTableModule,
    MatDividerModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatGridListModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: "es-ES" },
    EmployerService,
    ProviderService,
    InventaryService,
    CategoryService,
    BranchOfficeService,
    AuthService,
    UploadService,
    SendToken,
    MovesService,
    FormBuilder,
    ToastServiceService,
    BusinessService,
    BranchOfficeInventaryService
  ],
  bootstrap: [AppComponent],

  entryComponents: [
    EmployerAddComponent,
    EmployerEditComponent,
    InventaryAddComponent,
    EmployerDeleteComponent,
    ProviderAddComponent,
    ProviderDeleteComponent,
    ProviderEditComponent,
    MoveAddComponent,
    BranchOfficeEditComponent,
    InventaryDeleteComponent,
    BranchOfficeAddComponent,
    BranchOfficeDeleteComponent,
    InventaryAddComponent,
    InventaryEditComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    CategoryDeleteComponent,
    BranchOfficeInventaryAddComponent,
    BranchOfficeInventaryComponent,
    BranchOfficeEditComponent,
    BranchOfficeInventaryDeleteComponent,
    BranchOfficeInventaryEditComponent,
    BranchOfficeInventaryDeleteComponent,
    MoveAddComponent,
    MoveEditComponent,
    MoveDeleteComponent
  ]
})
export class AppModule {
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add("app-dark-theme");
  }
}
