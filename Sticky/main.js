(function() {
  let pined = false;
  let nav = document.querySelector(".nav");
  let stickyScrollPoint = document.querySelector(".hero-image").clientHeight;

  function pinedtoTop() {
    if (pined) return;
    nav.classList.add("pined");
    pined = true;
  }

  function unpinfromTop() {
    if (!pined) return;
    nav.classList.remove("pined");
    pined = false;
  }

  window.addEventListener('scroll', function(ev) {
    if (window.scrollY < stickyScrollPoint) return unpinfromTop();
    let coords = nav.getBoundingClientRect();
    if (coords.top <= 0) return pinedtoTop();
    unpinfromTop();
  })

})();
