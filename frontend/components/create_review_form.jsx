import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateReview, deleteReview, createReview } from '../actions/review_actions';
import { closeModal } from '../actions/modal_actions';

const mSP = ({ session, entities: { users, reservations } }) => {
    return ({
        currentUser: users[session.id],
        reservations: reservations
    });
};

const mDP = (dispatch) => ({
    updateReview: (review) => dispatch(updateReview(review)),
    createReview: (review) => dispatch(createReview(review)),
    deleteReview: (id) => dispatch(deleteReview(id)),
    closeModal: () => dispatch(closeModal())
});

class CreateReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            res_id: this.props.review.res_id,
            user_id: this.props.currentUser.id,
            comment: '',
            overall: 5,
            food: 5,
            service: 5,
            ambience: 5
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkComment = this.checkComment.bind(this);
    }


    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    updateStars(type, rating) {
        this.setState({ [type]: rating });
    }

    checkComment(){
        return (this.state.comment.length > 5 && this.state.comment.length < 500);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.checkComment()) {
            if (document.getElementsByClassName('erroring')[0]) {
                document.getElementsByClassName('erroring')[0].classList.remove('erroring');
            }
            this.props.createReview(this.state).then(this.props.closeModal);
        } else {
            document.getElementById('comment-error').classList.add('erroring');
        }
    }

    render() {
        return (
            <div className="review-form-container">
                <form onSubmit={this.handleSubmit} className="session-form-box">
                    <h3>{this.props.currentUser.fname}, how was your visit?</h3>
                    <h5>You dined here on {this.props.review.date}</h5>
                    <hr className="session-hr" />
                    <div className="session-form">
                        <div className="review-row-top">
                            <div className="review-col-left">
                                <label>Overall:</label>
                                <label>Food:</label>
                                <label>Service:</label>
                                <label>Ambience:</label>
                            </div>

                            <div className="review-col-right">
                                <span className="star-select">
                                    <div onMouseEnter={() => this.updateStars("overall", 1)}></div>
                                    <div onMouseEnter={() => this.updateStars("overall", 2)}></div>
                                    <div onMouseEnter={() => this.updateStars("overall", 3)}></div>
                                    <div onMouseEnter={() => this.updateStars("overall", 4)}></div>
                                    <div onMouseEnter={() => this.updateStars("overall", 5)}></div>
                                </span>
                                <span className={`stars-container stars-${this.state.overall}`}>★★★★★</span>

                                <span className="star-select">
                                    <div onMouseEnter={() => this.updateStars("food", 1)}></div>
                                    <div onMouseEnter={() => this.updateStars("food", 2)}></div>
                                    <div onMouseEnter={() => this.updateStars("food", 3)}></div>
                                    <div onMouseEnter={() => this.updateStars("food", 4)}></div>
                                    <div onMouseEnter={() => this.updateStars("food", 5)}></div>
                                </span>
                                <span className={`stars-container stars-${this.state.food}`}>★★★★★</span>
                                
                                <span className="star-select">
                                    <div onMouseEnter={() => this.updateStars("service", 1)}></div>
                                    <div onMouseEnter={() => this.updateStars("service", 2)}></div>
                                    <div onMouseEnter={() => this.updateStars("service", 3)}></div>
                                    <div onMouseEnter={() => this.updateStars("service", 4)}></div>
                                    <div onMouseEnter={() => this.updateStars("service", 5)}></div>
                                </span>
                                <span className={`stars-container stars-${this.state.service}`}>★★★★★</span>
                                
                                <span className="star-select">
                                    <div onMouseEnter={() => this.updateStars("ambience", 1)}></div>
                                    <div onMouseEnter={() => this.updateStars("ambience", 2)}></div>
                                    <div onMouseEnter={() => this.updateStars("ambience", 3)}></div>
                                    <div onMouseEnter={() => this.updateStars("ambience", 4)}></div>
                                    <div onMouseEnter={() => this.updateStars("ambience", 5)}></div>
                                </span>
                                <span className={`stars-container stars-${this.state.ambience}`}>★★★★★</span>
                            </div>
                        </div>

                        <label className="review-comment-label">Comment:</label>
                        <p id="comment-error">must be between 5 and 500 characters</p>
                        <textarea value={this.state.comment} onChange={this.update('comment')} />

                        <input className="submit-btn" type="submit" value="Create Review" />

                    </div>

                </form>
            </div>
        )
    }
}

export default connect(mSP, mDP)(CreateReviewForm);
