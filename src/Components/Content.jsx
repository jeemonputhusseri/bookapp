import React, { Component } from 'react';
import axios from 'axios';
import BookCarousel from './BookCarousel';
import Banner from './Banner';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }

    static getDerrivedStatesFromProps() {

    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: './assets/books.json',
        }).then(response => {
            this.setState({
                books: response.data.results.books
            })
        })
    }

    render() {
        const { books } = this.state;
        return (
            <main>
                <Banner />
                <section className="content_section">
                    <h3 className="book_category_title">Hardcover Fiction</h3>
                    <BookCarousel books={books} />
                </section>
            </main>
        )
    }
}

export default Content;