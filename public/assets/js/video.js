/* Background videos in the hero and the footer. They carry no information, so
   they load only when close to view, and not at all for anyone who asks for
   less motion or is saving data. The poster image stands in for them. */
(function () {
  var videos = document.querySelectorAll('video.ambient');
  if (!videos.length) return;

  var motion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
  var connection = navigator.connection || {};
  if ((motion && motion.matches) || connection.saveData) return;

  function play(video) {
    if (!video.getAttribute('src')) video.setAttribute('src', video.dataset.src);
    var started = video.play();
    if (started && started.catch) started.catch(function () { /* the poster stays */ });
  }

  if (!('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(videos, play);
    return;
  }

  var watcher = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) play(entry.target);
      else if (entry.target.getAttribute('src')) entry.target.pause();
    });
  }, { rootMargin: '250px' });

  Array.prototype.forEach.call(videos, function (video) { watcher.observe(video); });
})();
