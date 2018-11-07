import React from 'react'
import {Link} from "react-router-dom"
import * as BooksAPI from "./BooksAPI"
import Book from "./book.js"

class Search extends React.Component {
    state = {
      books: [],
      //query: ""
    };

	searchBooks = async function(query) {
        if (query === "") {
          this.setState({books: []})
        }
      
        else {
      
        console.log(query);
    	let results = await BooksAPI.search(query);
          if (results.length) {
        this.setState({books: results});
          }
          else {
            this.setState({books: []})
          }
        }
    };
	render() {
		return (
			
          <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author" onChange={e => {this.searchBooks(e.target.value)}}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
{this.state.books.map(book => <Book key={book.id} book={book} onUpdateBooks={this.props.onUpdateBooks} />)}
</ol>
            </div>
          </div>
        
		);
	}
}

export default Search;
