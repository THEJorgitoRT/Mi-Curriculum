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
