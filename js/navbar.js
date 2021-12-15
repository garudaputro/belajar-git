// show in scroll navbar mobile
$(function () {
  $(document).scroll(function () {
    var $nav = $("nav");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

// change style navbar desktop

$(function () {
  $(document).scroll(function () {
    var $nav = $(".nav-desktop");
    $nav.toggleClass("scrolled-desktop", $(this).scrollTop() > $nav.height());
  });
});

// active class while scroll tab bar mobile
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");

window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};


// desktop navbar
// const sectionsDesktop = document.querySelectorAll("section");
// const navLiDesktop = document.querySelectorAll(".navbar-desktop .container ul li");
// window.onscroll = () => {
//   var sekarang = "";

//   sectionsDesktop.forEach((section) => {
//     const sectionTopDesktop = section.offsetTop;
//     if (scrollY >= sectionTopDesktop - 60) {
//       sekarang = section.getAttribute("id");
//     }
//   });

//   navLiDesktop.forEach((li) => {
//     li.classList.remove("active-desktop");
//     if (li.classList.contains(sekarang)) {
//       li.classList.add("active-desktop");
//     }
//   });
// };