import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { InstructorsPage } from './pages/instructors-page/instructors-page';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomePage },
    { path: 'instructors', component: InstructorsPage },
];
