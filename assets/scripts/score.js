const scoresSection = document.getElementById('scores-section');

for (let item of data) {
    const article = document.createElement('article');
    article.className = item['category'].toLowerCase();
    const img = document.createElement('img');
    img.setAttribute('src', item['icon']);
    img.setAttribute('alt', item['category'].toLowerCase());
    const p1 = document.createElement('p');
    p1.innerText = item['category'];
    const p2 = document.createElement('p');
    p2.className = 'score';
    const span = document.createElement('span')
    span.innerText = item['score'];
    p2.appendChild(span)
    p2.append(' / 100')
    article.appendChild(img);
    article.appendChild(p1);
    article.appendChild(p2);
    scoresSection.appendChild(article);
}