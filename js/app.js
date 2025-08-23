document.querySelectorAll('.collapsible-title').forEach(title => {
  title.addEventListener('click', () => {
    const parent = title.parentElement;

    // Cierra otras secciones si quieres efecto acordeón:
    document.querySelectorAll('.collapsible').forEach(c => {
      if (c !== parent) c.classList.remove('active');
    });

    // Alterna la actual
    parent.classList.toggle('active');
  });
});

const faders = document.querySelectorAll('.fade-in, .slide-right');

const appearOptions = {
  threshold: 0.3
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
