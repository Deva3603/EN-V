fetch('data/books.json')
  .then(response => response.json())
  .then(data => {
    const bookList = document.getElementById('bookList');
    const searchBox = document.getElementById('searchBox');
    
    function displayBooks(filter = "") {
      bookList.innerHTML = "";
      data.books
        .filter(book => book.title.toLowerCase().includes(filter.toLowerCase()))
        .forEach(book => {
          const item = document.createElement('div');
          item.className = 'book-item';
          item.innerHTML = `<a href="viewer.html?book=${book.file}">${book.title}</a>`;
          bookList.appendChild(item);
        });
    }

    displayBooks();

    searchBox.addEventListener('input', (e) => {
      displayBooks(e.target.value);
    });
  });
