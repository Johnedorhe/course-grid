const contentContainer = document.querySelector('#content');

document.addEventListener('click', (e) => {
  const btn = e.target;

  if (btn.id.endsWith('-btn')) {
    const targetId = btn.id.replace('-btn', '');
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
          contentContainer.querySelectorAll('div:not(.hidden)').forEach(div => {
          div.classList.add('hidden');
      });

      contentContainer.classList.remove('hidden');
      contentContainer.classList.add('flex');
      targetEl.classList.remove('hidden');
    }
  }

  if (btn.classList.contains('close-btn')) {
    btn.parentElement.classList.add('hidden');
    contentContainer.classList.add('hidden');
    contentContainer.classList.remove('flex');
  }
});
