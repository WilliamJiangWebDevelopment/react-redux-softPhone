/**
 * William Changed from:
 * http://stackoverflow.com/questions/21285923/reactjs-two-components-communicating
 * parent-children communication
 */

import React from 'react';

const monthsLength = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const MONTHS_ARR = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

class DayNumber extends React.Component {
    render() {
        return (
            <option value={this.props.dayNum}>{this.props.dayNum}</option>
        );
    }
}

class DaysList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {numOfDays: 30}
    }

    handleMonthUpdate(newMonthix) {
        this.setState({numOfDays: monthsLength[newMonthix]});
        console.log("Setting days to " + monthsLength[newMonthix] + " month = " + newMonthix);

        this.forceUpdate();
    }

    handleDaySelection(evt) {
        this.props.dateHandler(evt.target.value);
    }

    componentDidMount() {
        this.props.readyCallback(this.handleMonthUpdate.bind(this));
    }

    render() {
        let dayNodes = [];
        for (let i = 1; i <= this.state.numOfDays; i++) {
            dayNodes = dayNodes.concat([<DayNumber dayNum={i} key={i}/>]);
        }
        return (
            <select id={this.props.id} onChange={this.handleDaySelection.bind(this)}>
                <option value="" disabled defaultValue>Day</option>
                {dayNodes}
            </select>
        );
    }
}

class Month extends React.Component {
    render() {
        return (
            <option value={this.props.monthIx}>{this.props.month}</option>
        );
    }
}

class MonthsList extends React.Component {
    constructor(props) {
        super(props);
    }

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
                <Month month={month} monthIx={monthIx} key={month}/>
            );
        });

        return (
            <select id={this.props.id} onChange={this.handleUpdate.bind(this)}>
                <option value="" disabled defaultValue>Month</option>
                {monthNodes}
            </select>
        );
    }
}

class SelectDate extends React.Component {

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
                <div className="row">
                    <div className="col-md-12 col-xs-12">
                        <h4 className="alert alert-info">1.Select cascade Month and Date</h4>
                    </div>
                </div>
                <div className="row alert alert-warning">
                    <div className="col-md-8 col-xs-8">
                        <div className="label label-warning">Month Picker:</div>
                    </div>
                    <div className="col-md-4 col-xs-4" style={{"verticalAlign": "middle"}}>
                        <MonthsList
                            data={MONTHS_ARR}
                            id="monthPicker"
                            dateHandler={this.handleMonthChange.bind(this)}/>
                    </div>
                </div>
                <div className="row alert alert-warning">
                    <div className="col-md-8 col-xs-8">
                        <div className="label label-warning">Day Picker:</div>
                    </div>
                    <div className="col-md-4 col-xs-4">
                        <DaysList
                            id="dayPicker"
                            dateHandler={this.handleDayChange.bind(this)}
                            readyCallback={this.daysReady.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }
}

/////////////////

class Filters extends React.Component {
    handleFilterChange() {
        let value = this.refs.filterInput.value;
        this.props.updateFilter(value);
    }

    render() {
        return <input type="text" ref="filterInput" onChange={this.handleFilterChange.bind(this)}
                      placeholder="Filter"/>;
    }
}

class List extends React.Component {
    render() {
        let content;
        if (this.props.items.length > 0) {
            const res = this.props.items.map(function (item) {
                return <li key={item}>{item}</li>;
            });
            content = <ul>{res}</ul>
        } else {
            content = <p>No items matching this filter</p>;
        }
        return (
            <div className="row">
                <div className="col-md-12 col-xs-12">
                    {content}
                </div>
            </div>
        );
    }
}

class ListContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listItems: ['Chicago', 'New York', 'Tokyo', 'London', 'San Francisco', 'Amsterdam', 'Hong Kong', 'Vancouver', 'Singapore', 'Los Angeles', 'Brooklyn', 'Queens', 'Surrey', 'Richmond'],
            nameFilter: ''
        };
    }

    handleFilterUpdate(filterValue) {
        this.setState({
            nameFilter: filterValue
        });
    }

    render() {
        let searched = this.state.nameFilter.toLocaleLowerCase();
        const displayedItems = this.state.listItems.filter(function (item) {
            return item.toLowerCase().indexOf(searched) !== -1;
        });

        return (
            <div>
                <h4 className="alert alert-info">2. Filter Results</h4>
                <Filters updateFilter={this.handleFilterUpdate.bind(this)}/>
                <List items={displayedItems}/>
            </div>
        );
    }
}

export default class DateCity extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <SelectDate />
                <hr />
                <ListContainer />
            </div>
        )
    }
}
