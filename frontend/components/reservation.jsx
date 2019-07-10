import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';


class Reservation extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            user_id: this.props.currentUserId,
            rest_id: this.props.restId,
            party: '1',
            date: '1',
            time: '12:00 PM',
            occasion: 'none'
        }
        this.handleSubmit = this.handleSubmit.bind(this);

        
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

    letsParty() {
        let arr = [];

        for (let i = 2; i <= 20; i++) {
            arr.push(i);
        }

        return arr.map(num => (
            <option key={num} value={num}>
                { "For " + num }
            </option>
        ));

    }

    // componentDidMount(){
    //     const today = new Date();
    //     document.querySelector("#today").valueAsDate = today;
    //     document.getElementById("today").min = today;
    // }

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
                    <select className="res-input party" onChange={this.update('party')}>
                        <option value="For 1" defaultValue="selected">For 1</option>
                        {this.letsParty()}
                    </select>
                    <i className="fas fa-chevron-down iparty"></i>
                </label>
                <label className="label-date">Date
                    {/* <input className="input-date" id="today" type="date" min="2019-07-12" onChange={this.update('date')}/> */}
                    {/* <i className="fas fa-chevron-down idate"></i> */}
                    <DayPicker />
                </label>
                <label className="label-time">Time
                    <select className="res-input time" onChange={this.update('time')}>
                        <option value="12:00 PM" defaultValue="selected">12:00 PM</option>
                        {this.timeOptions()}
                    </select>
                    <i className="fas fa-chevron-down itime"></i>
                </label>
                <label>Occasion
                    <select className="res-input party" onChange={this.update('occasion')}>
                        <option value='none' defaultValue="selected">None</option>
                        <option value='birthday'>Birthday</option>
                        <option value='anniversary'>Anniversary</option>
                        <option value='promotion'>Promotion</option>
                        <option value='just hired!'>Just hired!</option>
                        <option value='treat yo self'>Treat yo'self</option>
                    </select>
                    <i className="fas fa-chevron-down iocc"></i>
                </label>
                {userCheck}
            </div>
        )
    }

    timeOptions(){
        let arr = [];

        for (let i = 1; i <= 11; i++) {
            arr.push(i);
        }

        return arr.map(num => (
            <option key={num} value={num}>
                {num + ":00 PM"}
            </option>
        ));
    }
}

export default Reservation;