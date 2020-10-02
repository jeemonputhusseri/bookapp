import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import Book from './Book';
import BookInfo from './BookInfo';
import 'react-multi-carousel/lib/styles.css';


class BookCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        }
    }

    selectAction = (index) => {
        this.setState({
            selected: this.state.selected === index ? null : index
        }, () => {
            setTimeout(()=> {window.scrollTo({
                top: 1000,
                left: 0,
                behavior: 'smooth'
              })}, 300)
        })
    }
    

    render() {
        const { selected } = this.state;

        return (
            <>
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    centerMode={false}
                    className=""
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: { max: 3000, min: 1024 },
                            items: 6,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: { max: 464, min: 0 },
                            items: 4,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: { max: 1024, min: 464 },
                            items: 2,
                            partialVisibilityGutter: 30
                        }
                    }}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                >
                    {this.props.books.map((item, index) => <Book details={item} selected={selected} index={index} selectAction={this.selectAction} />)}
                </Carousel>
                <BookInfo descData={this.props.books[selected]} selectAction={this.selectAction}/>
            </>
        )
    }
}

export default BookCarousel