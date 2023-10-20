import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";

export const  HOME_ROUTES: Routes = [
 {
    
    path : '',
    component: HomeComponent
        // loadComponent: () => import('./home.component')
        //                                    .then(c => c.HomeComponent),
 }
]