:root{
  --bg:#0b1220;
  --panel:#121a2b;
  --text:#eaf0ff;
  --muted:#b8c1d9;
  --accent:#6ee7ff;
  --border:rgba(255,255,255,.12);
  --shadow: 0 12px 30px rgba(0,0,0,.25);
  --radius:16px;
}

:root[data-theme="light"]{
  --bg:#f7f8fb;
  --panel:#ffffff;
  --text:#141a2a;
  --muted:#52607a;
  --accent:#0066ff;
  --border:rgba(20,26,42,.12);
  --shadow: 0 12px 30px rgba(20,26,42,.10);
}

*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  margin:0;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  background: radial-gradient(1000px 600px at 20% 0%, rgba(110,231,255,.15), transparent 60%),
              radial-gradient(1000px 600px at 80% 10%, rgba(0,102,255,.12), transparent 60%),
              var(--bg);
  color:var(--text);
}

img{max-width:100%;display:block}
a{color:inherit;text-decoration:none}
.container{width:min(1100px, 92%); margin-inline:auto}

.skip-link{
  position:absolute; left:-999px; top:8px;
  background:var(--panel); padding:10px 12px; border-radius:10px;
  border:1px solid var(--border);
}
.skip-link:focus{left:12px; z-index:999}

.site-header{
  position:sticky; top:0; z-index:50;
  backdrop-filter: blur(10px);
  background: color-mix(in srgb, var(--bg) 70%, transparent);
  border-bottom:1px solid var(--border);
}

.nav{display:flex; align-items:center; gap:14px; padding:12px 0; position:relative}
.brand{
  width:40px;height:40px;border-radius:12px;
  display:grid;place-items:center;
  background:var(--panel);
  border:1px solid var(--border);
  box-shadow:var(--shadow);
  font-weight:700;
  flex:0 0 auto;
}
.brand-name{
  font-weight:700;
}
.nav__toggle{
  display:none;
  border:1px solid var(--border);
  background:var(--panel);
  color:var(--text);
  border-radius:12px;
  padding:10px 12px;
}
.nav__links{
  list-style:none; margin:0; padding:0;
  display:flex; gap:14px; align-items:center;
  margin-left:auto;
}
.nav__links a{
  padding:10px 12px;
  border-radius:12px;
  color:var(--muted);
}
.nav__links a:hover{background:var(--panel); color:var(--text)}
.theme-btn{
  border:1px solid var(--border);
  background:var(--panel);
  color:var(--text);
  border-radius:12px;
  padding:10px 12px;
}

.sr-only{
  position:absolute;
  width:1px;
  height:1px;
  padding:0;
  margin:-1px;
  overflow:hidden;
  clip:rect(0,0,0,0);
  white-space:nowrap;
  border:0;
}

.hide-sm{display:inline}

.hero{padding:56px 0 22px}
.hero__grid{
  display:grid;
  grid-template-columns:1.2fr .8fr;
  gap:18px;
  align-items:start;
}
.badge{
  display:inline-block;
  padding:6px 10px;
  border-radius:999px;
  border:1px solid var(--border);
  background: color-mix(in srgb, var(--panel) 80%, transparent);
  color:var(--muted);
  margin:0 0 12px;
}
h1{font-size: clamp(32px, 4vw, 52px); margin:0 0 10px}
.accent{color:var(--accent)}
.lead{color:var(--muted); max-width:60ch; font-size:18px; margin:0 0 18px}
.hero__cta{display:flex; gap:12px; flex-wrap:wrap}

.hero-card{
  padding:18px;
  background:var(--panel);
  border:1px solid var(--border);
  border-radius:var(--radius);
  box-shadow:var(--shadow);
}
.quick-list{
  list-style:none;
  padding:0;
  margin:14px 0 0;
  color:var(--muted);
}
.quick-list strong{color:var(--text)}

.section{padding:34px 0}
.section h2{margin:0 0 10px; font-size:28px}
.muted{color:var(--muted); margin:0 0 18px}

.btn{
  display:inline-flex; align-items:center; justify-content:center;
  padding:12px 16px;
  border-radius:14px;
  border:1px solid var(--border);
  background:linear-gradient(135deg, color-mix(in srgb, var(--accent) 45%, var(--panel)), var(--panel));
  box-shadow:var(--shadow);
  font-weight:600;
  cursor:pointer;
}
.btn--ghost{background:transparent}

