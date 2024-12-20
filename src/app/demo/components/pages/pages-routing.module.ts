import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [RouterModule.forChild([
        { path: 'Employees', loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule), },
        { path: 'empty', loadChildren: () => import('./empty/emptydemo.module').then(m => m.EmptyDemoModule) },
        { path: '**', redirectTo: '/Employees' }
    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
