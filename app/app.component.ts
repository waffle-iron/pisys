/**
 * Created by juancabello on 23/06/16.
 */
import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
/*
 <a [routerLink]="['Dashboard']">Dashboard</a>
 <a [routerLink]="['Heroes']">Heroes</a>
 <router-outlet></router-outlet>
 */
@Component({
    selector: 'pysis-app',
    template: `
    <h1>{{title}}</h1>
    
    `,
    /*styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
    ]*/
})
/*
@RouteConfig([
    {
        path: '/patient-info',
        name: 'PaInf',
        component: 
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    },

])*/
export class AppComponent {
    title = 'Tour of Heroes';
}
