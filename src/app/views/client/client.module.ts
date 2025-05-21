import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientLandingComponent } from './client-landing/client-landing.component';
import { ClientRoutingModule } from './client.routing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatNativeDateModule, MatLineModule, MatOptionModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HireComponent } from './hire/hire.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BookZoomComponent } from './book-zoom/book-zoom.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogComponent } from './blog/blog.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { QuillModule } from 'ngx-quill';
import { searchFilterPipe } from 'src/app/pipes/search-filter.pipe';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ClientLandingComponent,
    HireComponent,
    BookZoomComponent,
    PageNotFoundComponent,
    BlogComponent,
    BlogSingleComponent,
    searchFilterPipe,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatLineModule,
    MatListModule,
    MatTabsModule,
    MatTableModule,
    MatRadioModule,
    MatDialogModule,
    MatSelectModule,
    MatTooltipModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatOptionModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    NgbCarouselModule,
    QuillModule.forRoot()
  ]
})
export class ClientModule { }
