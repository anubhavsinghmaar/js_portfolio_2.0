/* Progressive enhancement for .carousel: the track scrolls and snaps on its own,
   this adds the previous and next buttons, the progress bar and keyboard steps. */
(function () {
  function setup(carousel) {
    var track = carousel.querySelector('.carousel__track');
    var controls = carousel.querySelector('.carousel__controls');
    var bar = carousel.querySelector('.carousel__bar');
    var buttons = carousel.querySelectorAll('.carousel__button');
    if (!track || !controls || !bar || buttons.length !== 2) return;

    var prev = buttons[0];
    var next = buttons[1];

    function cards() {
      return Array.prototype.slice.call(track.querySelectorAll('.project:not([hidden])'));
    }

    // Scroll to the next card edge rather than a fixed distance, so it stays
    // right when the card width changes or a card is hidden.
    function step(direction) {
      var list = cards();
      var from = track.scrollLeft;
      var target = null;
      for (var i = 0; i < list.length; i++) {
        var left = list[i].offsetLeft;
        if (direction > 0 && left > from + 1) { target = left; break; }
        if (direction < 0 && left < from - 1) { target = left; }
      }
      if (target === null) target = direction > 0 ? track.scrollWidth : 0;
      track.scrollTo({ left: target });
    }

    function update() {
      var max = track.scrollWidth - track.clientWidth;
      controls.hidden = max <= 1;
      if (controls.hidden) return;
      prev.disabled = track.scrollLeft <= 1;
      next.disabled = track.scrollLeft >= max - 1;
      var visible = track.clientWidth / track.scrollWidth;
      bar.style.width = visible * 100 + '%';
      bar.style.transform = 'translateX(' + (track.scrollLeft / max) * (1 - visible) / visible * 100 + '%)';
    }

    prev.addEventListener('click', function () { step(-1); });
    next.addEventListener('click', function () { step(1); });

    track.addEventListener('keydown', function (event) {
      if (event.altKey || event.ctrlKey || event.metaKey) return;
      if (event.key === 'ArrowRight') step(1);
      else if (event.key === 'ArrowLeft') step(-1);
      else if (event.key === 'Home') track.scrollTo({ left: 0 });
      else if (event.key === 'End') track.scrollTo({ left: track.scrollWidth });
      else return;
      event.preventDefault();
    });

    var pending = false;
    track.addEventListener('scroll', function () {
      if (pending) return;
      pending = true;
      requestAnimationFrame(function () {
        pending = false;
        update();
      });
    }, { passive: true });

    if (window.ResizeObserver) new ResizeObserver(update).observe(track);
    else window.addEventListener('resize', update);

    carousel.classList.add('is-ready');
    update();
  }

  document.querySelectorAll('.carousel').forEach(setup);
})();
