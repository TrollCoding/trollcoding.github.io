// Click-to-play trailers: each .video-frame is a plain link to YouTube with a self-hosted poster.
// On a normal click, swap the poster for YouTube's privacy-enhanced player, so nothing loads from
// YouTube until a visitor asks for it. Without JavaScript the link still opens the video.
document.addEventListener("click", (event) => {
  const link = event.target.closest("a.video-frame[data-youtube]");
  if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  const frame = document.createElement("iframe");
  frame.src = `https://www.youtube-nocookie.com/embed/${link.dataset.youtube}?autoplay=1&rel=0&playsinline=1`;
  frame.title = link.getAttribute("aria-label") || "Video";
  frame.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
  frame.allowFullscreen = true;
  frame.referrerPolicy = "strict-origin-when-cross-origin";
  const box = document.createElement("div");
  box.className = "video-frame";
  box.append(frame);
  link.replaceWith(box);
  frame.focus();
});
