// Popup Image
function openPopup(src) {
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  popup.style.display = "flex";
  popupImg.src = src;
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Scroll Reveal
window.addEventListener('scroll', () => {
  const reveals = document.querySelectorAll('.reveal');
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    if (revealTop < windowHeight - 100) {
      reveals[i].classList.add('active');
    }
  }
});
