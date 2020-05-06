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
  
  } else {
      document.getElementById("bottom-nav").classList.remove("fixed-top");
      document.getElementById("top-nav").style.paddingTop = "0px";

  }
}
