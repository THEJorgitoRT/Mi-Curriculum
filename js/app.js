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


// Copiar el contenido del <code> indicado en data-target
document.querySelectorAll('.copy-btn').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const targetId = btn.getAttribute('data-target');
    const codeEl = document.getElementById(targetId);
    if (!codeEl) return;

    const text = codeEl.innerText;

    try {
      await navigator.clipboard.writeText(text);
      const prev = btn.textContent;
      btn.textContent = '✅ Copiado';
      setTimeout(() => (btn.textContent = prev), 1400);
    } catch (e) {
      // Fallback: crea un textarea temporal
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch {}
      document.body.removeChild(ta);
      const prev = btn.textContent;
      btn.textContent = '✅ Copiado';
      setTimeout(() => (btn.textContent = prev), 1400);
    }
  });
});
