const articles = [
 {title:"Is Your Indian Diet Really Balanced?",category:"Nutrition",date:"2026-11-26",excerpt:"An examination of common patterns in traditional Indian meals, nutritional gaps and practical ways to improve balance through portions and fruit inclusion.",url:"indian-diet-balanced.html",readTime:"6 min read"},
 {title:"Balanced Nutrition: Understanding the Basics",category:"Nutrition",date:"2026-11-23",excerpt:"A practical introduction to dietary variety, balance, adequacy and the role of everyday food choices.",url:"balanced-nutrition-basics.html",readTime:"5 min read"},
 {title:"How to Read a Research Article Critically",category:"Literature",date:"2026-11-23",excerpt:"A framework for evaluating a research question, methods, findings and limitations when reading academic literature.",url:"reading-research-critically.html",readTime:"4 min read"},
 {title:"Writing Clearly About Complex Topics",category:"Literature",date:"2026-11-23",excerpt:"Practical ways to organise specialist information so readers can understand the message without losing important meaning.",url:"clear-writing-complex-topics.html",readTime:"4 min read"}
];
const categories=["Management","Nutrition","Marketing","Psychology","Agriculture","Physiology","Anatomy","Geography","History","Literature"];
document.addEventListener('DOMContentLoaded',()=>{
 const list=document.querySelector('#article-list'),empty=document.querySelector('#empty-articles'),filters=[...document.querySelectorAll('#blog-filters [data-filter]')],cards=[...document.querySelectorAll('[data-category-card]')];
 if(!list)return;
 function render(category='all'){
  const selected=category==='all'?articles:articles.filter(a=>a.category===category);list.replaceChildren();
  selected.forEach(a=>{const card=document.createElement('article');card.className='blog-card';const meta=document.createElement('p');meta.className='eyebrow';meta.textContent=a.category+' · '+a.date;const h=document.createElement('h2'),link=document.createElement('a');link.href=a.url;link.textContent=a.title;h.append(link);const ex=document.createElement('p');ex.textContent=a.excerpt;const read=document.createElement('a');read.className='read-label';read.href=a.url;read.textContent='READ ARTICLE ↗ · '+a.readTime;card.append(meta,h,ex,read);list.append(card);});
  empty.hidden=selected.length>0;document.querySelector('#article-heading').textContent=category==='all'?'Latest articles':category+' articles';
  cards.forEach(c=>c.classList.toggle('category-active',category===c.dataset.categoryCard));
 }
 filters.forEach(b=>b.addEventListener('click',()=>{filters.forEach(x=>{const on=x===b;x.classList.toggle('selected',on);x.setAttribute('aria-pressed',String(on));});render(b.dataset.filter);}));
 cards.forEach(c=>c.addEventListener('click',e=>{e.preventDefault();const cat=c.dataset.categoryCard;const b=filters.find(x=>x.dataset.filter===cat);if(b)b.click();history.replaceState(null,'','#'+cat.toLowerCase());}));
 const hash=decodeURIComponent(location.hash.slice(1));const initial=categories.find(c=>c.toLowerCase()===hash);if(initial){const b=filters.find(x=>x.dataset.filter===initial);if(b)b.click();}else render();
});
