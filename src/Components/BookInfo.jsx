import React from 'react';
import close from '../assets/close.png'

export default function BookInfo(props) {
    const { author, book_image, description, publisher, title } = props.descData || {};
    return <div className={`book_description ${props.descData ? 'expand' : ''}`}>
        {
            <div className="bookinfo_wrapper">
                <div className="bookinfo_left">
                    <h4 className="bookinfo_name">{title}</h4>
                    <img src={book_image} className="bookinfo_image" alt="book"/>
                    <button className="bookinfo_button" aria-label="Add to favorites">Add to Favorites +</button>
                </div>
                <div className="bookinfo_right">
                    <div>
                        <h5 className="bookinfo_author">{author}</h5>
                        <p className="bookinfo_publisher">{publisher}</p>
                        <p className="bookinfo_description">{description}</p>
                    </div>
                        <button className="bookinfo_close" onClick={props.selectAction} aria-label="close"><img src={close} alt="close"/></button>
                </div>
            </div>
        }
    </div>
}