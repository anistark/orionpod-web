document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
  );

  document
    .querySelectorAll(".fade-in, .fade-in-left, .fade-in-right")
    .forEach((el) => observer.observe(el));

  // Video demo mute/unmute
  const muteBtn = document.getElementById("video-mute-toggle");
  const demoIframe = document.getElementById("demo-video");
  if (muteBtn && demoIframe) {
    let isMuted = true;

    muteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      isMuted = !isMuted;
      const command = isMuted ? "mute" : "unMute";
      demoIframe.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: command }),
        "*",
      );
      muteBtn.querySelector("iconify-icon").setAttribute(
        "icon",
        isMuted ? "mdi:volume-off" : "mdi:volume-high",
      );
      muteBtn.setAttribute("aria-label", isMuted ? "Unmute video" : "Mute video");
      muteBtn.setAttribute("title", isMuted ? "Unmute" : "Mute");
    });
  }

  // Screenshot carousel
  const track = document.querySelector(".carousel-track");
  if (!track) return;

  let scrollPos = 0;
  const speed = 0.5;
  let paused = false;

  track.addEventListener("mouseenter", () => (paused = true));
  track.addEventListener("mouseleave", () => (paused = false));

  function animate() {
    if (!paused) {
      scrollPos += speed;
      if (scrollPos >= track.scrollWidth / 2) scrollPos = 0;
      track.style.transform = `translateX(-${scrollPos}px)`;
    }
    requestAnimationFrame(animate);
  }

  animate();
});
