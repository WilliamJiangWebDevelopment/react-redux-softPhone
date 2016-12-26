import React from 'react';
import { render } from 'react-doem';

const monthsLength = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const MONTHS_ARR = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export class DayNumber extends React.Component {
    render() {
        return (
            <option value={this.props.dayNum}>{this.props.dayNum}</option>
        );
    }
}

export class DaysList extends React.Component {
    constructor() {
        return {numOfDays: 30};
    }

    handleMonthUpdate(newMonthix) {
        this.state.numOfDays = monthsLength[newMonthix];
        console.log("Setting days to " + monthsLength[newMonthix] + " month = " + newMonthix);

        this.forceUpdate();
    }

    handleDaySelection(evt) {
        this.props.dateHandler(evt.target.value);
    }

    componentDidMount() {
        this.props.readyCallback(this.handleMonthUpdate)
    }

    render() {
        let dayNodes = [];
        for (let i = 1; i <= this.state.numOfDays; i++) {
            dayNodes = dayNodes.concat([<DayNumber dayNum={i}/>]);
        }
        return (
            <select id={this.props.id} onChange={this.handleDaySelection}>
                <option value="" disabled defaultValue>Day</option>
                {dayNodes}
            </select>
        );
    }
}

export class Month extends React.Component {
    render() {
        return (
            <option value={this.props.monthIx}>{this.props.month}</option>
        );
    }
}

export class MonthsList extends React.Component {

    handleUpdate(evt) {
        console.log("Local handler:" + this.props.id + " VAL= " + evt.target.value);
        this.props.dateHandler(evt.target.value);

        return false;
    }

    render() {
        let monthIx = 0;

        const monthNodes = this.props.data.map(function (month) {
            monthIx++;
            return (
                <Month month={month} monthIx={monthIx}/>
            );
        });

        return (
            <select id={this.props.id} onChange={this.handleUpdate}>
                <option value="" disabled defaultValue>Month</option>
                {monthNodes}
            </select>
        );
    }
}

export class LeftPanel extends React.Component {

    daysReady(refreshCallback) {
        console.log("Regisering days list");
        this.dayRefresh = refreshCallback;
    }

    handleMonthChange(monthIx) {
        console.log("New month");
        this.dayRefresh(monthIx);
    }

    handleDayChange(dayIx) {
        console.log("New DAY: " + dayIx);
    }

    render() {
        return (
            <div id="orderDetails">
                <DaysList id="dayPicker" dateHandler={this.handleDayChange} readyCallback={this.daysReady}/>
                <MonthsList data={MONTHS_ARR} id="monthPicker" dateHandler={this.handleMonthChange}/>
            </div>
        );
    }
}


render(
    <LeftPanel />,
    document.getElementById('leftPanel')
);

