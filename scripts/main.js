window.onscroll = function () {
  scrollFunction();
};

window.onresize = function () {
  scrollFunction();
};

function scrollFunction() {
  var w = window.innerWidth;

  if (document.body.scrollTop > 54 || document.documentElement.scrollTop > 54) {
    document.getElementById("bottom-nav").classList.add("fixed-top");
      document.getElementById("top-nav").style.paddingTop = "70px";
    //   document.getElementById("navbar").classList.remove("height-lg");
    //   document.getElementById("logo").classList.remove("logo-lg");
    //   document.getElementById("weather-bar").classList.remove("weather-bar-lg");
    //   document.getElementById("menu-a").classList.remove("menu-a-lg");
    //   document.getElementById("menu-bar").classList.add("menu-bar-top");
    //   document.getElementById("weather-date").classList.remove("d-lg-block");
  } else {
      document.getElementById("bottom-nav").classList.remove("fixed-top");
      document.getElementById("top-nav").style.paddingTop = "0px";
    //   document.getElementById("navbar").classList.add("height-lg");
    //   document.getElementById("logo").classList.add("logo-lg");
    //   document.getElementById("weather-bar").classList.add("weather-bar-lg");
    //   document.getElementById("menu-a").classList.add("menu-a-lg");
    //   document.getElementById("menu-bar").classList.remove("menu-bar-top");
    //   document.getElementById("weather-date").classList.add("d-lg-block");
  }
}
