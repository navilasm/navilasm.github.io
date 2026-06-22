/* ─────────────────────────────────────────────
   CONFIG
  ───────────────────────────────────────────── */

const CONFIG = {
  githubUsername: 'navilasm',
  mediumUsername: '@navilasm',
  tableauUsername: 'navilasm',

  /* Pinned GitHub repos — add slugs you want shown.
      Leave empty [] to show your top 6 public repos. */
  pinnedRepos: [],

  // pinned: [
  //   { source: 'github', slug: 'bps-data-downloader' },
  //   // { source: 'medium', slug: 'my-article-title' },  // matches post title, case-insensitive
  //   { source: 'tableau', slug: 'Labor Force in Indonesia' },
  // ],
};

/* ─────────────────────────────────────────────
    ICONS
───────────────────────────────────────────── */
const ICONS = {
  medium: `<svg fill="currentColor" class="bi bi-medium" viewBox="0 0 16 16">
  <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8m4.95 0c0 2.34-1.01 4.236-2.256 4.236S9.463 10.339 9.463 8c0-2.34 1.01-4.236 2.256-4.236S13.975 5.661 13.975 8M16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795"/>
</svg>
`,
  github: `<svg fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>`,
  tableau: `<svg fill="currentColor" class="bi bi-patch-check" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
  <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"/>
</svg>`,
  substack: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg>`,
  external: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  viz: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
};

let allPosts = [];
let activeFilter = 'all';

/* ─────────────────────────────────────────────
    FETCH GITHUB REPOS
───────────────────────────────────────────── */
async function fetchGithub() {
  try {
    const url = `https://api.github.com/users/${CONFIG.githubUsername}/repos?sort=updated&per_page=100`;
    const res = await fetch(url);
    const repos = await res.json();
    if (!Array.isArray(repos)) return [];

    let filtered = repos.filter(r => !r.fork && r.name !== `${CONFIG.githubUsername}.github.io`);

    if (CONFIG.pinnedRepos.length > 0) {
      filtered = CONFIG.pinnedRepos
        .map(slug => filtered.find(r => r.name === slug))
        .filter(Boolean);
    } else {
      filtered = filtered.slice(0, 6);
    }

    return filtered.map(r => ({
      source: 'github',
      title: r.name.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
      description: r.description || 'No description provided.',
      url: r.html_url,
      date: r.pushed_at || r.created_at,
      tags: [r.language, ...(r.topics || [])].filter(Boolean),
      stars: r.stargazers_count,
    }));
  } catch (e) {
    console.error('GitHub fetch failed', e);
    return [];
  }
}

/* ─────────────────────────────────────────────
    FETCH MEDIUM ARTICLES (via workflows)
───────────────────────────────────────────── */
async function fetchMedium() {
  try {
    const res = await fetch('./json/medium.json');
    const items = await res.json();
    return items.map(item => ({ source: 'medium', ...item }));
  } catch (e) {
    console.error('Medium fetch failed', e);
    return [];
  }
}

/* ─────────────────────────────────────────────
    SUBSTACK
───────────────────────────────────────────── */
async function fetchSubstack() {
  try {
    const res = await fetch('./json/substack.json');
    const items = await res.json();
    return items.map(a => ({
      source: 'substack',
      title: a.title,
      description: a.description,
      url: a.url,
      date: a.date,
      tags: a.tags || [],
      thumbnail: a.thumbnail || null,
    }));
  } catch (e) {
    console.error('Substack fetch failed', e);
    return [];
  }
}

/* ─────────────────────────────────────────────
    TABLEAU
───────────────────────────────────────────── */
async function fetchTableau() {
  try {
    const res = await fetch('./json/tableau.json');
    const items = await res.json();
    return items.map(v => ({
      source: 'tableau',
      title: v.title,
      description: v.description,
      url: v.url,
      date: v.date,
      tags: v.tags || [],
      thumbnail: v.thumbnail || null,
    }));
  } catch (e) {
    console.error('Tableau fetch failed', e);
    return [];
  }
}

/* ─────────────────────────────────────────────
    HELPERS
───────────────────────────────────────────── */
function stripHtml(html) {
  const d = document.createElement('div');
  d.innerHTML = html;
  return d.textContent || d.innerText || '';
}

