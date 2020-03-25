import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { CounterComponent } from './components/counter/counter.component';
import { BooksComponent } from './features/books/books.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'shopping',
    component: ShoppingComponent
  },
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
