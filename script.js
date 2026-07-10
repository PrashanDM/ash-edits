const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navMenu.classList.remove('show'));
  });
}

const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thanks for reaching out! ASH Edits will reply soon.');
    contactForm.reset();
  });
}

const videos = document.querySelectorAll('.card video');
videos.forEach(video => {
  video.addEventListener('mouseenter', () => video.play());
  video.addEventListener('mouseleave', () => video.pause());
});

const muteToggle = document.getElementById('muteToggle');
let isMuted = true;

if (muteToggle) {
  muteToggle.addEventListener('click', () => {
    isMuted = !isMuted;
    const allVideos = document.querySelectorAll('video');
    allVideos.forEach(video => {
      video.muted = isMuted;
    });
    muteToggle.textContent = isMuted ? '🔊 Unmute' : '🔇 Mute';
  });
  
  // Mute all videos by default
  const allVideos = document.querySelectorAll('video');
  allVideos.forEach(video => {
    video.muted = true;
  });
}