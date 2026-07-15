/* ============================================================
   תנאי שימוש ומדיניות פרטיות — תמרה שעשוע / mentalcare.co.il
   כלול בכל עמוד עם: <script src="/legal.js" defer></script>
   נפתח מכל אלמנט עם data-open-terms, או דרך window.openTerms().
   ============================================================ */
(function () {
  'use strict';
  if (window.__legalLoaded) return;
  window.__legalLoaded = true;

  var css = '\
  .legal-modal{position:fixed;inset:0;z-index:2147483500;display:flex;align-items:center;justify-content:center;\
    padding:1.2rem;background:rgba(20,22,20,.6);opacity:0;visibility:hidden;transition:opacity .3s ease,visibility .3s}\
  .legal-modal.open{opacity:1;visibility:visible}\
  .legal-box{background:#fdfcfa;color:#3a3a3a;max-width:680px;width:100%;max-height:86vh;overflow-y:auto;\
    border-radius:18px;box-shadow:0 30px 80px rgba(0,0,0,.42);direction:rtl;\
    font-family:"Heebo",system-ui,Arial,sans-serif;line-height:1.85;\
    transform:translateY(18px);transition:transform .3s ease}\
  .legal-modal.open .legal-box{transform:none}\
  .legal-head{position:sticky;top:0;background:#fdfcfa;display:flex;align-items:center;justify-content:space-between;\
    padding:1.2rem 1.6rem .85rem;border-bottom:1px solid rgba(0,0,0,.08);z-index:1}\
  .legal-head h2{margin:0;font-family:"Frank Ruhl Libre",Georgia,serif;font-size:1.5rem;color:#2b2b2b}\
  .legal-close{background:none;border:0;color:#3a3a3a;font-size:1.7rem;line-height:1;cursor:pointer;\
    padding:.1rem .5rem;border-radius:8px}\
  .legal-close:hover{background:rgba(0,0,0,.06)}\
  .legal-close:focus-visible{outline:3px solid #2b5c8a;outline-offset:2px}\
  .legal-body{padding:1.2rem 1.6rem 2rem}\
  .legal-body h3{font-family:"Frank Ruhl Libre",Georgia,serif;font-size:1.12rem;margin:1.5rem 0 .4rem;color:#2b2b2b}\
  .legal-body h3:first-child{margin-top:0}\
  .legal-body p,.legal-body li{font-size:.95rem;color:#4a4a4a}\
  .legal-body ul{padding-right:1.3rem;margin:.4rem 0}\
  .legal-body li{margin:.25rem 0}\
  .legal-body a{color:#2b5c8a}\
  .legal-updated{font-size:.82rem;color:#888;margin-top:1.6rem}\
  @media (max-width:600px){.legal-head h2{font-size:1.25rem}.legal-body{padding:1rem 1.1rem 1.6rem}}';

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var content = '\
    <div class="legal-head">\
      <h2>תנאי שימוש ומדיניות פרטיות</h2>\
      <button class="legal-close" aria-label="סגירת תנאי השימוש">&times;</button>\
    </div>\
    <div class="legal-body">\
      <h3>1. כללי</h3>\
      <p>ברוכים הבאים לאתר תמרה שעשוע — טיפול רגשי (mentalcare.co.il, "האתר"). השימוש באתר ובשירותים המוצעים בו כפוף לתנאים המפורטים להלן. עצם הגלישה באתר, מילוי טופס יצירת קשר או פנייה דרך הפרטים המופיעים בו — מהווים הסכמה מלאה לתנאים אלה. התנאים מנוסחים בלשון זכר מטעמי נוחות בלבד ומופנים לכל המגדרים כאחד.</p>\
      <h3>2. אופי המידע באתר</h3>\
      <p>התכנים באתר, לרבות המידע על פרחי באך, EBMT, נוירופידבק והמאמרים השונים, הם מידע כללי למטרות העשרה והיכרות בלבד. <strong>המידע אינו מהווה ייעוץ רפואי, אבחון או תחליף לטיפול רפואי, פסיכולוגי או פסיכיאטרי.</strong> אין לראות בו המלצה לפעולה כלשהי, ואין להסתמך עליו ללא התייעצות עם איש מקצוע מוסמך. בכל מצב חירום או מצוקה נפשית יש לפנות לגורם רפואי או לקווי הסיוע הרלוונטיים.</p>\
      <p>הטיפולים המוצעים הם טיפולים משלימים ואינם מחליפים טיפול קונבנציונלי. התוצאות משתנות מאדם לאדם ואינן מובטחות.</p>\
      <h3>3. יצירת קשר ומסירת פרטים</h3>\
      <p>בעת מילוי טופס יצירת הקשר או פנייה בוואטסאפ, הפרטים שתמסרו (שם, טלפון, תחום עניין ותוכן ההודעה) משמשים אך ורק לצורך יצירת קשר חוזר ומענה לפנייתכם. מסירת הפרטים היא מרצונכם החופשי ואינה מחויבת על פי חוק; בלעדיה לא נוכל לחזור אליכם.</p>\
      <h3>4. מדיניות פרטיות</h3>\
      <ul>\
        <li>הפרטים שתמסרו נשמרים לצורך מתן מענה בלבד ולא יימסרו לצד שלישי, למעט אם הדבר נדרש על פי דין.</li>\
        <li>האתר עשוי לשלוח פנייה מוכנה דרך שירות וואטסאפ (WhatsApp) — כפוף גם לתנאי השימוש והפרטיות של אותו שירות.</li>\
        <li>האתר עשוי לעשות שימוש בקבצי Cookies ובכלי מדידה סטטיסטיים לצורך שיפור חוויית המשתמש. ניתן לחסום קבצים אלה בהגדרות הדפדפן.</li>\
        <li>המידע האישי שתמסרו במסגרת תהליך טיפולי נשמר בסודיות מקצועית, בהתאם לכללי האתיקה החלים על מטפלים.</li>\
        <li>בהתאם לחוק הגנת הפרטיות, אתם רשאים לפנות בכל עת ולבקש לעיין בפרטים שנמסרו, לתקנם או למחקם.</li>\
      </ul>\
      <h3>5. קניין רוחני</h3>\
      <p>כל התכנים באתר — טקסטים, עיצוב, תמונות, גרפיקה וקוד — הם רכושה של תמרה שעשוע או של בעלי הזכויות שהתירו את השימוש בהם, ומוגנים בזכויות יוצרים. אין להעתיק, לשכפל, להפיץ או לעשות שימוש מסחרי בתכנים ללא אישור מראש ובכתב. (צילומי הצמחים בעמוד פרחי הבאך מוצגים ברישיונות Creative Commons ומיוחסים ליוצריהם כמפורט באותו עמוד.)</p>\
      <h3>6. הגבלת אחריות</h3>\
      <p>האתר והתכנים בו מוצעים כמות שהם ("as is"). תמרה שעשוע אינה אחראית לכל נזק ישיר או עקיף שייגרם כתוצאה מהשימוש באתר, מהסתמכות על תכניו או מתקלות טכניות. השימוש באתר הוא באחריותכם בלבד.</p>\
      <h3>7. קישורים חיצוניים</h3>\
      <p>באתר עשויים להופיע קישורים לאתרים חיצוניים. אין לתמרה שעשוע שליטה על תכנים אלה והיא אינה אחראית להם או למדיניות הפרטיות שלהם.</p>\
      <h3>8. שינויים בתנאים</h3>\
      <p>תמרה שעשוע רשאית לעדכן תנאים אלה מעת לעת. הנוסח המחייב הוא זה המופיע באתר במועד השימוש.</p>\
      <h3>9. דין וסמכות שיפוט</h3>\
      <p>על תנאים אלה יחולו דיני מדינת ישראל, וסמכות השיפוט הבלעדית בכל מחלוקת תהיה נתונה לבתי המשפט המוסמכים במחוז המרכז.</p>\
      <h3>10. יצירת קשר</h3>\
      <p>בכל שאלה בנוגע לתנאי השימוש או לפרטיות ניתן לפנות לתמרה שעשוע — זלמן שזר 31, ראשון לציון · טלפון <a href="tel:+972526299131">052-629-9131</a>.</p>\
      <p class="legal-updated">עודכן לאחרונה: יולי 2026.</p>\
    </div>';

  var modal = document.createElement('div');
  modal.className = 'legal-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-label', 'תנאי שימוש ומדיניות פרטיות');
  var box = document.createElement('div');
  box.className = 'legal-box';
  box.innerHTML = content;
  modal.appendChild(box);
  document.body.appendChild(modal);

  var lastFocus = null;
  function setOpen(v) {
    modal.classList.toggle('open', v);
    if (v) {
      lastFocus = document.activeElement;
      box.querySelector('.legal-close').focus();
    } else if (lastFocus) {
      lastFocus.focus();
    }
  }

  box.querySelector('.legal-close').addEventListener('click', function () { setOpen(false); });
  modal.addEventListener('click', function (e) { if (e.target === modal) setOpen(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('open')) setOpen(false);
  });

  window.openTerms = function () { setOpen(true); };
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-open-terms]');
    if (t) { e.preventDefault(); setOpen(true); }
  });
})();
