import React from 'react'
import Book from "./book.js"

class Bookshelf extends React.Component {
	render() {
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{this.props.name}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{this.props.books.map(book => <Book key={book.id} book={book} onUpdateBooks={this.props.onUpdateBooks} />)}
					</ol>
				</div>
			</div>
		);
	}
}

export default Bookshelf;
