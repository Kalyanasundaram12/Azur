import { Component, OnInit } from '@angular/core';
import * as ScrollReveal from 'scrollreveal';

interface ScrollRevealObject {
  reveal: (selector: string, options?: any) => void;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navItem = document.querySelectorAll(".nav__item");
    const header = document.getElementById("header");
    const sr: ScrollRevealObject = ScrollReveal({
      duration: 2000,
      distance: '100px',
      delay: 400,
      reset: false,
    });

    sr.reveal('.hero__img', { origin: 'top' });

    // Check for 'navToggle' element
    if (navToggle) {
      // open and close menu
      navToggle.addEventListener("click", () => {
        if (navMenu) {
          navMenu.classList.toggle("nav__menu--open");
          changeIcon();
        }
      });

      // close the menu when the user clicks the nav links
      navItem.forEach((item) => {
        item.addEventListener("click", () => {
          if (navMenu && navMenu.classList.contains("nav__menu--open")) {
            navMenu.classList.remove("nav__menu--open");
            changeIcon();
          }
        });
      });

      // Change nav toggle icon
      function changeIcon() {
        if (navMenu) {
          if (navToggle && navMenu) {
            navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
          } else {
            console.warn("Element with id 'nav-toggle' or 'nav-menu' not found.");
          }
        }
      }
    } else {
      console.warn("Element with id 'nav-toggle' not found.");
    }

    // Check for 'header' element
    if (header) {
      // header scroll animation
      window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
          header.classList.add("header--scroll");
        } else {
          header.classList.remove("header--scroll");
        }
      });
    } else {
      console.warn("Element with id 'header' not found.");
    }

    // Initialize ScrollReveal animations
    sr.reveal(".hero_content, .about_content");
    sr.reveal(".hero__img", { origin: "top" });

    sr.reveal(
      ".hero_info-wrapper, .skillstitle, .skillscontent, .qualificationname, .qualificationitem, .servicecard, .projectcontent, .testimonialwrapper, .footer_content",
      {
        delay: 500,
        interval: 100,
      }
    );

    sr.reveal(".qualification_footer-text, .contact_content", {
      origin: "left",
    });

    sr.reveal(".qualification_footer .btn, .contact_btn", { origin: "right" });
  }
}
import { Component, OnInit } from '@angular/core';
import * as ScrollReveal from 'scrollreveal';

interface ScrollRevealObject {
  reveal: (selector: string, options?: any) => void;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navItem = document.querySelectorAll(".nav__item");
    const header = document.getElementById("header");
    const sr: ScrollRevealObject = ScrollReveal({
      duration: 2000,
      distance: '100px',
      delay: 400,
      reset: false,
    });

    sr.reveal('.hero__img', { origin: 'top' });

    // Check for 'navToggle' element
    if (navToggle) {
      // open and close menu
      navToggle.addEventListener("click", () => {
        if (navMenu) {
          navMenu.classList.toggle("nav__menu--open");
          changeIcon();
        }
      });

      // close the menu when the user clicks the nav links
      navItem.forEach((item) => {
        item.addEventListener("click", () => {
          if (navMenu && navMenu.classList.contains("nav__menu--open")) {
            navMenu.classList.remove("nav__menu--open");
            changeIcon();
          }
        });
      });

      // Change nav toggle icon
      function changeIcon() {
        if (navMenu) {
          if (navToggle && navMenu) {
            navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
          } else {
            console.warn("Element with id 'nav-toggle' or 'nav-menu' not found.");
          }
        }
      }
    } else {
      console.warn("Element with id 'nav-toggle' not found.");
    }

    // Check for 'header' element
    if (header) {
      // header scroll animation
      window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
          header.classList.add("header--scroll");
        } else {
          header.classList.remove("header--scroll");
        }
      });
    } else {
      console.warn("Element with id 'header' not found.");
    }

    // Initialize ScrollReveal animations
    sr.reveal(".hero_content, .about_content");
    sr.reveal(".hero__img", { origin: "top" });

    sr.reveal(
      ".hero_info-wrapper, .skillstitle, .skillscontent, .qualificationname, .qualificationitem, .servicecard, .projectcontent, .testimonialwrapper, .footer_content",
      {
        delay: 500,
        interval: 100,
      }
    );

    sr.reveal(".qualification_footer-text, .contact_content", {
      origin: "left",
    });

    sr.reveal(".qualification_footer .btn, .contact_btn", { origin: "right" });
  }
}

main-page.component.ts
