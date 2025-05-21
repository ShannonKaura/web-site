import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogContent } from 'src/app/models/blog-content';
import { BlogImage } from 'src/app/models/blog-image';
import { BlogCategoryService } from 'src/app/services/blog-category.service';
import { BlogContentService } from 'src/app/services/blog-content.service';
import { BlogImageService } from 'src/app/services/blog-image.service';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.css']
})
export class BlogSingleComponent implements OnInit {

  public BlogData: any = [];
  public ArrBlogData: any = [];
  public searchText: any = '';
  public blog: any;
  public posted_date: any;
  public blog_categories: any = [];
  public recentBlogs: any = [];
  public show_single_blog = true;
  public loading: boolean = true;
  public all_blogs_loading: boolean = false;
  public preview: any = null;
  public content = [];
  public blogImage: BlogImage | any;
  public blogContent: BlogContent | any;
  public blogImages: any;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private blogCategoryService: BlogCategoryService,
    private blogImageService: BlogImageService,
    private blogContentService: BlogContentService,
  ) {
  }

  ngOnInit(): void {
    this.getBlog();
    this.getBlogCategories();
    this.getBlogs();
    this.initBlog();
    this.getImages();
  }

  initBlog() {
    this.blog = {
      _id: '',
      title: '',
      tags: [],
      caption: '',
      photo_id: '',
      content_id: '',
      posted: '',
      author: '',
      category: "",
      created_date: new Date(Date.now()).getTime() / 1000,
      edited_by: '',
      edited_date: ""
    }

    this.blogImage = {
      _id: '',
      image: '',
      filename: ''
    }

    this.blogContent = {
      _id: '',
      content: ''
    }
  }

  getBlog() {
    this.loading = true;
    const blogId = this.route.snapshot.paramMap.get('id');

    this.blogService.getBlogById(blogId).subscribe((returned: any) => {
      this.blog = returned;

      this.posted_date = this.blog.created_date;

      var timestamp = this.blog.created_date;
      this.posted_date = new Date(timestamp);

      // get image
      this.getBlogImage(this.blog.photo_id);

      // get content
      this.getBlogContent(this.blog.content_id)

      this.loading = false;
    })
  }

  getBlogImage(image_id: any) {
    this.blogImageService.getBlogImageById(image_id).subscribe((returned_image_data: any) => {

      // preview image
      this.preview = returned_image_data.image;
    })
  }

  getBlogContent(content_id: any) {
    this.blogContentService.getBlogContentById(content_id).subscribe((returned_content: any) => {
      this.content = returned_content.content;
    })
  }


  getBlogCategories() {
    this.blogCategoryService.getAllBlogCategorys().subscribe((retuned: any) => {
      this.blog_categories = retuned;
    })
  }

  getBlogs(): void {
    this.all_blogs_loading = true;
    this.blogService.getAllBlogs().subscribe(data => {

      data = data.sort(function (a, b) {
        var dateA = new Date(a.created_date).getTime();
        var dateB = new Date(b.created_date).getTime();
        return dateA < dateB ? 1 : -1; // ? -1 : 1 for ascending/increasing order
      });

      this.BlogData = data;
      this.ArrBlogData = data;
      this.recentBlogs = data.slice(0, 5);
      this.all_blogs_loading = false;
    })
  }

  getImages() {
    this.blogImageService.getAllBlogImages().subscribe((images: any) => {
      this.blogImages = images;
    })
  }


  public viewBlog() {
    this.show_single_blog = true;
    this.searchText = '';
  }

  selectedCategory(category: any) {
    this.searchText = '';
    this.show_single_blog = false;
    this.ArrBlogData = this.BlogData.filter((blog: any) => blog.category === category.id);
  }

  keySearch(event: any) {
    if (this.searchText.length === 0) {
      this.show_single_blog = true;
    } else {
      this.show_single_blog = false;
    }
  }

}
