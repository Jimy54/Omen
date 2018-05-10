import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// Importar componentes
import { EmployersComponent } from "./employers/employers.component";
import { ProvidersComponent } from "./providers/providers.component";
import { MovesComponent } from "./moves/moves.component";
import { MenuComponent } from "./menu/menu.component";
import { BranchOfficeComponent } from "./branch-office/branch-office.component";
import { InventariesComponent } from "./inventaries/inventaries.component";
import { CategoryComponent } from "./category/category.component";

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
  }
];

export const appRoutingProvider: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
