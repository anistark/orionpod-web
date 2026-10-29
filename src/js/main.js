document.addEventListener("DOMContentLoaded", () => {
  // Video background: detect playback and swap out the static image fallback
  const videoBg = document.querySelector(".video-bg");
  if (videoBg) {
    videoBg.addEventListener("playing", () => {
      document.body.classList.add("video-playing");
    });
    // If the video fails or isn't supported, the poster + CSS image fallback remain
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    // threshold 0, not a fraction: an element taller than the viewport
    // (like a long changelog card) could otherwise never reach it and stay hidden
    { threshold: 0, rootMargin: "0px 0px -40px 0px" },
  );

  document
    .querySelectorAll(".fade-in, .fade-in-left, .fade-in-right")
    .forEach((el) => observer.observe(el));

  // Download page: OS tabs show only that platform's assets
  const osTabs = document.querySelectorAll(".os-tab");
  if (osTabs.length) {
    const osNames = { macos: "macOS", windows: "Windows", linux: "Linux" };

    const selectOs = (os) => {
      osTabs.forEach((tab) => {
        const active = tab.dataset.os === os;
        tab.classList.toggle("active", active);
        tab.setAttribute("aria-pressed", active);
      });
      document.querySelectorAll(".release-assets").forEach((list) => {
        let shown = 0;
        list.querySelectorAll("[data-platform]").forEach((row) => {
          const match = row.dataset.platform === os;
          row.style.display = match ? "" : "none";
          if (match) shown++;
        });
        const empty = list.querySelector(".asset-empty");
        empty.textContent = `No ${osNames[os]} build in this release.`;
        empty.style.display = shown ? "none" : "";
      });
      document.querySelectorAll("[data-os-only]").forEach((el) => {
        el.style.display = el.dataset.osOnly === os ? "" : "none";
      });
    };

    osTabs.forEach((tab) =>
      tab.addEventListener("click", () => selectOs(tab.dataset.os)),
    );

    // Start on the visitor's OS
    const ua = navigator.userAgent;
    if (/Windows/.test(ua)) selectOs("windows");
    else if (/Linux/.test(ua) && !/Android/.test(ua)) selectOs("linux");
    else selectOs("macos");
  }

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
