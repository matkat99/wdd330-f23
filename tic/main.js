const menuButton = document.querySelector(".menu-button");
const gallery = document.querySelector(".gallery");

function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

function handleResize() {
  const menu = document.querySelector(".menu");
  if (window.innerWidth > 900) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

handleResize();

function viewerTemplate(pic, alt) {
  return `<div class="viewer">
    <span class="close-viewer">X</span>
    <img src="${pic}" alt="${alt}">
    </div>`;
}

function closeViewer() {
  document.querySelector(".viewer")?.remove();
}

function viewHandler(event) {
  const target = event.target;
  console.dir(target);
  document.body.insertAdjacentHTML(
    "afterbegin",
    viewerTemplate(target.src, target.alt)
  );
  // add listener to close modal
  document
    .querySelector(".close-viewer")
    .addEventListener("click", closeViewer);
  //   document.querySelector("main").addEventListener("click", closeViewer);
}

menuButton.addEventListener("click", toggleMenu);
gallery.addEventListener("click", viewHandler);
window.addEventListener("resize", handleResize);
