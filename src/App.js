import React from "react";
import SearchBook from "./components/SearchBook";
import Footer from "./components/Footer";
import Book from "./components/Book";
import book from "./img/book.png"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container-fluid container m-0 p-0">
        <nav className="navbar navbar-light sticky-top">
          <div className="container-fluid">
            <Link to="/">
              <p className="navbar-brand text-white">
                <img src={book} alt="si" width="30" height="24" className="d-inline-block align-text-center logo"/>
                Libreria
              </p>
            </Link>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={SearchBook}/>
          <Route exact path="/:id" component={Book}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
