import React from 'react';

export default function Book(props) {
    const { book_image, rating, title, author, publisher } = props.details;
    const { selected, selectAction, index } = props;
    return (
        <div className={`book_wrapper ${selected === index ? 'book_selected' : null}`} style={{ backgroundImage: `linear-gradient(180deg, rgba(2,0,36,0) 48%, rgba(1,0,18,0.6741071428571428) 84%), url(${book_image})` }} onClick={() => { selectAction(index) }}>
            <span className="book_rating">{`${rating} out of 5`}</span>
            <div className="book_det_container">
                <p className="book_title">{title}</p>
                <p className="book_author">{author}</p>
                <p className="book_publisher">{publisher}</p>
            </div>
        </div>
    )
}