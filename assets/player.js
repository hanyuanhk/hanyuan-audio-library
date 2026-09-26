/* 漢源閱寫音頻 — builds each class page from its data file.
   One audio element for the whole page; playback lives in the bottom bar. */
(function () {
  var script = document.currentScript;
  var BASE = script.src.replace(/assets\/player\.js.*$/, '');
  var cfg = window.HY || {};
  var LOGO = "data:image/png;base64,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";
  var RATES = [1, 1.25, 1.5, 0.75];
  var ri = 0, cur = null;
  var audio = new Audio();
  audio.preload = 'metadata';

  var PLAY = '<svg viewBox="0 0 12 14" aria-hidden="true"><path d="M0 0l12 7-12 7z"/></svg>';
  var PAUSE = '<svg viewBox="0 0 12 14" aria-hidden="true"><path d="M0 0h4v14H0zM8 0h4v14H8z"/></svg>';

  function el(t, c, txt) { var e = document.createElement(t); if (c) e.className = c; if (txt != null) e.textContent = txt; return e; }
  function mmss(s) { if (!isFinite(s) || s < 0) s = 0; var m = Math.floor(s / 60), x = Math.floor(s % 60); return m + ':' + (x < 10 ? '0' : '') + x; }
  function pad(n) { return n < 10 ? '0' + n : '' + n; }
  function get(u) { return fetch(u, { cache: 'no-cache' }).then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); }); }

  var dock = document.getElementById('hy-dock'),
      dplay = document.getElementById('hy-dplay'),
      dtitle = document.getElementById('hy-dtitle'),
      dmeta = document.getElementById('hy-dmeta'),
      dspeed = document.getElementById('hy-dspeed'),
      rail = document.getElementById('hy-rail'),
      fill = document.getElementById('hy-fill');
  dplay.innerHTML = PLAY;

  function paint(c, d) {
    fill.style.width = (d ? (c / d * 100) : 0) + '%';
    if (cur) dmeta.textContent = cur.unit + ' · ' + mmss(c) + ' / ' + mmss(d);
  }
  function setOn(on) {
    dplay.innerHTML = on ? PAUSE : PLAY;
    dplay.setAttribute('aria-label', on ? '暫停' : '播放');
    if (cur) cur.row.classList.toggle('is-on', on);
  }
  function play(item) {
    if (cur === item) {
      if (audio.paused) { audio.play(); setOn(true); } else { audio.pause(); setOn(false); }
      return;
    }
    if (cur) cur.row.classList.remove('is-on');
    cur = item;
    dtitle.textContent = item.title ? item.lecture + '　' + item.title : item.lecture;
    dmeta.textContent = item.unit;
    dock.classList.add('up');
    fill.style.width = '0%';
    audio.src = item.url;
    audio.playbackRate = RATES[ri];
    setOn(true);
    var p = audio.play();
    if (p && p.catch) p.catch(function () { setOn(false); });
  }

  audio.addEventListener('timeupdate', function () { paint(audio.currentTime, audio.duration || 0); });
  audio.addEventListener('loadedmetadata', function () { paint(0, audio.duration || 0); });
  audio.addEventListener('ended', function () { setOn(false); paint(0, audio.duration || 0); });
  audio.addEventListener('error', function () {
    setOn(false);
    dmeta.textContent = '此音頻暫時無法播放，請告知老師。 Unavailable.';
  });

  dplay.addEventListener('click', function () { if (cur) play(cur); });
  dspeed.addEventListener('click', function () {
    ri = (ri + 1) % RATES.length;
    audio.playbackRate = RATES[ri];
    dspeed.textContent = RATES[ri] + '×';
    try { localStorage.setItem('hy-speed', String(ri)); } catch (e) {}
  });
  rail.addEventListener('click', function (ev) {
    var r = rail.getBoundingClientRect();
    if (audio.duration) audio.currentTime = Math.min(1, Math.max(0, (ev.clientX - r.left) / r.width)) * audio.duration;
  });

  function resolve() {
    if (cfg.year) return Promise.resolve(cfg.grade + '-' + cfg.year);
    return get(BASE + 'data/current.json').then(function (m) {
      if (!m[cfg.grade]) throw new Error('no current year for ' + cfg.grade);
      return m[cfg.grade];
    });
  }

  resolve()
    .then(function (k) { return get(BASE + 'data/' + k + '.json'); })
    .then(render)
    .catch(function (e) {
      console.error(e);
      var m = el('div', 'msg');
      m.appendChild(el('strong', null, '暫時無法載入'));
      m.appendChild(el('span', null, '請稍後再試，或聯絡老師。 Could not load — please try again later.'));
      document.getElementById('hy-main').appendChild(m);
    });

  function render(d) {
    // Most classes are 閱寫音頻; K1 is 兒歌音頻. The data file says so when it differs.
    var kind = d.kind || '閱寫音頻';
    // an explicit empty string means the class shows no English line at all
    var kindEn = (d.kindEn === undefined) ? 'Reading & Writing Audio' : d.kindEn;
    document.title = '漢源' + d.grade + kind + ' · ' + d.label;

    var mast = document.getElementById('hy-mast');
    var img = el('img', 'crest'); img.src = LOGO; img.alt = '漢源教育中心';
    img.addEventListener('error', function () {
      var s = el('div', 'seal', '漢'); s.setAttribute('aria-label', '漢源教育中心'); this.replaceWith(s);
    });
    mast.appendChild(img);
    mast.appendChild(el('p', 'eyebrow', '漢源教育中心 · Han Yuan'));
    mast.appendChild(el('h1', null, d.grade + ' ' + kind));
    if (kindEn) mast.appendChild(el('p', 'sub', kindEn));
    var term = el('p', 'term');
    term.appendChild(el('span', null, d.label));
    term.appendChild(el('span', null, d.entries.length ? d.entries.length + ' 篇' : '即將開始'));
    mast.appendChild(term);

    var main = document.getElementById('hy-main');
    if (!d.entries.length) {
      var m = el('div', 'msg');
      m.appendChild(el('strong', null, '本學年課程即將開始'));
      m.appendChild(el('span', null, '第一個音頻上載後便會在此顯示。 The first recording will appear here soon.'));
      main.appendChild(m);
      return;
    }

    try {
      var si = parseInt(localStorage.getItem('hy-speed'), 10);
      if (si >= 0 && si < RATES.length) { ri = si; dspeed.textContent = RATES[ri] + '×'; }
    } catch (e) {}

    var units = [], by = {};
    d.entries.forEach(function (e, i) {
      e._n = i + 1;
      if (!by[e.unit]) { by[e.unit] = []; units.push(e.unit); }
      by[e.unit].push(e);
    });
    var last = units[units.length - 1], lastN = d.entries.length;

    units.forEach(function (u) {
      var det = el('details', 'unit'); det.open = (u === last);
      var sum = el('summary');
      sum.appendChild(el('span', 'unit-name', u));
      sum.appendChild(el('span', 'unit-rule'));
      sum.appendChild(el('span', 'unit-count', by[u].length + ' 篇'));
      det.appendChild(sum);

      var tr = el('div', 'tracks');
      by[u].forEach(function (e) {
        var row = el('button', 'track'); row.type = 'button';
        row.appendChild(el('span', 'idx', pad(e._n)));
        var body = el('span', 'body');
        body.appendChild(el('span', 'lecture', e.lecture));
        body.appendChild(el('span', 'passage' + (e.title ? '' : ' todo'), e.title || '篇章名稱待補'));
        row.appendChild(body);
        if (e._n === lastN) row.appendChild(el('span', 'mark', '最新'));
        var bars = el('span', 'bars');
        bars.appendChild(el('i')); bars.appendChild(el('i')); bars.appendChild(el('i'));
        row.appendChild(bars);
        // Some 2025-2026 tracks were uploaded as .m4a. Cloudinary can transcode
        // on the fly, so ask for .mp3 and let the browser fall back if need be.
        var url = /\.m4a$/i.test(e.url) ? e.url.replace(/\.m4a$/i, '.mp3') : e.url;
        var item = { row: row, unit: e.unit, lecture: e.lecture, title: e.title, url: url };
        row.addEventListener('click', function () { play(item); });
        tr.appendChild(row);
      });
      det.appendChild(tr);
      main.appendChild(det);
    });
  }
})();
