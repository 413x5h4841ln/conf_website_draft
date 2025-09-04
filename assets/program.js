(async function () {
  const root = document.getElementById('program-root');
  if (!root) return;

  try {
    const res = await fetch('data/program-2025.json', { cache: 'no-store' });
    if (!res.ok) throw new Error('Cannot load program JSON');
    const data = await res.json();
    renderProgram(root, data);
  } catch (e) {
    root.innerHTML = `<p class="muted">Failed to load program. You can generate static HTML with <a href="tools/timetable.html">the timetable tool</a>.</p>`;
    console.error(e);
  }

  function renderProgram(root, program) {
    // Expect: { year, days: [ { date, venue, sessions: [ { start, end, title, speaker, affiliation, type, location, slidesLink } ] } ] }
    root.innerHTML = '';
    (program.days || []).forEach(day => {
      const dayEl = document.createElement('section');
      dayEl.className = 'program-day card';
      const dateFmt = new Date(day.date).toLocaleDateString(undefined, { weekday:'long', year:'numeric', month:'long', day:'numeric' });
      dayEl.innerHTML = `
        <h2>${dateFmt}${day.venue ? ` · <span class="muted">${escapeHtml(day.venue)}</span>` : ''}</h2>
        <div class="sessions"></div>
      `;
      const list = dayEl.querySelector('.sessions');

      (day.sessions || []).forEach(s => {
        const item = document.createElement('article');
        item.className = 'session';
        const badges = [s.type, s.location].filter(Boolean).map(x => `<span class="badge">${escapeHtml(x)}</span>`).join('');
        const slides = s.slidesLink ? ` · <a href="${s.slidesLink}" target="_blank" rel="noopener">Slides</a>` : '';
        item.innerHTML = `
          <div class="time">${escapeHtml(s.start)}–${escapeHtml(s.end)}</div>
          <div>
            <h3 class="title">${escapeHtml(s.title)}</h3>
            <div class="meta">
              ${s.speaker ? escapeHtml(s.speaker) : ''}${s.affiliation ? `, ${escapeHtml(s.affiliation)}` : ''}${slides}
            </div>
            <div class="badges">${badges}</div>
          </div>
        `;
        list.appendChild(item);
      });

      root.appendChild(dayEl);
    });
  }

  function escapeHtml(str){
    return String(str ?? '')
      .replaceAll('&','&amp;')
      .replaceAll('<','&lt;')
      .replaceAll('>','&gt;')
      .replaceAll('"','&quot;')
      .replaceAll("'","&#039;");
  }
})();
