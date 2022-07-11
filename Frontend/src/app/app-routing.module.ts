import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClothingComponent } from './components/clothing-area/add-clothing/add-clothing.component';
import { ClothingListComponent } from './components/clothing-area/clothing-list/clothing-list.component';

const routes: Routes = [
    {path: "clothing", component: ClothingListComponent},
    {path: "clothing/new", component: AddClothingComponent},
    {path: "", redirectTo: "clothing", pathMatch: "full"}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
