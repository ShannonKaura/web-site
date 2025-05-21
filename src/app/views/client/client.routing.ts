import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLayoutComponent } from 'src/app/layouts/client-layout/client-layout/client-layout.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { BlogComponent } from './blog/blog.component';
import { BookZoomComponent } from './book-zoom/book-zoom.component';
import { ClientLandingComponent } from './client-landing/client-landing.component';
import { HireComponent } from './hire/hire.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const ClientRoutes: Routes = [
    {
        path: '', component: ClientLandingComponent
    },
    {
        path: '', component: ClientLayoutComponent, children: [
            {
                path: 'hire', component: HireComponent
            },
            {
                path: 'book-meeting', component: BookZoomComponent
            },
            {
                path: 'blog', component: BlogComponent
            },
            {
                path: 'blog/:id', component: BlogSingleComponent
            },
            {
                path: 'page-not-found', component: PageNotFoundComponent
            },
            {
                path: '**', component: PageNotFoundComponent
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(ClientRoutes)],
    exports: [RouterModule]
})
export class ClientRoutingModule { }
