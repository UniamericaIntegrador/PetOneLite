import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { LoginComponent } from './components/default/login/login.component';
import { DashboardComponent } from './components/default/dashboard/dashboard.component';
import { TaskFormComponent } from './components/default/task-form/task-form.component';

export const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "user", component: DashboardComponent, children:[
        { path: "task", component: TaskFormComponent}
    ]}
]