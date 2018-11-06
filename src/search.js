import React from 'react'
import {Link} from "react-router-dom"
import * as BooksAPI from "./BooksAPI"
import Book from "./book.js"

class Search extends React.Component {
    state = {
      books: [],
      query: ""
    };

	searchBooks = async function(query) {
    	let results = await BooksAPI.search(query);
        console.log(results);
    };
	render() {
		return (
			
          <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author" onChange={e => {this.setState({query: this.value}); this.searchBooks(e.value)}}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
{this.state.books.map(book => <Book key={book.id} book={book} onUpdateBooks={this.onUpdateBooks} />)}
</ol>
            </div>
          </div>
        
		);
	}
}

export default Search;