.about{
  display:grid;
  grid-template-columns: 140px 1fr;
  gap:18px;
  align-items:start;
  padding:18px;
  background:var(--panel);
  border:1px solid var(--border);
  border-radius:var(--radius);
  box-shadow:var(--shadow);
}
.about__img{
  width:140px;height:140px;
  border-radius:18px;
  border:1px solid var(--border);
  object-fit:cover;
  background: color-mix(in srgb, var(--bg) 60%, transparent);
}
.chips{list-style:none; padding:0; margin:14px 0 0; display:flex; flex-wrap:wrap; gap:8px}
.chip{
  border:1px solid var(--border);
  background: color-mix(in srgb, var(--bg) 65%, transparent);
  padding:8px 10px;
  border-radius:999px;
  color:var(--muted);
  font-size:14px;
}

.projects-tools{
  display:grid;
  gap:12px;
  margin-bottom:16px;
}
.card{
  overflow:hidden;
  border-radius:var(--radius);
  background:var(--panel);
  border:1px solid var(--border);
  box-shadow:var(--shadow);
}
.card--pad{padding:18px}
.filter-row{
  display:flex;
  gap:10px;
  flex-wrap:wrap;
}
.filter-btn.active{
  background:linear-gradient(135deg, var(--accent), color-mix(in srgb, var(--accent) 45%, var(--panel)));
  color:#08111e;
}
.search-row{
  display:flex;
  flex-direction:column;
  gap:8px;
}
.toolbar-status{color:var(--muted); margin:0 0 18px}

.grid{
  display:grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap:16px;
}
.card img{aspect-ratio: 16/9; object-fit:cover; background: color-mix(in srgb, var(--bg) 60%, transparent)}
.card__body{padding:14px}
.card__body h3{margin:0 0 8px}
.card__body p{margin:0 0 12px; color:var(--muted)}
.card__meta{display:flex; gap:8px; flex-wrap:wrap; margin-bottom:10px; list-style:none; padding:0}
.pill{
  font-size:12px;
  padding:6px 8px;
  border-radius:999px;
  border:1px solid var(--border);
  color:var(--muted);
  background: color-mix(in srgb, var(--bg) 65%, transparent);
}
.card__actions{display:flex; gap:14px; flex-wrap:wrap}
.link{color:var(--accent); font-weight:600}
.link:hover{text-decoration:underline}
.empty-state{
  color:var(--muted);
  padding:14px 16px;
  border:1px dashed var(--border);
  border-radius:14px;
  background:color-mix(in srgb, var(--panel) 80%, transparent);
}

.form{
  padding:18px;
  background:var(--panel);
  border:1px solid var(--border);
  border-radius:var(--radius);
  box-shadow:var(--shadow);
  max-width:720px;
}
.form__row{display:flex; flex-direction:column; gap:8px; margin-bottom:14px}
label{font-weight:600}
input, textarea{
  border-radius:14px;
  border:1px solid var(--border);
  background: color-mix(in srgb, var(--bg) 70%, transparent);
  color:var(--text);
  padding:12px 12px;
  outline:none;
}
input:focus, textarea:focus{border-color: color-mix(in srgb, var(--accent) 60%, var(--border))}
.error{color:#ff7b7b; min-height:16px}
.form__status{margin:12px 0 0; color:var(--muted)}
.form__status.success-state{color:#89f0b6}
.form__status.error-state{color:#ff9b9b}

.footer{padding:26px 0; border-top:1px solid var(--border); margin-top:30px}
.footer__inner{display:flex; justify-content:space-between; gap:12px; flex-wrap:wrap}

.reveal{
  opacity:0;
  transform:translateY(18px);
  transition:opacity .55s ease, transform .55s ease;
}
.reveal.visible{
  opacity:1;
  transform:translateY(0);
}

/* Responsive */
@media (max-width: 820px){
  .grid{grid-template-columns:1fr}
  .hero__grid{grid-template-columns:1fr}
}
@media (max-width: 700px){
  .nav__toggle{display:inline-flex; margin-left:auto}
  .nav__links{
    display:none;
    width:100%;
    flex-direction:column;
    align-items:stretch;
    padding:10px 0 0;
    margin:0;
    position:absolute;
    left:0;
    right:0;
    top:100%;
    background:var(--panel);
    border:1px solid var(--border);
    border-radius:14px;
  }
  .nav__links.is-open{display:flex}
  .theme-btn{margin-left:0}
  .about{grid-template-columns:1fr}
  .about__img{width:100%; height:220px}
  .hide-sm{display:none}
}
