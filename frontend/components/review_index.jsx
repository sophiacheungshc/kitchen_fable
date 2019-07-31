import React from 'react';

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (Object.keys(this.props.reviews).length === 0) { return null; }
        const reviews = Object.values(this.props.reviews).map((review) => (
            <div className="review-index-item">
                <h1>{review.comment}</h1>
                <h1>{this.props.users[review.user_id].fname}</h1>
            </div>
        ));
        
        return (
            <ul className="review-ul">
                {reviews}
            </ul>
        );
    }
}

export default ReviewIndex;