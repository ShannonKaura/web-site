import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BlogImageService } from 'src/app/services/blog-image.service';
import { BlogService } from 'src/app/services/blog.service';
import { BlogCategoryService } from 'src/app/services/blog-category.service';
import { first } from 'rxjs';
import { BlogContentService } from 'src/app/services/blog-content.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public BlogData: any = [];
  public ArrBlogData: any = [];
  public searchText: any = '';
  public recentBlogs: any = [];
  public created_date: Date = new Date;
  public imageSelectedFileBLOB: any;
  public blodImageId = '';
  public image = '';
  public blog_categories: any = [];
  public loading: boolean = false;
  public blogImages: any;

  // public searchFilter: any = '';

  constructor(
    private blogService: BlogService,
    private blogCategoryService: BlogCategoryService,
    private blogImageService: BlogImageService,
    private sanitizer: DomSanitizer,
    private blogContentService: BlogContentService,
  ) { }

  ngOnInit(): void {
    this.getBlogs();
    this.getImages()
    this.getBlogCategories();
  }


  getBlogs(): void {
    this.loading = true;
    this.blogService.getAllBlogs().subscribe(data => {

      data = data.sort(function (a, b) {
        var dateA = new Date(a.created_date).getTime();
        var dateB = new Date(b.created_date).getTime();
        return dateA < dateB ? 1 : -1; // ? -1 : 1 for ascending/increasing order
      });

      this.BlogData = data;
      this.ArrBlogData = data;
      this.recentBlogs = this.ArrBlogData.slice(0, 5);

      this.loading = false;
    })
  }


  getImages() {
    this.blogImageService.getAllBlogImages().subscribe((images: any) => {
      this.blogImages = images;
    })
  }

  getBlogCategories() {
    this.blogCategoryService.getAllBlogCategorys().subscribe((retuned: any) => {
      this.blog_categories = retuned;
    })
  }

  getBlogImage(id: any) {
    this.blogImageService.getBlogImageById(id).subscribe((returned: any) => {
      // coverting base64 string to file

      const url = returned.image;
      const arr = returned.image.split(',');
      const mime = arr[0].match(/:(.*?);/)[1];

      fetch(url)
        .then(res => res.blob())
        .then(blob => {
          const file = new File([blob], returned.filename, { type: mime });

          let url = window.URL.createObjectURL(file);

          this.imageSelectedFileBLOB = this.sanitizer.bypassSecurityTrustUrl(url);
        })
    })
  }

  getBlogImageById(id: any) {
    this.blogImageService.getBlogImageById(id).subscribe((returned: any) => {
      const image_base64 = returned.image;
      const image_name = returned.filename;

      // coverting base64 string to file
      this.imageDataURLtoFile(image_base64, image_name);
    }
    )
  }

  imageDataURLtoFile(dataurl: any, filename: any) {
    const url = dataurl;
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];

    fetch(url)
      .then(res => res.blob())
      .then(blob => {
        const file = new File([blob], filename, { type: mime });

        let url = window.URL.createObjectURL(file);

        this.imageSelectedFileBLOB = this.sanitizer.bypassSecurityTrustUrl(url);
      })
  }

  selectedCategory(category: any) {
    this.searchText = '';
    this.ArrBlogData = this.BlogData.filter((blog: any) => blog.category === category.id);
  }

}
