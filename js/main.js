(() => {
  //this is a self invoking function
  console.log('my JS is workin!!!');

  // select elements with javascript

  // seeting up a variable using the let keyword,
  // and using a css selector to find the element we want to querySelector

  // let stores the reference to element as a variable (in memory)
  let svgGraphic = document.querySelector("#badgeSVG"),
      mainHeadline = document.querySelector(".main-headline"),
      mainText = document.querySelector("#raster-vector h3"),
      swapTextButton = document.querySelector(".switch-type");

  // functions are resuable pieces of CODE
  // that you can run anytime
  function logMyId() {
    console.log(this.id);

    this.style.opacity = 0.5;
  }

  function swapText () {
    mainHeadline.textContent = "Now you're something else!";
    mainHeadline.classList.toggle("selected");

    mainText.textContent = "Game of thrones is over";
    mainText.classList.toggle("selected");
  }


// events always go down here
// when someone clicks on you, this happens
  svgGraphic.addEventListener("click", logMyId);
  swapTextButton.addEventListener("click", swapText);
})();
