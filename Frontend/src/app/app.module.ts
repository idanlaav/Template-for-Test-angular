import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { ClothingListComponent } from './components/clothing-area/clothing-list/clothing-list.component';
import { AddClothingComponent } from './components/clothing-area/add-clothing/add-clothing.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http"

@NgModule({
  declarations: [
    LayoutComponent,
    ClothingListComponent,
    AddClothingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
