import React from 'react';

import {timeCalculater, stopTimer, pauseTimer} from '../tools/timeDisplay';

export default class DialButton extends React.Component {

    constructor(props) {
        super(props);
        const { status, list } = this.props;

        // TODO: set dials initial values.
        this.state = {
            error: null,
            dials: list,
            phoneStatus: status['init']
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        return false;
    }

    renderError() {
        if (!this.state.error) {
            return null;
        }
        return <div style={{ color: 'red' }}>{this.state.error}</div>;
    }

    validateInput(phone) {
        //return phone && (/^[0-9\(\)\-\s]+$/.test(phone));
        return !isNaN(phone) && phone.length===10;
    }

    //document.querySelector(".section-name").classList.contains("section-filter")
    dialButtonClick() {
        var dialButton = document.querySelector('button.dialButton');

        if (dialButton.classList.contains('dialing')) {
            this.setState({
                phoneStatus: this.props.status['callEnd']
            });
            setTimeout(() => {
                dialButton.classList.remove('dialing');
                stopTimer();
                this.setState({
                    phoneStatus: this.props.status['ready']
                });
                this.refs.dialInput.value = '';
            }, 5000);
        }
        else {
            const dialInput = this.refs.dialInput;
            const phone = dialInput.value;

            if (this.validateInput(phone)) {
                this.state.dials.push(dialInput.value);
                this.setState({
                    error: null,
                    phoneStatus: this.props.status['connecting']
                });

                setTimeout(() => {

                    dialButton.classList.add('dialing');
                    timeCalculater();

                    this.setState({
                        'phoneStatus': this.props.status['connected']
                    });

                }, 2000);
            }
            else {
                this.setState({error: 'Not a validate Phone Number: ' + phone});
            }
        }
        return false;
    }

    handleKeyPress(evt) {
        evt.preventDefault();
        let no = String.fromCharCode(evt.charCode);
        if (isNaN(no)) {
            console.info('not a number: ', no, evt.charCode);
            return false;
        }
        this.props.dialInputPhoneNumber(no);
    }

    render() {
        return (
            <div className="row">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="col-xs-1 col-md-1"></div>
                    <div className="col-xs-10 col-md-10">
                        <div className="row">
                            <div className="form-group">
                                <input type="tel" className="form-control phoneNumber input-lg"
                                       placeholder="Enter number" ref="dialInput"
                                       onKeyPress={this.handleKeyPress.bind(this)}/>
                            </div>
                        </div>
                        <div className="row status">
                            <div className="col-xs-8 col-md-8">
                                <span>Status: <span className="phoneStatus">{this.state.phoneStatus}</span></span>
                            </div>
                            <div className="col-xs-4 col-md-4">
                                <span className="timer"></span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-2 col-md-2"></div>
                            <div className="col-xs-8 col-md-8">
                                <button type="button" className="btn dialButton"
                                        onClick={this.dialButtonClick.bind(this)}>
                                    <span className="glyphicon glyphicon-earphone" aria-hidden="true"></span>
                                </button>
                                {this.renderError()}
                            </div>
                            <div className="col-xs-2 col-md-2"></div>
                        </div>
                    </div>
                    <div className="col-xs-1 col-md-1"></div>
                </form>
            </div>
        )
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({'phoneStatus': this.props.status['ready']})
        }, 1000);

        // This also works:
        //setTimeout(this.setState.bind(this,
        // {'phoneStatus': this.props.status['ready']}), 1000);
    }
}