// import '../component/club-list.js';
// import '../component/search-bar.js';
// import DataSource from '../data/data-source.js';
import "../component/com-carousel.js";
import "../component/app-navbar.js";
import "../component/app-footer.js";
import "../component/page/About.js";
import "../component/page/home.js";
import "../component/page/Error.js";
import "../component/page/Contact.js";
import "../component/page/Countries.js";


const main = () => {

const router = [
    { path: "", page: "home-page" },
    { path: "about-covid", page: "about-covid" },
    { path: "countries-page", page: "countries-page" },
    { path: "contact-page", page: "contact-page" }
  ];
  
  const setPage = () => {
    const path = window.location.hash.substr(1);
    const route = router.find((route) => route.path === path) || {
      page: "error-page"
    };
  
    document.querySelector("main").innerHTML = "";
    document
      .querySelector("main")
      .appendChild(document.createElement(route.page));
 
  
  document.querySelectorAll("contact").forEach(link => {
    link.addEventListener("contact", setPage())
  })
};
  window.addEventListener("popstate", setPage());
  window.addEventListener("DOMContentLoaded", setPage());
  



};

export default main;
