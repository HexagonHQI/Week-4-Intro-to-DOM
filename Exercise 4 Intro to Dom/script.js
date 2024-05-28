const allBooks = [
    {
      title: 'Harry Potter',
      author: 'JK Rowling',
      image: 'https://example.com/hp.jpg',
      alreadyRead: true
    },
    {
      title: 'The Lord of the Rings',
      author: 'JRR Tolkien',
      image: 'https://example.com/lotr.jpg',
      alreadyRead: false
    }
  ];
  
  const listBooksDiv = document.querySelector('.listBooks');
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  
  allBooks.forEach((book) => {
    const tr = document.createElement('tr');
    const tdTitleAuthor = document.createElement('td');
    tdTitleAuthor.textContent = `${book.title} written by ${book.author}`;
    if (book.alreadyRead) {
      tdTitleAuthor.style.color = 'red';
    }
    tr.appendChild(tdTitleAuthor);
  
    const tdImage = document.createElement('td');
    const img = document.createElement('img');
    img.src = book.image;
    img.width = 100;
    tdImage.appendChild(img);
    tr.appendChild(tdImage);
  
    tbody.appendChild(tr);
  });
  
  table.appendChild(tbody);
  listBooksDiv.appendChild(table);