// Initialize medium zoom.
$(document).ready(function () {
  medium_zoom = mediumZoom("[data-zoomable]", {
    background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee", // + 'ee' for trasparency.
  });

  // Toggle letterbox below profile pic on click
  $(".profile figure img").on("click", function () {
    $(this).closest(".profile").find(".profile-letterbox-wrapper").slideToggle(200);
  });
});
