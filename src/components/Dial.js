import React from 'react';

import DialButton from './dialButton';
import DialPad from './dialPad';
import DialCtrl from './dialControl';

export default class Dial extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: this.props.status
        };
    }

    callControlClick() {
        console.log('callControlClick from Dial, not dialControl', this);
    }

    /**
     * use Angular version to upgrade <input value=... /> when click the dialPad
     */

    _phoneNumber(number, reset) {
        var phone = document.querySelector('input[type="tel"]');
        if (reset) {
            phone.value = '';
            return;
        }
        if (number && number.toString().length >= 10) {
            return phone.value = number;
        }

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
    };

    dialPadClick(evt) {
        evt.preventDefault();
        let no = parseInt(evt.currentTarget.textContent);
        this._phoneNumber(no);
    }

    render() {
        return (
            <div className="container-fluid dialPanel">

                <DialButton
                    list={this.props.list}
                    status={this.state.status}
                    ></DialButton>

                <DialPad status={this.state.status}
                         dialPadClick={this.dialPadClick.bind(this)}
                    ></DialPad>

                <DialCtrl status={this.state.status}
                          callControlClick={this.callControlClick.bind(this)}
                    ></DialCtrl>
            </div>
        );
    }
}