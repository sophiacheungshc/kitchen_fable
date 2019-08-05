import React from 'react';

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (Object.keys(this.props.reviews).length === 0) { return null; }
        const reviews = Object.values(this.props.reviews).map((review) => {
            const user = this.props.users[review.user_id];
            const res = this.props.reservations[review.res_id];
            const style = {
                backgroundImage: 'url(https://kitchenfable-seeds.s3-us-west-1.amazonaws.com/' + review.overall + 'star.png)',
            }
            
            return(
                <div className="review-index-item" key={review.id}>
                    <span className="review-left">
                        <div className="review-user-icon">{user.fname[0]}{user.lname[0]}</div>
                        <h5>{user.fname}{user.lname[0]}</h5>
                        <h5 className="review-location">{user.location}</h5>
                    </span>

                    <span className="review-right">
                        <span className="review-stars-container">
                            <div className="review-stars" style={style}></div>
                            <h5> ∙ Dined on {res.date}</h5>
                        </span>
                        <span className="review-ratings">
                            <h5>Overall </h5>
                            <h5 className="review-num-rating">{review.overall}</h5>
                            <h5> ∙ Food </h5>
                            <h5 className="review-num-rating">{review.food}</h5>
                            <h5> ∙ Service </h5>
                            <h5 className="review-num-rating">{review.service}</h5>
                            <h5> ∙ Ambience </h5>
                            <h5 className="review-num-rating">{review.ambience}</h5>
                        </span>
                        <h4 className="review-comment">{review.comment}</h4>
                    </span>
                </div>
        )}); 
        
        return (
            <ul className="review-ul">
                <h2>What {Object.keys(this.props.users).length} People Are Saying</h2>
                {reviews}
            </ul>
        );
    }
}

export default ReviewIndex;