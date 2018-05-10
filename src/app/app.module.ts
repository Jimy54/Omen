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
import { BranchOfficeEditComponent } from './branch-office-edit/branch-office-edit.component';
import { BranchOfficeDeleteComponent } from './branch-office-delete/branch-office-delete.component';

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
    BranchOfficeDeleteComponent
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
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatTableModule,
    MatDividerModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: "es-ES" },
    EmployerService,
    ProviderService,
    BranchOfficeService,
    FormBuilder
  ],
  bootstrap: [AppComponent],

  entryComponents: [
    EmployerAddComponent,
    EmployerEditComponent,
    EmployerDeleteComponent,
    ProviderAddComponent,
    ProviderDeleteComponent,
    ProviderEditComponent,
    MoveAddComponent,
    BranchOfficeAddComponent,
    InventaryAddComponent,
    CategoryAddComponent
  ]
})
export class AppModule {
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add("app-dark-theme");
  }
}
