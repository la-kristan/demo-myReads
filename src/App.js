import React from 'react'
import './App.css'
import {Switch, Route} from "react-router-dom"
import Search from "./search.js"
import Home from "./home.js"
import * as BooksAPI from "./BooksAPI"

class BooksApp extends React.Component {
  state = {
    books: []
  };
  
  //special thanks to Jason White (drunkenkismet [FEND] Project Coach) for his help with this function!
  updateBooks = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      //copy list of books
      let listCopy = this.state.books.slice(0);
      //check to see if the book is in the list
      //if not, add it to the list
      let allIDs = listCopy.map(b => b.id);
      if (allIDs.indexOf(book.id) === -1) {
        listCopy.push(book);
      }
      //update the book with new shelf
      for (let i = 0; i <= allIDs.length; i++) {
        if (book.id === allIDs[i]) {
          listCopy[i].shelf = shelf;
          //return;
        }
      }
      //update state with the copied list
      this.setState({ books: listCopy });
    });
  };

  async componentWillMount() {
    await BooksAPI.getAll().then(res => {
      this.setState({ books: res });
    });
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path={"/"}
            render={() => <Home onUpdateBooks={this.updateBooks} books={this.state.books}/>}
          />
          <Route
            exact
            path={"/search"}
            render={() => <Search onUpdateBooks={this.updateBooks} shelfBooks={this.state.books}/>}
          />
        </Switch>
      </div>
    );
  }
}

export default BooksApp
