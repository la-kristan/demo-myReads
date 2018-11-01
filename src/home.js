import React from 'react'
import {Link} from "react-router-dom"
import * as BooksAPI from "./BooksAPI"
import Bookshelf from "./bookshelf.js"

class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			books: []
		}
	}
  
  updateBooks = (book, shelf) => {
    debugger;
  	BooksAPI.update(book, shelf).then(
      function (){
      //copy list of books
      let listCopy = this.state.books.slice(0);
      //check to see if the book is in the list
      //if not, add it to the list
      let allIDs = listCopy.map(b => b.ID);
       if(allIDs.indexOf(book.ID) === -1) {
           listCopy.push(book);
           }
      //update the book with new shelf
        for(let i = 0; i <= allIDs.length; i++) {
        	if (book.ID === allIDs[i]) {
            	listCopy[i].shelf = shelf;
                //return;
            }
        }
        //update state with the copied list
        this.setState({books: listCopy});
      })}

	async componentDidMount() {
		this.setState({books: await BooksAPI.getAll()});
	}
	render() {
		return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf name="Currently Reading" books={this.state.books.filter(book => book.shelf === "currentlyReading")} onUpdateBooks={this.updateBooks} />
                <Bookshelf name="Want to Read" books={this.state.books.filter(book => book.shelf === "wantToRead")} onUpdateBooks={this.updateBooks} />
                <Bookshelf name="Read" books={this.state.books.filter(book => book.shelf === "read")} onUpdateBooks={this.updateBooks} />
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
