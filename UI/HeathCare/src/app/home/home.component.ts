import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as bootstrap from 'bootstrap';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent implements AfterViewInit {

  
  @ViewChild('multipleCardCarousel', { static: false })
  multipleCardCarousel!: ElementRef;

  ngAfterViewInit(): void {
    const carouselElement = this.multipleCardCarousel.nativeElement;

    if (window.matchMedia('(min-width: 576px)').matches) {
      const carousel = new bootstrap.Carousel(carouselElement, {
        interval: false
      });
      const carouselWidth = $('.carousel-inner')[0].scrollWidth;
      const cardElement = $('.carousel-item')[0];
      const cardWidth = cardElement ? $(cardElement).width() : undefined;
      let scrollPosition = 0;

      if (cardWidth !== undefined) {
        $('#carouselExampleControls .carousel-control-next').on('click', () => {
          if (scrollPosition < carouselWidth - cardWidth * 2.5) {
            scrollPosition += cardWidth;
            $('#carouselExampleControls .carousel-inner').animate(
              { scrollLeft: scrollPosition },
              600
            );
          }
        });

        $('#carouselExampleControls .carousel-control-prev').on('click', () => {
          if (scrollPosition > 0) {
            scrollPosition -= cardWidth;
            $('#carouselExampleControls .carousel-inner').animate(
              { scrollLeft: scrollPosition },
              600
            );
          }
        });
      }
    } else {
      $(carouselElement).addClass('slide');
      
    }
   
  }
  
}
