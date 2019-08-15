import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateReview } from '../actions/review_actions';
import { closeModal } from '../actions/modal_actions';


const mSP = ({ session, entities: { users, reservations } }) => {
    return ({
        currentUser: users[session.id],
        reservations: reservations
    });
};

const mDP = (dispatch) => ({
    updateReview: (review) => dispatch(updateReview(review)),
    closeModal: () => dispatch(closeModal())
});

class EditReviewForm extends React.Component {
    constructor(props) {
        super(props);
        const { id, comment, overall, food, service, ambience } = props.review;

        this.state = {
            id: id,
            comment: comment,
            overall: overall,
            food: food,
            service: service,
            ambience: ambience
        };
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    updateStars(type, rating) {
        this.setState({[type]: rating});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateReview(this.state).then(this.props.closeModal);
    }

    render(){
        return(
            <div className="review-form-container">
                <form onSubmit={this.handleSubmit} className="session-form-box">
                    <h3>{this.props.currentUser.fname}, how was your visit?</h3>
                    <h5>You dined here on {this.props.reservations[this.props.review.res_id].date}</h5>
                    <hr className="session-hr" />
                    {/* {this.renderErrors()} */}
                    <div className="session-form">
                        <label>Overall:
                            <span className="star-select">
                                <div onClick={() => this.updateStars("overall", 1)}></div>
                                <div onClick={() => this.updateStars("overall", 2)}></div>
                                <div onClick={() => this.updateStars("overall", 3)}></div>
                                <div onClick={() => this.updateStars("overall", 4)}></div>
                                <div onClick={() => this.updateStars("overall", 5)}></div>
                            </span>
                            <span className={`stars-container stars-${this.state.overall}`}>★★★★★</span>
                        </label>

                        <label>Food:
                            <span className="star-select">
                                <div onClick={() => this.updateStars("food", 1)}></div>
                                <div onClick={() => this.updateStars("food", 2)}></div>
                                <div onClick={() => this.updateStars("food", 3)}></div>
                                <div onClick={() => this.updateStars("food", 4)}></div>
                                <div onClick={() => this.updateStars("food", 5)}></div>
                            </span>
                            <span className={`stars-container stars-${this.state.food}`}>★★★★★</span>
                        </label>

                        <label>Service:
                            <span className="star-select">
                                <div onClick={() => this.updateStars("service", 1)}></div>
                                <div onClick={() => this.updateStars("service", 2)}></div>
                                <div onClick={() => this.updateStars("service", 3)}></div>
                                <div onClick={() => this.updateStars("service", 4)}></div>
                                <div onClick={() => this.updateStars("service", 5)}></div>
                            </span>
                            <span className={`stars-container stars-${this.state.service}`}>★★★★★</span>
                        </label>

                        <label>Ambience:
                            <span className="star-select">
                                <div onClick={() => this.updateStars("ambience", 1)}></div>
                                <div onClick={() => this.updateStars("ambience", 2)}></div>
                                <div onClick={() => this.updateStars("ambience", 3)}></div>
                                <div onClick={() => this.updateStars("ambience", 4)}></div>
                                <div onClick={() => this.updateStars("ambience", 5)}></div>
                            </span>
                            <span className={`stars-container stars-${this.state.ambience}`}>★★★★★</span>
                        </label>

                        <label>Comment:</label>
                            <textarea value={this.state.comment} onChange={this.update('comment')} />

                        <input className="submit-btn" type="submit" />

                    </div>

                </form>
            </div>
        )
    }
}

export default withRouter(connect(mSP, mDP)(EditReviewForm));
