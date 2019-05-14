(() => {
  //this is a self invoking function
  console.log('my JS is workin!!!');

  // select elements with javascript

  // seeting up a variable using the let keyword,
  // and using a css selector to find the element we want to querySelector

  // let stores the reference to element as a variable (in memory)
  let svgGraphic = document.querySelector("#badgeSVG");

  // functions are resuable pieces of CODE
  // that you can run anytime
  function logMyId() {
    console.log(this.id);

    this.style.opacity = 0.5;
  }

  svgGraphic.addEventListener("click", logMyId)
})();
