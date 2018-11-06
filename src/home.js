import React from 'react'
import {Link} from "react-router-dom"
import Bookshelf from "./bookshelf.js"

class Home extends React.Component {
  
  render() {
		return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf name="Currently Reading" books={this.props.books.filter(book => book.shelf === "currentlyReading")} onUpdateBooks={this.props.onUpdateBooks} />
                <Bookshelf name="Want to Read" books={this.props.books.filter(book => book.shelf === "wantToRead")} onUpdateBooks={this.props.onUpdateBooks} />
                <Bookshelf name="Read" books={this.props.books.filter(book => book.shelf === "read")} onUpdateBooks={this.props.onUpdateBooks} />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        );
	}
}

export default Home;
