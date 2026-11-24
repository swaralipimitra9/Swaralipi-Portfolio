const articles = [
  {"title": "Balanced Nutrition: Understanding the Basics", "category": "Nutrition", "date": "2026-11-23", "excerpt": "A practical introduction to dietary variety, balance, adequacy and the role of everyday food choices.", "url": "articles/balanced-nutrition-basics.html", "readTime": "5 min read"},
  {"title": "How to Read a Research Article Critically", "category": "Other", "date": "2026-11-23", "excerpt": "A simple framework for moving beyond an article’s abstract and evaluating what its findings can—and cannot—tell us.", "url": "articles/reading-research-critically.html", "readTime": "4 min read"},
  {"title": "Writing Clearly About Complex Topics", "category": "Technical Writing", "date": "2026-11-23", "excerpt": "Practical ways to organise specialist information so readers can understand the message without losing important meaning.", "url": "articles/clear-writing-complex-topics.html", "readTime": "4 min read"}
];

document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('#article-list');
  const empty = document.querySelector('#empty-articles');
  const filters = document.querySelectorAll('#blog-filters [data-filter]');
  if (!list) return;
  function renderArticles(category = 'all') {
    const filtered = articles.filter(article => category === 'all' || article.category === category);
    list.replaceChildren();
    filtered.forEach(article => {
      const card = document.createElement('article'); card.className = 'blog-card live-article-card';
      const meta = document.createElement('div'); meta.className = 'article-meta'; meta.textContent = `${article.category} · ${article.date}`;
      const title = document.createElement('h2'); const link = document.createElement('a'); link.href = article.url; link.textContent = article.title; title.append(link);
      const excerpt = document.createElement('p'); excerpt.textContent = article.excerpt;
      const read = document.createElement('a'); read.className = 'article-read-link'; read.href = article.url; read.textContent = `Read article ↗ · ${article.readTime}`;
      card.append(meta, title, excerpt, read); list.append(card);
    });
    empty.hidden = filtered.length !== 0;
  }
  filters.forEach(button => button.addEventListener('click', () => {
    filters.forEach(item => { const selected = item === button; item.classList.toggle('selected', selected); item.setAttribute('aria-pressed', String(selected)); });
    renderArticles(button.dataset.filter);
  }));
  renderArticles();
});
