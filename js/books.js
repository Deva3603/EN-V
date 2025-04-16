fetch('data/books.json')
  .then(res => res.json())
  .then(json => {
    const { books } = json;
    const bookList = document.getElementById('bookList');
    const searchBox = document.getElementById('searchBox');

    function render(filter = '') {
      bookList.innerHTML = '';
      books
        .filter(b => b.title.toLowerCase().includes(filter.toLowerCase()))
        .forEach(b => {
          const card = document.createElement('div');
          card.className = 'book-card';
          card.innerHTML = `
            <a href="viewer.html?book=${b.file}" target="_blank">
              <img src="${b.cover}" alt="${b.title} cover">
              <span class="book-title">${b.title}</span>
            </a>
          `;
          bookList.appendChild(card);
        });
    }

    render();
    searchBox.addEventListener('input', e => render(e.target.value));
  });
