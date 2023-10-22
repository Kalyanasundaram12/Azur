import { Component, OnInit } from '@angular/core';
import * as ScrollReveal from 'scrollreveal';
import Swiper from 'swiper';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navItem = document.querySelectorAll('.nav__item');
    const header = document.getElementById('header');

    // Initialize ScrollReveal
    const sr = ScrollReveal();

    // Define your ScrollReveal animations
    sr.reveal('.hero__content, .about__content');
    sr.reveal('.hero__img', { origin: 'top' });

    sr.reveal(
      '.hero__info-wrapper, .skills__title, .skills__content, .qualification__name, .qualification__item, .service__card, .project__content, .testimonial__wrapper, .footer__content',
      {
        delay: 500,
        interval: 100,
      }
    );

    sr.reveal('.qualification__footer-text, .contact__content', {
      origin: 'left',
    });

    sr.reveal('.qualification__footer .btn, .contact__btn', { origin: 'right' });

    if (navToggle) {
      navToggle.addEventListener('click', () => {
        if (navMenu) {
          navMenu.classList.toggle('nav__menu--open');
          changeIcon();
        }
      });

      navItem.forEach((item: Element) => {
        item.addEventListener('click', () => {
          if (navMenu && navMenu.classList.contains('nav__menu--open')) {
            navMenu.classList.remove('nav__menu--open');
            changeIcon();
          }
        });
      });

      function changeIcon() {
        if (navToggle && navMenu) {
          navToggle.classList.replace('ri-menu-3-line', 'ri-close-line');
        } else {
          console.warn("Element with id 'nav-toggle' or 'nav-menu' not found.");
        }
      }
    } else {
      console.warn("Element with id 'nav-toggle' not found.");
    }

    if (header) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
          header.classList.add('header--scroll');
        } else {
          header.classList.remove('header--scroll');
        }
      });
    } else {
      console.warn("Element with id 'header' not found.");
    }

    // Testimonial Slide
    const testimonialSlide = new Swiper('.testimonial__wrapper', {
      loop: true,
      spaceBetween: 30,
      centeredSlides: true,
      effect: 'coverflow',
      grabCursor: true,
      slidesPerView: 1,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        520: {
          slidesPerView: 'auto',
        },
      },
    });
  }
}
