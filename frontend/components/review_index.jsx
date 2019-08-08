import React from 'react';

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (Object.keys(this.props.reviews).length === 0) { return null; }
        let overall = 0;
        let food = 0;
        let service = 0;
        let ambience = 0;
        const reviews = Object.values(this.props.reviews).map((review) => {
            overall += review.overall;
            food += review.food;
            service += review.service;
            ambience += review.ambience;
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
        
        overall /= Object.keys(this.props.reviews).length;
        food /= Object.keys(this.props.reviews).length;
        service /= Object.keys(this.props.reviews).length;
        ambience /= Object.keys(this.props.reviews).length;

        const style = {
            backgroundImage: 'url(https://kitchenfable-seeds.s3-us-west-1.amazonaws.com/' + Math.floor(overall) + 'star.png)',
        }

        return (
            <div className="reviews-container">
                <div className="reviews-details">
                    <h2>What {Object.keys(this.props.reviews).length} People Are Saying</h2>
                    <h4>Overall ratings and reviews</h4>
                    <h4 className="reviews-eaten">Reviews can only be made by diners who have eaten at this restaurant</h4>
                    <span className="review-stars-container">
                        <div className="review-stars overall" style={style}></div>
                        <h5> {overall}  based on recent ratings</h5>
                    </span>
                    <div className="avg-ratings">
                        <div className="avg-rating-col">
                            <span>{Math.round(10 * food )/ 10}</span>
                            <span>Food</span>
                        </div>
                        <div className="avg-rating-col">
                            <span>{Math.round(10 * service) / 10}</span>
                            <span>Service</span>
                        </div>
                        <div className="avg-rating-col">
                            <span>{Math.round(10 * ambience) / 10}</span>
                            <span>Ambience</span>
                        </div>
                    </div>
                </div>
                <ul className="review-ul">
                    {reviews}
                </ul>
            </div>
        );
    }
}

export default ReviewIndex;