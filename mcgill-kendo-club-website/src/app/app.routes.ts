import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { InstructorsPage } from './pages/instructors-page/instructors-page';
import { SignupPage } from './pages/signup-page/signup-page';
import { GalleryPage } from './pages/gallery-page/gallery-page';
import { AboutKendoPage } from './pages/about-kendo-page/about-kendo-page';
import { AnnouncementsPage } from './pages/announcements-page/announcements-page';
import { CalendarPage } from './pages/calendar-page/calendar-page';
import { TournamentResultsPage } from './pages/tournament-results-page/tournament-results-page';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomePage },
    { path: 'instructors', component: InstructorsPage },
    { path: 'signup', component: SignupPage },
    //{ path: 'gallery', component: GalleryPage },
    { path: 'kendo', component: AboutKendoPage},
    { path: 'announcements', component: AnnouncementsPage },
    { path: 'calendar', component: CalendarPage },
    //{ path: 'tournament-results', component: TournamentResultsPage },
    { path: '**', redirectTo: '/home' }
];
