/* Add a week here only after its documentation page has been published. */
(() => {
  const publishedWeeks = [
    { number: 1, file: 'week-01.html' },
    { number: 2, file: 'week-02.html' },
    { number: 3, file: 'week-03.html' }
  ];
  const labels = {
    es: { weeks: 'Semanas', all: 'Todas las semanas', previous: 'Semana anterior', next: 'Semana siguiente', soon: 'Próximamente', navigation: 'Navegación entre semanas', week: 'Semana' },
    en: { weeks: 'Weeks', all: 'All weeks', previous: 'Previous week', next: 'Next week', soon: 'Coming soon', navigation: 'Weekly navigation', week: 'Week' }
  };
  function render() {
    const text = labels[document.documentElement.lang === 'en' ? 'en' : 'es'];
    document.querySelectorAll('[data-weeks-link]').forEach(link => { link.textContent = text.weeks; });
    document.querySelectorAll('.week-pagination').forEach(nav => {
      const current = Number(nav.dataset.week);
      const index = publishedWeeks.findIndex(week => week.number === current);
      if (index < 0) return;
      const previous = publishedWeeks[index - 1];
      const next = publishedWeeks[index + 1];
      nav.setAttribute('aria-label', text.navigation);
      nav.innerHTML = (previous
        ? `<a class="week-nav-link" href="${previous.file}" rel="prev"><span>← ${text.previous}</span><strong>${text.week} ${String(previous.number).padStart(2, '0')}</strong></a>`
        : `<span class="week-nav-disabled" aria-disabled="true"><span>← ${text.previous}</span><strong>—</strong></span>`)
        + `<a class="week-nav-all" href="../index.html#assignments">${text.all}</a>`
        + (next
          ? `<a class="week-nav-link next" href="${next.file}" rel="next"><span>${text.next} →</span><strong>${text.week} ${String(next.number).padStart(2, '0')}</strong></a>`
          : `<span class="week-nav-disabled next" aria-disabled="true"><span>${text.next} →</span><strong>${text.soon}</strong></span>`);
    });
  }
  render();
  new MutationObserver(render).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
})();
