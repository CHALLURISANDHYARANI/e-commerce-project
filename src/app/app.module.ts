import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule, Routes } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { environment } from 'src/environments/environment.development';

import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { ProductsComponent } from './products/products.component';
import { OrderComponent } from './admin/order/order.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { CategoryComponent } from './admin/category/category.component';
import { ProductComponent } from './admin/product/product.component';
import { OrdersuccessComponent } from './ordersuccess/ordersuccess.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminGuardService } from './guards/admin.guard';
import { AuthGuardService } from './guards/auth.guard';
import { OrderService } from './services/order.service';
import { shoppingCartItemService } from './services/shopping.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'my-orders', component: MyOrdersComponent, canActivate: [AdminGuardService, AuthGuardService] },
  { path: 'admin/category', component: CategoryComponent, canActivate: [AdminGuardService, AuthGuardService] },
  { path: 'admin/product', component: ProductComponent, canActivate: [AdminGuardService, AuthGuardService] },
  { path: 'admin/order', component: OrderComponent, canActivate: [AdminGuardService, AuthGuardService] },
  { path: 'ordersuccess', component: OrdersuccessComponent },
  { path: 'orderdetails/:id', component: OrderdetailsComponent },
  { path: 'unauthorized', component: UnauthorizedComponent }

]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    CategoryComponent,
    ProductComponent,
    RegisterComponent,
    ProductComponent,
    ProductsComponent,
    MyOrdersComponent,
    OrderComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    OrdersuccessComponent,
    OrderdetailsComponent,
    UnauthorizedComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right' }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    RouterModule.forRoot(routes),
  ],
  providers: [AuthService, CategoryService, ProductService, shoppingCartItemService, OrderService, AdminGuardService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
