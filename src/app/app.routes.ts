import { Routes } from '@angular/router';
import { TodosComponent } from './pages/todos/todos.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    {
        path: '',
        component: TodosComponent,
        title: "Todos"
    },
    {
        path: 'about',
        component: AboutComponent,
        title: "About Us"
    },
];
