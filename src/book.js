import React from 'react'
import * as BooksAPI from './BooksAPI'

class Book extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			book: props,
			shelf: this.state.book.shelf || "none"
		}
	}

	render() {
		return (
			<li>
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.state.book.imageLinks.thumbnail})` || "" }}></div>
						<div className="book-shelf-changer">
							<select value={this.state.book.shelf || "none"} onChange={e => this.updateShelf(this.state.book, e.target.value)}>
								<option value="move" disabled>Move to...</option>
								<option value="currentlyReading">Currently Reading</option>
								<option value="wantToRead">Want to Read</option>
								<option value="read">Read</option>
								<option value="none">None</option>
							</select>
						</div>
					</div>
					<div className="book-title">{this.state.book.title || "Untitled"}</div>
					<div className="book-authors">{this.state.book.authors[0] || "No author"}</div>
				</div>
			</li>
		);
	}
}

export default Book;