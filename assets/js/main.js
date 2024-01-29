function initSlider() {
  var slider = tns({
    container: ".elementor-top-container",
    controls: true,
    speed: 400,
    nav: true,
    controlsText: [
      '<span><img src="./assets/img/button-prev.svg" alt="" /></span>',
      '<span><img src="./assets/img/button-next.svg" alt="" /></span>',
    ],
  });
}

window.onload = (event) => {
  initSlider();
};
