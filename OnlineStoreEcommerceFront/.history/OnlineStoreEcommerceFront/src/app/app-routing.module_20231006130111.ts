import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/homePage/login/login.component';
import { RegisterComponent } from './components/homePage/register/register.component';
import { CategoryListComponent } from './components/adminPage/category-list/category-list.component';
import { CreateCategoryComponent } from './components/adminPage/create-category/create-category.component';
import { UpdateCategoryComponent } from './components/adminPage/update-category/update-category.component';
import { SubCategoryListComponent } from './components/adminPage/sub-category-list/sub-category-list.component';
import { CreateSubCategoryComponent } from './components/adminPage/create-sub-category/create-sub-category.component';
import { UpdateSubCategoryComponent } from './components/adminPage/update-sub-category/update-sub-category.component';
import { CreateSubSubCategoryComponent } from './components/adminPage/create-sub-sub-category/create-sub-sub-category.component';
import { UpdateSubSubCategoryComponent } from './components/adminPage/update-sub-sub-category/update-sub-sub-category.component';
import { ProductDetailsComponent } from './components/adminPage/product-details/product-details.component';
import { UpdateProductComponent } from './components/adminPage/update-product/update-product.component';
import { CreateProductComponent } from './components/adminPage/create-product/create-product.component';
import { ProductListComponent } from './components/adminPage/product-list/product-list.component';
import { UpdateFourthLevelComponent } from './components/adminPage/update-fourth-level/update-fourth-level.component';
import { CreateFourthLevelComponent } from './components/adminPage/create-fourth-level/create-fourth-level.component';
import { FourthLevelListComponent } from './components/adminPage/fourth-level-list/fourth-level-list.component';
import { SubSubCategoryListComponent } from './components/adminPage/sub-sub-category-list/sub-sub-category-list.component';
import { AdminRegistrationComponent } from './components/homePage/admin-registration/admin-registration.component';
import { AdmindashboardComponent } from './components/adminPage/admindashboard/admindashboard.component';
import { CategoryComponent } from './components/homePage/category/category.component';
import { AdminLoginComponent } from './components/homePage/admin-login/admin-login.component';
import { HomeComponent } from './components/homePage/home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"admin-login",component:AdminLoginComponent},
  { path:'register', component: RegisterComponent },
  {path:"admin-registration",component:AdminRegistrationComponent},
  {path:"admindashboard",component:AdmindashboardComponent},
  {path: 'admindashboard/category', component: CategoryListComponent},
  {path: 'admindashboard/create-category', component: CreateCategoryComponent},
   {path: 'update-category/:id', component: UpdateCategoryComponent},
   {path:'categories',component:CategoryComponent},
   {path: 'admindashboard/subcategory', component: SubCategoryListComponent},
   {path: 'admindashboard/create-sub-category', component: CreateSubCategoryComponent},
   {path: 'update-sub-category/:id', component: UpdateSubCategoryComponent},
   {path: 'admindashboard/subsubcategory', component: SubSubCategoryListComponent},
   {path: 'admindashboard/create-sub-sub-category', component: CreateSubSubCategoryComponent},
   {path: 'update-sub-sub-category/:id', component: UpdateSubSubCategoryComponent},
   {path: 'admindashboard/fourthlevelcategory', component:FourthLevelListComponent},
   {path: 'admindashboard/create-fourth-level', component: CreateFourthLevelComponent},
   {path: 'update-fourth-level/:id', component: UpdateFourthLevelComponent},
   {path: 'admindashboard/product', component:ProductListComponent},
   {path: 'admindashboard/create-product', component: CreateProductComponent},
   {path: 'update-product/:id', component: UpdateProductComponent},
   {path: 'product-details/:id', component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
