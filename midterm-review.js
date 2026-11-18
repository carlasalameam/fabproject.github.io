(() => {
  const root = document.documentElement;
  const languages = ['es', 'en'];
  const languageButtons = languages.map(language => document.getElementById(language));
  const translatedContent = document.querySelectorAll('[data-language]');
  const translatedImages = Array.from(document.querySelectorAll('[data-alt-en]'), image => ({
    image,
    es: image.alt,
    en: image.dataset.altEn
  }));
  const themeButton = document.getElementById('theme');

  function readPreference(key) {
    try { return localStorage.getItem(key); } catch { return null; }
  }

  function savePreference(key, value) {
    try { localStorage.setItem(key, value); } catch {}
  }

  function renderLanguage(language) {
    root.lang = language;
    for (const element of translatedContent) {
      element.hidden = element.dataset.language !== language;
    }
    for (const entry of translatedImages) {
      entry.image.alt = entry[language];
    }
    for (const button of languageButtons) {
      const active = button.id === language;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    }
    document.querySelector('.navlinks').setAttribute('aria-label', language === 'en' ? 'Main' : 'Principal');
    document.querySelector('.institutions').setAttribute('aria-label', language === 'en' ? 'Institutions' : 'Instituciones');
  }

  function renderTheme(theme) {
    const dark = theme === 'dark';
    root.dataset.theme = theme;
    themeButton.setAttribute('aria-pressed', String(dark));
    themeButton.setAttribute('aria-label', root.lang === 'en'
      ? (dark ? 'Activate light theme' : 'Activate dark theme')
      : (dark ? 'Activar tema claro' : 'Activar tema oscuro'));
  }

  for (const button of languageButtons) {
    button.addEventListener('click', () => {
      savePreference('apia-language', button.id);
      renderLanguage(button.id);
      renderTheme(root.dataset.theme);
    });
  }
  themeButton.addEventListener('click', () => {
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    savePreference('apia-theme', theme);
    renderTheme(theme);
  });

  renderLanguage(readPreference('apia-language') === 'en' ? 'en' : 'es');
  renderTheme(readPreference('apia-theme') === 'dark' ? 'dark' : 'light');
})();
