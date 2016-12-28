import React from 'react';

import DialButton from './dialButton';
import DialPad from './dialPad';
import DialCtrl from './dialControl';
import status from '../constants/status'

export default class Dial extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: status
        };
    }

    /**
     * use Angular version to upgrade <input value=... /> when click the dialPad
     */
    _phoneNumber(number) {
        let phone = document.querySelector('input[type="tel"]');
        var val = phone.value;

        if (number || number === 0) {
            if (!val) {
                val = '+1 (';
            }

            if (val.match(/\((\d*)/)[1].length === 2) {
                val = val + number + ') ';
            }
            else {
                var t = val.match(/\)\s(\d*)/);
                if (t && t[1] && t[1].toString().length === 2) {
                    val = val + number + ' - ';
                }
                else {
                    val = val + number;
                }
            }

            phone.value = val;
        }
        return val;
    }

    _phoneCheck() {
        let val = this._phoneNumber();
        val = val.replace(/[\(\)\s\-\+]+/g, '').replace(/^1/, '');

        if (/\b\d{10}\b/.test(val)) {
            //TODO: $scope._phoneValid(true);
            this.setState({
                phoneStatus: this.props.status['ready']
            });
            this.state.dials.push(val);
            return true;
        }
        else {
            this.setState({
                phoneStatus: this.props.status['invalid']
            });
            //TODO: $scope._phoneValid(false);
            return false;
        }
    }

    dialInputPhoneNumber(no) {
        this._phoneNumber(no);
    }

    dialPadPhoneNumber(no) {
        this._phoneNumber(no);
    }

    dialCtrlPhoneNumber(ctrl) {
        switch (ctrl) {
            case 'mute':
            case 'hold':
                console.log(ctrl);
                break;
            case 'redial':
                console.log(ctrl);
        }
    }

    render() {
        return (
            <div className="container-fluid dialPanel">

                <DialButton
                    list={this.props.list}
                    status={this.state.status}
                    dialInputPhoneNumber={this.dialInputPhoneNumber.bind(this)}
                    ></DialButton>

                <DialPad status={this.state.status}
                         dialPadPhoneNumber={this.dialPadPhoneNumber.bind(this)}
                    ></DialPad>

                <DialCtrl status={this.state.status}
                          dialCtrlPhoneNumber={this.dialCtrlPhoneNumber.bind(this)}
                    ></DialCtrl>
            </div>
        );
    }
}