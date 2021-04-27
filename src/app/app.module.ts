import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModuleComponent } from './components/product-module/product-module.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes,RouterModule } from '@angular/router';
import { ViewPropertyComponent } from './components/view-property/view-property.component';

const routes : Routes=[
  {path:'',redirectTo:'/addProperty',pathMatch:'full'}, 
  {path: 'addProperty' , component:ProductModuleComponent},
  {path: 'viewProperty' , component:ViewPropertyComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
    ProductModuleComponent,
    ViewPropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
