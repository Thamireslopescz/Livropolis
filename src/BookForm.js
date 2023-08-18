import React, { useState, useEffect } from 'react';
import './css/BookForm.css';

function BookForm({ book, onAdd, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    year: '',
    genre: '',
    description: '',
  });

  useEffect(() => {
    if (book) {
      setFormData(book);
    }
  }, [book]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (book) {
      onSave(formData);
    } else {
      onAdd(formData);
    }
    setFormData({
      title: '',
      author: '',
      year: '',
      genre: '',
      description: '',
    });
  };

  return (
    <div className="book-form">
      <h2>{book ? 'Editar Livro' : 'Adicionar Novo Livro'}</h2>
      <form onSubmit={handleSubmit}>
  <label>Título:</label>
  <input
    type="text"
    name="title"
    value={formData.title}
    onChange={handleChange}
  />
  
  <label>Autor:</label>
  <input
    type="text"
    name="author"
    value={formData.author}
    onChange={handleChange}
  />
  
  <label>Ano de Publicação:</label>
  <input
    type="text"
    name="year"
    value={formData.year}
    onChange={handleChange}
  />
  
  <label>Gênero:</label>
  <input
    type="text"
    name="genre"
    value={formData.genre}
    onChange={handleChange}
  />
  
  <label>Descrição:</label>
  <textarea
    name="description"
    value={formData.description}
    onChange={handleChange}
  />
  
  <div className="button-group">
    <button type="submit">
      {book ? 'Salvar Edição' : 'Adicionar Livro'}
    </button>
    {book && <button onClick={onCancel}>Cancelar</button>}
  </div>
</form>
    </div>
  );
}

export default BookForm;
