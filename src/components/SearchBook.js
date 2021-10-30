import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function SearchBook() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const api_key = process.env.REACT_APP_API_KEY;

  function handleChange(e) {
    const book = e.target.value;
    setBook(book);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}}&key=${api_key}&maxResults=40`)
        .then(data => {
          setResult(data.data.items)
        })
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <section className="main">
      <h1 className="title">Libreria</h1>
      <form className="form d-grid" onSubmit={handleSubmit}>
        <label className="label">Titolo</label>
        <input
          className="input form-control"
          type="text"
          placeholder="Titolo del libro..."
          onChange={handleChange}
        />
        <button className="button btn" type="submit">Cerca</button>
      </form>

      {result.map(book => (
        <div className="card" key={book.id}>
          {book.volumeInfo.imageLinks ? <img src={book.volumeInfo.imageLinks.thumbnail} className="card-img-top" alt={book.volumeInfo.title}/> : ""}
          <div className="card-body">
            <h5 className="card-title">{book.volumeInfo.title}</h5>
            <p className="card-text">{book.volumeInfo.authors}</p>
            <Link to={`/${book.id}`}>
              <button className="button2 btn">Info</button>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}

export default SearchBook;
