import { ModuleWithProviders, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// Importar componentes
import { EmployersComponent } from "./employers/employers.component";
import { ProvidersComponent } from "./providers/providers.component";
import { MovesComponent } from "./moves/moves.component";
import { MenuComponent } from "./menu/menu.component";
import { BranchOfficeComponent } from "./branch-office/branch-office.component";
import { InventariesComponent } from "./inventaries/inventaries.component";
import { CategoryComponent } from "./category/category.component";
import { RegisterComponent } from "./register/register.component";
import { BusinessComponent } from "./business/business.component";
import { LoginComponent } from "./login/login.component";
import { InvoiceComponent } from "./invoice/invoice.component";
import { LoginEmployeeComponent } from "./login-employee/login-employee.component";
import { PurchaseComponent } from "./purchase/purchase.component";
import { BranchOfficeInventaryComponent } from "./branch-office-inventary/branch-office-inventary.component";
import { SettingsComponent } from "./settings/settings.component";
import { PrincipalComponent } from "./principal/principal.component";
import { NavigationComponent } from "./navigation/navigation.component";

const appRoutes: Routes = [
  {
    path: "empleados",
    component: EmployersComponent
  },
  {
    path: "proveedores",
    component: ProvidersComponent
  },
  {
    path: "movimientos",
    component: MovesComponent
  },
  {
    path: "menu",
    component: MenuComponent
  },
  {
    path: "sucursales",
    component: BranchOfficeComponent
  },
  {
    path: "productos",
    component: InventariesComponent
  },
  {
    path: "categorias",
    component: CategoryComponent
  },
  {
    path: "registro",
    component: RegisterComponent
  },
  {
    path: "empresas",
    component: BusinessComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "facturas",
    component: InvoiceComponent
  },
  {
    path: "loginEmpleado",
    component: LoginEmployeeComponent
  },
  {
    path: "compras",
    component: PurchaseComponent
  },
  {
    path: "inventarioSucursal",
    component: BranchOfficeInventaryComponent
  },
  {
    path: "settings",
    component: SettingsComponent
  },
  {
    path: "",
    component: PrincipalComponent
  },
  {
    path: "Navegacion",
    component: NavigationComponent
  },
  {
    path: "**",
    component: PrincipalComponent
  }
];

export const appRoutingProvider: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
