const customViewHeight = function() {

  let activeElement = document.activeElement;
  let inputs = ['input', 'select', 'button', 'textarea'];
  let afreq_init;
  let afreq;
  let resizeTimer;

  let navHeight = document.getElementById('menu-mobile').offsetHeight + 'px';
  document.documentElement.style.setProperty('--nch', navHeight);

  let menuHeight = document.getElementById('nav-site').offsetHeight + 'px';
  document.documentElement.style.setProperty('--mch', menuHeight);

  let headerHeight = document.getElementById('header-site').offsetHeight + 'px';
  document.documentElement.style.setProperty('--hch', headerHeight);

  let footerBusInfoHeight = document.getElementById('footer-busInfo').offsetHeight + 'px';
  document.documentElement.style.setProperty('--fbch', footerBusInfoHeight);

  const customViewHeightNav = function() {
    if (activeElement && inputs.indexOf(activeElement.tagName.toLowerCase()) !== -1) {
      // focus is on input / keyboard is showing then use regular vh
      let ncvh = '1vh';
      document.documentElement.style.setProperty('--ncvh', ncvh);
    } else {
      let ncvh = window.innerHeight / 100 + 'px';
      document.documentElement.style.setProperty('--ncvh', ncvh);
    }

    // run this in a loop on mobile until the user scrolls so the first repositioning stays smooth.
    if (window.matchMedia("(min-width: 749px)").matches) {
      return;
    } else {
      afreq_init = requestAnimationFrame(customViewHeightNav);
    }
  }

  const customViewHeightNavAnimate = function() {
    cancelAnimationFrame(afreq_init);
    let navHeight = document.getElementById('menu-mobile').offsetHeight + 'px';
    document.documentElement.style.setProperty('--nch', navHeight);

    let menuHeight = document.getElementById('nav-site').offsetHeight + 'px';
    document.documentElement.style.setProperty('--mch', menuHeight);

    if (activeElement && inputs.indexOf(activeElement.tagName.toLowerCase()) !== -1) {
      // focus is on input / keyboard is showing then use regular vh
      let ncvh = '1vh';
      document.documentElement.style.setProperty('--ncvh', ncvh);
    } else {
      let ncvh = window.innerHeight / 100 + 'px';
      document.documentElement.style.setProperty('--ncvh', ncvh);
    }

    afreq = requestAnimationFrame(customViewHeightNavAnimate);
  }

  const customViewHeightMain = function () {

    if (activeElement && inputs.indexOf(activeElement.tagName.toLowerCase()) !== -1) {
      // focus is on input / keyboard is showing then use regular vh
      let cvh = '1vh';
      document.documentElement.style.setProperty('--cvh', cvh);
    } else {
      let cvh = window.innerHeight / 100 + 'px';
      document.documentElement.style.setProperty('--cvh', cvh);
    }
  }

  customViewHeightMain();
  customViewHeightNav();

  window.addEventListener('resize', function() {
    // prevent infinite loop of animation frame requests
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      cancelAnimationFrame(afreq);
    }, 1000);
    customViewHeightNavAnimate();
  });

  window.addEventListener('orientationchange', function() {
    customViewHeightMain();
    // prevent infinite loop of animation frame requests
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      cancelAnimationFrame(afreq);
    }, 1000);
    customViewHeightNavAnimate();
  });
}

customViewHeight();

