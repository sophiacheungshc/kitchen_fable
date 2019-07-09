import React from 'react';

class Reservation extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            user_id: this.props.currentUserId,
            rest_id: this.props.restId,
            party: '',
            date: '',
            time: '',
            occasion: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.userCheck = this.userCheck.bind(this);

        
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createRes(this.state).then(() => {
            // this.props.history.push(`/users/${this.props.currentUserId}`)
            this.props.history.push(`/`)
        });
    }


    render(){
        let userCheck;
        if (this.props.currentUserId === null) {
            userCheck = (
                <div className="reserve-no-submit">Please sign in to make a reservation</div>
            )
        } else {
            userCheck = (
                <button className="reserve-form-submit" onClick={this.handleSubmit}>Find a Table</button>
            )
        }
        return(
            <div className="reserve-form-container">
                <span className="reserve-form-head">Make a reservation</span>
                <label className="party-size">Party Size
                    <input type="text" onChange={this.update('party')}/>
                </label>
                <label>Date
                    <input type="text" onChange={this.update('date')}/>
                </label>
                <label>Time
                    <input type="text" onChange={this.update('time')}/>
                </label>
                <label>Occasion
                    <input type="text" onChange={this.update('occasion')}/>
                </label>
                {userCheck}
            </div>
        )
    }
}

export default Reservation;