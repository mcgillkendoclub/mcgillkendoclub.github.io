import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { InstructorsPage } from './pages/instructors-page/instructors-page';
import { SignupPage } from './pages/signup-page/signup-page';
import { GalleryPage } from './pages/gallery-page/gallery-page';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomePage },
    { path: 'instructors', component: InstructorsPage },
    { path: 'signup', component: SignupPage },
    { path: 'gallery', component: GalleryPage },
    { path: '**', redirectTo: '/home' }
];