function formatDate(str) {
  if (!str) return '';
  const d = new Date(str);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

// function sortByDate(posts) {
//   return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
// }

function sortByDate(posts) {
  const pinnedSlugs = CONFIG.pinned || [];

  function getPinIndex(post) {
    return pinnedSlugs.findIndex(p =>
      p.source === post.source &&
      post.title.toLowerCase().includes(p.slug.toLowerCase())
    );
  }

  return posts.sort((a, b) => {
    const ai = getPinIndex(a);
    const bi = getPinIndex(b);
    const aPinned = ai !== -1;
    const bPinned = bi !== -1;

    if (aPinned && bPinned) return ai - bi;  // both pinned → respect order in config
    if (aPinned) return -1;                  // a pinned, b not → a goes first
    if (bPinned) return 1;                   // b pinned, a not → b goes first
    return new Date(b.date) - new Date(a.date); // neither pinned → sort by date
  });
}

/* ─────────────────────────────────────────────
    RENDER
───────────────────────────────────────────── */
function renderCard(post) {
  const sourceLabel = { medium: 'Article', github: 'Project', tableau: 'Data Viz', substack: 'Article'}[post.source];

  const pillHtml = `
  <span class="source-pill ${post.source}">
    ${ICONS[post.source]}
    ${sourceLabel}
  </span>`;

  const thumbHtml = post.thumbnail
    ? `<img class="card-thumb" src="${post.thumbnail}" alt="" loading="lazy" />`
    : `<div class="card-thumb-placeholder">${ICONS[post.source === 'tableau' ? 'viz' : post.source]}</div>`;

  const tagsHtml = post.tags.length
    ? `<div class="card-tags">${post.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>`
    : '';

  const starsHtml = post.source === 'github' && post.stars > 0
    ? `<span class="tag" style="display:inline-flex;gap:4px;align-items:center">${ICONS.star.replace('24', '12')} ${post.stars}</span>`
    : '';

  return `
  <a class="card" href="${post.url}" target="_blank" rel="noopener" data-source="${post.source}">
    ${thumbHtml}
    <div class="card-body">
      <div class="card-meta">
        ${pillHtml}
        <span class="card-date">${formatDate(post.date)}</span>
        ${starsHtml}
      </div>
      <h2 class="card-title">${post.title}</h2>
      <p class="card-desc">${post.description}</p>
      ${tagsHtml}
    </div>
    <div class="card-arrow">${ICONS.external}</div>
  </a>`;
}

function render() {
  const grid = document.getElementById('posts-grid');
  const filtered = activeFilter === 'all'
    ? allPosts
    : allPosts.filter(p => p.source === activeFilter);

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty-state">No posts found for this filter.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(renderCard).join('');
}

/* ─────────────────────────────────────────────
    FILTER BUTTONS
───────────────────────────────────────────── */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    render();
  });
});

/* ─────────────────────────────────────────────
    INIT
───────────────────────────────────────────── */
async function init() {
  const grid = document.getElementById('posts-grid');
  grid.innerHTML = `<div class="loading-state">Fetching posts…</div>`;

  const [github, medium, tableau, substack] = await Promise.all([fetchGithub(), fetchMedium(), fetchTableau(), fetchSubstack()]);

  allPosts = sortByDate([...github, ...medium, ...tableau, ...substack]);
  render();
}


/* ── THEME TOGGLE ── */
const toggleBtn = document.getElementById('theme-toggle');
const iconSun = document.getElementById('icon-sun');
const iconMoon = document.getElementById('icon-moon');

function applyTheme(dark) {
  document.body.classList.toggle('dark', dark);
  iconSun.style.display = dark ? 'block' : 'none';
  iconMoon.style.display = dark ? 'none' : 'block';
  localStorage.setItem('theme', dark ? 'dark' : 'light');
}

// respect saved preference, then OS preference
const saved = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(saved ? saved === 'dark' : prefersDark);

toggleBtn.addEventListener('click', () => {
  applyTheme(!document.body.classList.contains('dark'));
});

init();
