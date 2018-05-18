import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGaurdService } from './service/auth-gaurd.service';

export const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGaurdService]
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });