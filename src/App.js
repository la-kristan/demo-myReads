import React from 'react'
import './App.css'
import {Switch, Route} from "react-router-dom"
import Search from "./search.js"
import Home from "./home.js"
import * as BooksAPI from "./BooksAPI"


function updateShelf(book, shelf) {
    BooksAPI.update(book, shelf).then(() =>
      {book.shelf = shelf;
      this.setState({book: book})
      }
      )
    }


class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Switch>
          

          <Route exact path={"/"} render={(props) => <Home updateShelf={updateShelf()} />} />
          <Route exact path={"/search"} render={(props) => <Search updateShelf={updateShelf()} />} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
