import React from 'react'
import {Link} from "react-router-dom"
import {getAll} from "./BooksAPI"
import Bookshelf from "./bookshelf.js"

class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			books: []
		}
	}

	async componentDidMount() {
		this.setState({books: await getAll()});
	}
	render() {
		return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf name="Currently Reading" books={this.state.books.filter(book => book.shelf === "currentlyReading")} updateShelf={this.updateShelf} />
                <Bookshelf name="Want to Read" books={this.state.books.filter(book => book.shelf === "wantToRead")} updateShelf={this.updateShelf} />
                <Bookshelf name="Read" books={this.state.books.filter(book => book.shelf === "read")} updateShelf={this.updateShelf} />
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