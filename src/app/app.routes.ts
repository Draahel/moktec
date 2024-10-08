import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: '',  
        loadComponent: () => import('@app/pages/home/home.component').then( c => c.HomeComponent ),
        pathMatch: 'full'
    },
    { 
        //localhost:4200/courses
        path: 'courses',  
        loadComponent: () => import('@app/pages/courses/courses.component').then( c => c.CoursesComponent ),
        pathMatch: 'full'
    },
    { 
        // localhost:4200/course/123456/lesson/123456
        path: 'course/:courseId/lesson/:lessonId',  
        loadComponent: () => import('@app/pages/lesson/lesson.component').then( c => c.LessonComponent ),
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: ''
    }
];
