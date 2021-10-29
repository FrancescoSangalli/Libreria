import React, {useState, useEffect} from "react";
import axios from "axios";

function Book(props) {
  useEffect(() => {
    fetchData();
  }, []);

  const [book, setBook] = useState([]);
  const api_key = "AIzaSyDJO1NlxWu8dWzHHrWvR-QOwUdnSTJqTmY";
  const fetchData = async () => {
    const id = props.match.params.id;
    try {
      await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}?key=${api_key}`)
        .then(book => {
          setBook(book.data.volumeInfo);
        })
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="book container-fluid d-flex">
      <div className="paper mt-5">
        <h1 className="text-center mb-5 intro">Scheda Libro</h1>
        <div className="d-flex">
          {book.imageLinks ? <img src={book.imageLinks.thumbnail} alt={book.title} className="cover"/> : ""}
          <div className="info ms-5">
            <h1>{book.title}</h1>
            <p>Autore: {book.authors}</p>
            <p>Anno di pubblicazione: {book.publishedDate}</p>
            <p>Pagine: {book.printedPageCount}</p>
            <p>Pubblicato da: {book.publisher}</p>
          </div>
        </div>
        <p className="des mt-5"><span style={{fontWeight: "bold"}}>Descrizione:</span><br/>
          {book.description}
        </p>
        <a href={book.previewLink} target="_blank" rel="noreferrer" className="btn button2">Anteprima</a>
      </div>
    </div>
  )
}

export default Book;
