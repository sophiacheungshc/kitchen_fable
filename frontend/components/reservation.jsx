import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { toast } from 'react-toastify';

class Reservation extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            user_id: this.props.currentUserId,
            rest_id: this.props.restId,
            party: '1',
            date: new Date(),
            time: '12:00 PM',
            occasion: 'none'
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDayChange = this.handleDayChange.bind(this);
        
    }

    handleDayChange(selectedDay) {
        this.setState({
            date: selectedDay
        });
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let result = Object.assign({}, this.state);
        result.date = this.state.date.toISOString().substring(0, 10);
        this.props.createRes(result).then(() => {
            //successful reservation toast message
            toast(`🗓 Hooray! Your table for ${this.state.party} has been successfully 
                reserved for ${this.state.date.toString().slice(0, 15)} 
                at ${this.state.time}.`, { className: 'toasty' });

            this.props.history.push(`/user`);
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

    render(){
        let userCheck;
        if (this.props.currentUserId === null) {
            userCheck = (
                <div className="reserve-no-submit">Please sign in to make a reservation</div>
            )
        } else {
            userCheck = (
                <button className="reserve-form-submit" onClick={this.handleSubmit}>Book a Table</button>
            )
        }

        const { date } = this.state;
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
                    <DayPickerInput
                        className="input-date"
                        value={date}
                        onDayChange={this.handleDayChange}
                        dayPickerProps={{
                            selectedDays: date,
                            todayButton: 'Today',
                            disabledDays: { before: new Date() }
                        }}
                        inputProps={{ style: { height: 40, width: 140, border: 'none', fontSize: 16 } }}
                    />
                    <i className="fas fa-chevron-down idate"></i>
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
            <option key={num} value={num + ":00 PM"}>
                {num + ":00 PM"}
            </option>
        ));
    }
}

export default Reservation;