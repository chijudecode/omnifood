///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
const yearEl = document.querySelector(".year");
const btnNav = document.querySelector(".main-nav-btn");
const header = document.querySelector(".header");
const aEl = document.querySelectorAll("a:link");
const heroEl = document.querySelector(".hero");

// Sticky Nav Implementation
function callBack(entries, observer) {
  const ent = entries[0];
  if (!ent.isIntersecting) {
    header.classList.add("sticky");
    heroEl.classList.add("hero-margin-top");
  } else {
    header.classList.remove("sticky");
    heroEl.classList.remove("hero-margin-top");
  }
}
const observer = new IntersectionObserver(callBack, {
  root: null,
  threshold: 0,
});

observer.observe(heroEl);

aEl.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const href = el.getAttribute("href");

    // Scroll to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Scroll to sections
    if (href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href);
      console.log(section);
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    // Remove main-nav on mobile
    if (el.classList.contains("main-nav-link"))
      header.classList.toggle("nav-open");
  });
});

const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// NAV FUNCTIONALITY
btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
