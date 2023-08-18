import React, { useState } from 'react';
import BookDetail from './BookDetail';
import BookForm from './BookForm';
import './css/BookList.css';

const initialBooks = [
  {
    id: 1,
    title: 'O Livro Encantado',
    author: 'Magus Merlin',
    year: '1200',
    genre: 'Fantasia',
    description: 'Um livro mágico cheio de feitiços e aventuras.',
  },
  // Adicione mais livros fictícios aqui
];

function BookList() {
  const [books, setBooks] = useState(initialBooks);
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isBookAdded, setIsBookAdded] = useState(false);

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setIsEditing(false);
    setIsBookAdded(false);
  };

  const handleBookDelete = (bookId) => {
    const updatedBooks = books.filter((book) => book.id !== bookId);
    setBooks(updatedBooks);
    setSelectedBook(null);
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setIsBookAdded(false);
  };

  const handleBookSave = (updatedBook) => {
    const updatedBooks = books.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );
    setBooks(updatedBooks);
    setSelectedBook(updatedBook);
    setIsEditing(false);
    setIsBookAdded(false);
  };

  const handleAddBook = (newBook) => {
    const newId = books.length + 1;
    const updatedBooks = [...books, { ...newBook, id: newId }];
    setBooks(updatedBooks);
    setIsBookAdded(true);
    setIsAdding(false);
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="book-list">
      <div className="book-list-sidebar">
        <h2>Livros Mágicos</h2>
        <button onClick={() => setIsAdding(true)}>Adicionar Livro</button>
        <input
          type="text"
          placeholder="Pesquisar por título ou autor"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul>
          {filteredBooks.map((book) => (
            <li key={book.id} onClick={() => handleBookClick(book)}>
              {book.title} ({book.author})
            </li>
          ))}
        </ul>
      </div>
      <div className="book-list-content">
        {selectedBook ? (
          <BookDetail
            book={selectedBook}
            onDelete={() => handleBookDelete(selectedBook.id)}
            onEdit={handleEditClick}
          />
        ) : (
          <>
            {isAdding && (
              <BookForm
                onAdd={handleAddBook}
                onCancel={() => setIsAdding(false)}
              />
            )}
            {isBookAdded && (
              <div className="book-added">
                Livro adicionado com sucesso!
              </div>
            )}
          </>
        )}
        {isEditing && (
          <BookForm
            book={selectedBook}
            onSave={handleBookSave}
            onCancel={() => setIsEditing(false)}
          />
        )}
      </div>
    </div>
  );
}

export default BookList;
