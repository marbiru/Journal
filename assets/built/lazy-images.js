!function(){function i(e){e.forEach(function(e){var o;function t(){e.classList.toggle("gh-card-image-invisible",!1),e.classList.toggle("gh-card-image-fadein",!0)}(o=e).complete&&0!==o.naturalWidth||(e.classList.add("gh-card-image-invisible"),e.onload=function(){t()},e.onerror=function(){t()})})}document.body.classList.remove("hide-images");i(document.querySelectorAll(".home-template .gh-card-image img"));var e=document.querySelector(".home-template .gh-feed");const n=document.querySelector(".home-template .gh-loadmore");e&&n&&window.MutationObserver&&new MutationObserver(function(e,o){for(const t of e)"childList"===t.type&&(t.addedNodes&&t.addedNodes.forEach(function(e){i(e.querySelectorAll(".gh-card-image img"))}),n&&n.parentElement||o.disconnect())}).observe(e,{childList:!0})}();
//# sourceMappingURL=lazy-images.js.map