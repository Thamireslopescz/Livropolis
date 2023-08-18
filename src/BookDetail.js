import React from 'react';
import './css/BookDetail.css';

function BookDetail({ book, onDelete, onEdit }) {
  return (
    <div className="book-detail">
      <h2>{book.title}</h2>
      <p>Autor: {book.author}</p>
      <p>Ano de Publicação: {book.year}</p>
      <p>Gênero: {book.genre}</p>
      <p>Descrição: {book.description}</p>
      <button onClick={onDelete}>Excluir</button>
      <button onClick={onEdit}>Editar</button>
    </div>
  );
}

export default BookDetail;
