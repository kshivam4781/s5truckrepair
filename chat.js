document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("chatOverlay");
  const buttons = document.querySelectorAll(".chat-button");
  if (!overlay || !buttons.length) {
    return;
  }

  const closeOverlay = () => overlay.classList.remove("chat-overlay--visible");
  const showOverlay = () => overlay.classList.add("chat-overlay--visible");

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      showOverlay();
    });
  });

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeOverlay();
    }
  });

  const closeButton = overlay.querySelector(".chat-close");
  closeButton?.addEventListener("click", closeOverlay);
});

