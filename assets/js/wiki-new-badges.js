(function () {
  "use strict";

  var badges = document.querySelectorAll(".wiki-new-badge[data-published-at]");
  if (!badges.length) return;

  var lifetime = 72 * 60 * 60 * 1000;
  var timestampPattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/;
  var timer;

  function updateBadges() {
    window.clearTimeout(timer);
    if (document.hidden) return;

    var now = Date.now();
    var nextChange = Infinity;

    Array.prototype.forEach.call(badges, function (badge) {
      var timestamp = badge.getAttribute("data-published-at") || "";
      var publishedAt = timestampPattern.test(timestamp) ? Date.parse(timestamp) : NaN;
      var expiresAt = publishedAt + lifetime;

      badge.hidden = !(publishedAt <= now && now < expiresAt);

      if (publishedAt > now) {
        nextChange = Math.min(nextChange, publishedAt - now);
      } else if (expiresAt > now) {
        nextChange = Math.min(nextChange, expiresAt - now);
      }
    });

    // Expire open-page badges on time, and periodically recheck the local clock.
    if (nextChange !== Infinity) {
      timer = window.setTimeout(updateBadges, Math.min(nextChange, 60000));
    }
  }

  updateBadges();
  document.addEventListener("visibilitychange", updateBadges);
  window.addEventListener("pageshow", updateBadges);
}());
