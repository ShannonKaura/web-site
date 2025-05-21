import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

export { };
declare global {
  interface Window {
    Calendly: any;
  }
}

@Component({
  selector: 'app-book-zoom',
  templateUrl: './book-zoom.component.html',
  styleUrls: ['./book-zoom.component.css']
})
export class BookZoomComponent implements OnInit {

  title = 'YouPro Contact | Book Zoom Meeting';
  public mobile_nav: boolean = false;

  public url = 'https://calendly.com/youprocareers?hide_gdpr_banner=1';

  constructor(
    private titleService: Title,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.bookingCalendar();
  }

  bookingCalendar() {
    window.Calendly.initInlineWidget({
      url: this.url,
      parentElement: document.querySelector('.calendly-inline-widget'),
      prefill: {}
    });
  }

  Close() {
    this.mobile_nav = false;
  }

  ShowMobileMenu() {
    this.mobile_nav = true;
  }


}
