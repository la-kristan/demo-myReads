import React from 'react'

class Book extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			shelf: this.props.book.shelf || "none"
		}
	}

  render() {
		return (
			<li>
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.props.book.imageLinks ? `url(${this.props.book.imageLinks.thumbnail})` : "" }}></div>
						<div className="book-shelf-changer">
							<select value={this.state.shelf} onChange={e => {this.props.onUpdateBooks(this.props.book, e.target.value); this.setState({shelf: e.target.value})}}>
								<option value="move" disabled>Move to...</option>
								<option value="currentlyReading">Currently Reading</option>
								<option value="wantToRead">Want to Read</option>
								<option value="read">Read</option>
								<option value="none">None</option>
							</select>
						</div>
					</div>
					<div className="book-title">{this.props.book.title ? this.props.book.title : "Untitled"}</div>
					<div className="book-authors">{this.props.book.authors ? this.props.book.authors[0] : "No author"}</div>
				</div>
			</li>
		);
	}
}

export default Book;
