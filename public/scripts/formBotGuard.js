(function () {
  const MIN_FILL_MS = 2500;

  function nowMs() {
    return Date.now();
  }

  function getElapsedMs(form) {
    const startedAt = Number(form.dataset.startedAt || 0);
    return startedAt > 0 ? nowMs() - startedAt : 0;
  }

  function initFormGuard(form) {
    form.dataset.startedAt = String(nowMs());

    form.addEventListener("submit", function (event) {
      const honeypot = form.querySelector('input[name="bot-field"]');
      if (honeypot && String(honeypot.value || "").trim() !== "") {
        event.preventDefault();
        return;
      }

      if (getElapsedMs(form) < MIN_FILL_MS) {
        event.preventDefault();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll('form[data-netlify="true"]');
    forms.forEach(initFormGuard);
  });
})();
