/* ============================================================
   ווידג'ט נגישות — תמרה שעשוע / mentalcare.co.il
   עצמאי לחלוטין. כלול בכל עמוד עם: <script src="/a11y.js" defer></script>
   תואם תקן ישראלי ת"י 5568 (WCAG 2.0 AA) — כלים + הצהרת נגישות.
   ============================================================ */
(function () {
  'use strict';
  if (window.__a11yLoaded) return;
  window.__a11yLoaded = true;

  var STORE = 'tamaraA11y';
  var state = load();

  /* ---------- שמירה/טעינה ---------- */
  function load() {
    try { return JSON.parse(localStorage.getItem(STORE)) || {}; }
    catch (e) { return {}; }
  }
  function save() {
    try { localStorage.setItem(STORE, JSON.stringify(state)); } catch (e) {}
  }

  /* ---------- CSS ---------- */
  var css = '\
  .a11y-btn{position:fixed;bottom:1.4rem;right:1.4rem;z-index:2147483000;width:52px;height:52px;border-radius:50%;\
    border:2px solid #fff;background:#2b5c8a;color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;\
    box-shadow:0 8px 26px rgba(0,0,0,.32);transition:transform .25s ease,background .25s ease}\
  .a11y-btn:hover{transform:scale(1.08);background:#24507a}\
  .a11y-btn:focus-visible{outline:3px solid #ffcf5a;outline-offset:3px}\
  .a11y-btn svg{width:30px;height:30px;fill:currentColor}\
  .a11y-panel{position:fixed;bottom:5.6rem;right:1.4rem;z-index:2147483000;width:min(340px,calc(100vw - 2rem));\
    max-height:calc(100vh - 8rem);overflow-y:auto;background:#fdfcfa;color:#2b2b2b;border-radius:18px;\
    box-shadow:0 24px 70px rgba(0,0,0,.3);border:1px solid rgba(0,0,0,.08);\
    font-family:"Heebo",system-ui,Arial,sans-serif;direction:rtl;\
    transform:translateY(14px) scale(.97);opacity:0;visibility:hidden;transition:opacity .25s ease,transform .25s ease,visibility .25s}\
  .a11y-panel.open{transform:none;opacity:1;visibility:visible}\
  .a11y-head{display:flex;align-items:center;justify-content:space-between;padding:1rem 1.2rem;\
    background:#2b5c8a;color:#fff;border-radius:18px 18px 0 0;position:sticky;top:0}\
  .a11y-head h2{font-size:1.05rem;margin:0;font-weight:700;font-family:inherit}\
  .a11y-close{background:none;border:0;color:#fff;font-size:1.5rem;line-height:1;cursor:pointer;padding:.2rem .4rem;border-radius:8px}\
  .a11y-close:hover{background:rgba(255,255,255,.18)}\
  .a11y-close:focus-visible{outline:3px solid #ffcf5a;outline-offset:2px}\
  .a11y-body{padding:.9rem}\
  .a11y-grid{display:grid;grid-template-columns:1fr 1fr;gap:.55rem}\
  .a11y-opt{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.35rem;\
    padding:.85rem .5rem;border:1.5px solid rgba(43,92,138,.25);border-radius:12px;background:#fff;color:#2b2b2b;\
    font-family:inherit;font-size:.82rem;font-weight:500;cursor:pointer;text-align:center;transition:all .2s ease;min-height:74px}\
  .a11y-opt:hover{border-color:#2b5c8a;background:#eef4fa}\
  .a11y-opt:focus-visible{outline:3px solid #2b5c8a;outline-offset:2px}\
  .a11y-opt[aria-pressed="true"]{background:#2b5c8a;color:#fff;border-color:#2b5c8a}\
  .a11y-opt svg{width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}\
  .a11y-row{display:flex;align-items:center;justify-content:space-between;gap:.5rem;\
    padding:.7rem .3rem;border-top:1px solid rgba(0,0,0,.07);margin-top:.6rem}\
  .a11y-row span{font-size:.9rem;font-weight:500}\
  .a11y-step{display:flex;align-items:center;gap:.4rem}\
  .a11y-step button{width:34px;height:34px;border-radius:9px;border:1.5px solid rgba(43,92,138,.3);\
    background:#fff;color:#2b5c8a;font-size:1.2rem;font-weight:700;cursor:pointer;line-height:1}\
  .a11y-step button:hover{background:#eef4fa}\
  .a11y-step button:focus-visible{outline:3px solid #2b5c8a;outline-offset:2px}\
  .a11y-step b{min-width:2.6rem;text-align:center;font-size:.9rem}\
  .a11y-foot{padding:.4rem .9rem 1rem;display:flex;flex-direction:column;gap:.5rem}\
  .a11y-reset{width:100%;padding:.7rem;border-radius:10px;border:0;background:#8a2b2b;color:#fff;\
    font-family:inherit;font-weight:600;font-size:.9rem;cursor:pointer}\
  .a11y-reset:hover{background:#7a2424}\
  .a11y-reset:focus-visible{outline:3px solid #ffcf5a;outline-offset:2px}\
  .a11y-statement-link{background:none;border:0;color:#2b5c8a;font-family:inherit;font-size:.85rem;\
    text-decoration:underline;cursor:pointer;padding:.3rem}\
  .a11y-statement-link:hover{color:#1c4165}\
  /* ---- שכבת הצהרת נגישות ותנאי שימוש ---- */\
  .a11y-modal{position:fixed;inset:0;z-index:2147483600;display:flex;align-items:center;justify-content:center;\
    padding:1.2rem;background:rgba(20,22,20,.55);opacity:0;visibility:hidden;transition:opacity .3s ease,visibility .3s}\
  .a11y-modal.open{opacity:1;visibility:visible}\
  .a11y-modal-box{background:#fdfcfa;color:#333;max-width:640px;width:100%;max-height:86vh;overflow-y:auto;\
    border-radius:18px;box-shadow:0 30px 80px rgba(0,0,0,.4);direction:rtl;\
    font-family:"Heebo",system-ui,Arial,sans-serif;line-height:1.8;\
    transform:translateY(18px);transition:transform .3s ease}\
  .a11y-modal.open .a11y-modal-box{transform:none}\
  .a11y-modal-head{position:sticky;top:0;background:#fdfcfa;display:flex;align-items:center;justify-content:space-between;\
    padding:1.2rem 1.5rem .8rem;border-bottom:1px solid rgba(0,0,0,.08)}\
  .a11y-modal-head h2{margin:0;font-family:"Frank Ruhl Libre",Georgia,serif;font-size:1.4rem;color:#2b2b2b}\
  .a11y-modal-body{padding:1.2rem 1.5rem 1.8rem}\
  .a11y-modal-body h3{font-family:"Frank Ruhl Libre",Georgia,serif;font-size:1.08rem;margin:1.3rem 0 .4rem;color:#2b2b2b}\
  .a11y-modal-body p,.a11y-modal-body li{font-size:.94rem;color:#4a4a4a}\
  .a11y-modal-body ul{padding-right:1.2rem;margin:.4rem 0}\
  .a11y-modal-body a{color:#2b5c8a}\
  /* ============ מצבי נגישות המוחלים על העמוד ============ */\
  html.a11y-contrast{filter:contrast(1.35) !important}\
  html.a11y-dark{filter:invert(1) hue-rotate(180deg) !important;background:#000 !important}\
  html.a11y-dark img,html.a11y-dark video,html.a11y-dark .a11y-btn,html.a11y-dark iframe{filter:invert(1) hue-rotate(180deg) !important}\
  html.a11y-gray{filter:grayscale(1) !important}\
  html.a11y-gray.a11y-contrast{filter:grayscale(1) contrast(1.35) !important}\
  html.a11y-links a{text-decoration:underline !important;text-underline-offset:3px !important;\
    outline:1px dashed rgba(43,92,138,.7) !important;outline-offset:2px}\
  html.a11y-readable *:not(.a11y-panel):not(.a11y-panel *):not(.fa):not(i){\
    font-family:Arial,"Segoe UI",Tahoma,sans-serif !important;letter-spacing:.02em !important}\
  html.a11y-noanim *,html.a11y-noanim *::before,html.a11y-noanim *::after{\
    animation-duration:.001s !important;animation-iteration-count:1 !important;transition-duration:.001s !important;\
    scroll-behavior:auto !important}\
  html.a11y-bigcursor,html.a11y-bigcursor *{cursor:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'48\' height=\'48\' viewBox=\'0 0 48 48\'%3E%3Cpath d=\'M8 4l28 16-13 3-6 13z\' fill=\'%23000\' stroke=\'%23fff\' stroke-width=\'2\'/%3E%3C/svg%3E") 6 4,auto !important}\
  /* מדגיש פוקוס גלוי בכל האתר — תמיד, לא רק במצב נגישות */\
  a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible,[tabindex]:focus-visible{\
    outline:3px solid #2b5c8a;outline-offset:2px;border-radius:3px}\
  /* דילוג לתוכן */\
  .a11y-skip{position:fixed;top:-100px;right:1rem;z-index:2147483600;background:#2b5c8a;color:#fff;\
    padding:.7rem 1.3rem;border-radius:0 0 10px 10px;text-decoration:none;font-family:"Heebo",sans-serif;font-weight:600;\
    transition:top .2s ease}\
  .a11y-skip:focus{top:0;outline:3px solid #ffcf5a}\
  /* מרים כפתורי "חזרה למעלה" מעל כפתור הנגישות כדי שלא יתנגשו */\
  .to-top,.scroll-top{bottom:5.4rem !important}\
  @media (max-width:600px){\
    .to-top,.scroll-top{bottom:4.6rem !important}\
    .a11y-btn{width:46px;height:46px;bottom:1rem;right:1rem}\
    .a11y-btn svg{width:26px;height:26px}\
    .a11y-panel{bottom:4.8rem;right:.7rem;left:.7rem;width:auto}\
  }';

  var style = document.createElement('style');
  style.id = 'a11y-style';
  style.textContent = css;
  document.head.appendChild(style);

  /* ---------- אייקונים ---------- */
  var I = {
    access: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="4" r="2"/><path d="M12 6v6m0 0l-4 8m4-8l4 8M6 8h12"/></svg>',
    contrast: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 3v18" fill="currentColor"/></svg>',
    dark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A8 8 0 1 1 11.2 3 6.5 6.5 0 0 0 21 12.8z"/></svg>',
    gray: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 0 0 18"/></svg>',
    links: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1"/></svg>',
    readable: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7V5h16v2M9 5v14M7 19h4"/></svg>',
    anim: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M9 9h6v6H9z" fill="currentColor"/></svg>',
    cursor: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3l14 8-6 1.5L10 19z"/></svg>'
  };

  /* ---------- טוגלים ---------- */
  var TOGGLES = [
    { key: 'contrast', cls: 'a11y-contrast', label: 'ניגודיות גבוהה', icon: I.contrast },
    { key: 'dark', cls: 'a11y-dark', label: 'מצב כהה', icon: I.dark },
    { key: 'gray', cls: 'a11y-gray', label: 'גווני אפור', icon: I.gray },
    { key: 'links', cls: 'a11y-links', label: 'הדגשת קישורים', icon: I.links },
    { key: 'readable', cls: 'a11y-readable', label: 'גופן קריא', icon: I.readable },
    { key: 'noanim', cls: 'a11y-noanim', label: 'עצירת אנימציות', icon: I.anim },
    { key: 'bigcursor', cls: 'a11y-bigcursor', label: 'סמן גדול', icon: I.cursor }
  ];

  /* ---------- בניית ה-DOM ---------- */
  var panelHTML = '\
    <div class="a11y-head">\
      <h2>תפריט נגישות</h2>\
      <button class="a11y-close" aria-label="סגירת תפריט הנגישות">&times;</button>\
    </div>\
    <div class="a11y-body">\
      <div class="a11y-grid" id="a11yGrid"></div>\
      <div class="a11y-row">\
        <span>גודל טקסט</span>\
        <div class="a11y-step">\
          <button id="a11yFontDown" aria-label="הקטנת טקסט">−</button>\
          <b id="a11yFontVal">100%</b>\
          <button id="a11yFontUp" aria-label="הגדלת טקסט">+</button>\
        </div>\
      </div>\
    </div>\
    <div class="a11y-foot">\
      <button class="a11y-reset" id="a11yReset">איפוס הגדרות נגישות</button>\
      <button class="a11y-statement-link" id="a11yStatement">להצהרת הנגישות המלאה</button>\
    </div>';

  var btn = document.createElement('button');
  btn.className = 'a11y-btn';
  btn.setAttribute('aria-label', 'פתיחת תפריט נגישות');
  btn.setAttribute('aria-expanded', 'false');
  btn.innerHTML = I.access;

  var panel = document.createElement('div');
  panel.className = 'a11y-panel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-label', 'תפריט נגישות');
  panel.setAttribute('aria-modal', 'false');
  panel.innerHTML = panelHTML;

  document.body.appendChild(btn);
  document.body.appendChild(panel);

  /* כפתורי הטוגל */
  var grid = panel.querySelector('#a11yGrid');
  TOGGLES.forEach(function (t) {
    var b = document.createElement('button');
    b.className = 'a11y-opt';
    b.type = 'button';
    b.setAttribute('aria-pressed', 'false');
    b.dataset.key = t.key;
    b.innerHTML = t.icon + '<span>' + t.label + '</span>';
    b.addEventListener('click', function () { toggle(t); });
    grid.appendChild(b);
  });

  /* ---------- לוגיקה ---------- */
  function apply() {
    var root = document.documentElement;
    TOGGLES.forEach(function (t) {
      var on = !!state[t.key];
      root.classList.toggle(t.cls, on);
      var b = grid.querySelector('[data-key="' + t.key + '"]');
      if (b) b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    var f = state.font || 100;
    root.style.setProperty('font-size', f === 100 ? '' : f + '%');
    var val = panel.querySelector('#a11yFontVal');
    if (val) val.textContent = f + '%';
  }

  function toggle(t) {
    state[t.key] = !state[t.key];
    save(); apply();
  }

  function setFont(delta) {
    var f = (state.font || 100) + delta;
    f = Math.max(90, Math.min(160, f));
    state.font = f;
    save(); apply();
  }

  panel.querySelector('#a11yFontUp').addEventListener('click', function () { setFont(10); });
  panel.querySelector('#a11yFontDown').addEventListener('click', function () { setFont(-10); });

  panel.querySelector('#a11yReset').addEventListener('click', function () {
    state = {};
    save();
    document.documentElement.removeAttribute('style');
    apply();
  });

  /* ---------- פתיחה/סגירה ---------- */
  var open = false;
  function setOpen(v) {
    open = v;
    panel.classList.toggle('open', v);
    btn.setAttribute('aria-expanded', v ? 'true' : 'false');
    if (v) { var first = panel.querySelector('.a11y-opt'); if (first) first.focus(); }
  }
  btn.addEventListener('click', function () { setOpen(!open); });
  panel.querySelector('.a11y-close').addEventListener('click', function () { setOpen(false); btn.focus(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && open) { setOpen(false); btn.focus(); }
  });
  document.addEventListener('click', function (e) {
    if (open && !panel.contains(e.target) && e.target !== btn && !btn.contains(e.target)) setOpen(false);
  });

  /* ---------- קישור דילוג לתוכן ---------- */
  var main = document.querySelector(
    'main, #main, [role="main"], article, .article-hero, .article-body, .article-content, .hero, section'
  );
  if (main) {
    if (!main.id) main.id = 'a11y-main';
    var skip = document.createElement('a');
    skip.className = 'a11y-skip';
    skip.href = '#' + main.id;
    skip.textContent = 'דילוג לתוכן הראשי';
    document.body.insertBefore(skip, document.body.firstChild);
    if (!main.hasAttribute('tabindex')) main.setAttribute('tabindex', '-1');
  }

  /* ---------- הצהרת נגישות (מודל) ---------- */
  var statement = '\
    <div class="a11y-modal-head">\
      <h2>הצהרת נגישות</h2>\
      <button class="a11y-close" style="color:#2b2b2b" aria-label="סגירה">&times;</button>\
    </div>\
    <div class="a11y-modal-body">\
      <p>אתר תמרה שעשוע (mentalcare.co.il) שואף לאפשר גלישה נוחה ושוויונית לכלל הגולשים, לרבות אנשים עם מוגבלות, בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות ולתקן הישראלי ת"י 5568 המבוסס על הנחיות WCAG 2.0 ברמת AA.</p>\
      <h3>אמצעי הנגישות באתר</h3>\
      <ul>\
        <li>תפריט נגישות ייעודי (הכפתור בפינה הימנית התחתונה) המאפשר: הגדלת והקטנת טקסט, ניגודיות גבוהה, מצב כהה, גווני אפור, הדגשת קישורים, גופן קריא, עצירת אנימציות וסמן מוגדל.</li>\
        <li>ההגדרות נשמרות במכשיר וממשיכות ללוות אתכם בין העמודים ובביקורים חוזרים.</li>\
        <li>ניווט מלא באמצעות מקלדת (Tab למעבר, Enter/רווח להפעלה, Esc לסגירה) וסימון פוקוס ברור.</li>\
        <li>מבנה כותרות סמנטי, טקסט חלופי לתמונות ותאימות לקוראי מסך.</li>\
        <li>קישור "דילוג לתוכן הראשי" בתחילת כל עמוד.</li>\
      </ul>\
      <h3>הסתייגות</h3>\
      <p>למרות מאמצינו להנגיש כל חלק באתר, ייתכן שיימצאו רכיבים שטרם הונגשו במלואם. אנו ממשיכים לשפר את הנגישות באופן שוטף.</p>\
      <h3>פנייה בנושא נגישות</h3>\
      <p>נתקלתם בקושי? נשמח לדעת ולתקן. אפשר לפנות לתמרה שעשוע בטלפון <a href="tel:+972526299131">052-629-9131</a> או בוואטסאפ <a href="https://wa.me/972526299131" target="_blank" rel="noopener">כאן</a>.</p>\
      <p style="font-size:.82rem;color:#888;margin-top:1.2rem">הצהרה זו עודכנה ביולי 2026.</p>\
    </div>';

  var modal = document.createElement('div');
  modal.className = 'a11y-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-label', 'הצהרת נגישות');
  var box = document.createElement('div');
  box.className = 'a11y-modal-box';
  box.innerHTML = statement;
  modal.appendChild(box);
  document.body.appendChild(modal);

  function modalOpen(v) {
    modal.classList.toggle('open', v);
    if (v) box.querySelector('.a11y-close').focus();
  }
  panel.querySelector('#a11yStatement').addEventListener('click', function () { setOpen(false); modalOpen(true); });
  box.querySelector('.a11y-close').addEventListener('click', function () { modalOpen(false); });
  modal.addEventListener('click', function (e) { if (e.target === modal) modalOpen(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('open')) modalOpen(false);
  });

  /* חשיפה לשימוש חיצוני (קישור "הצהרת נגישות" בפוטר וכו') */
  window.openAccessibilityStatement = function () { modalOpen(true); };
  document.querySelectorAll('[data-a11y-statement]').forEach(function (el) {
    el.addEventListener('click', function (e) { e.preventDefault(); modalOpen(true); });
  });

  apply();
})();
