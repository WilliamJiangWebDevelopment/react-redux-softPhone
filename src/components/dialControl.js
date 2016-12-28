import React from 'react';

export default class DialCtrl extends React.Component {
    constructor(props) {
        super(props);
    }

    callControlClick(evt) {
        const btn = evt.currentTarget;

        // return last className: mute, hold, redial
        let dialCtrl = btn.classList[btn.classList.length-1];

        // pass it to parent to update state.
        this.props.dialCtrlPhoneNumber(dialCtrl);
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-4 col-md-4" style={{paddingRight: '0px'}}>
                    <button type="button" className="btn callControl mute"
                            onClick={this.callControlClick.bind(this)}><span
                        className="glyphicon glyphicon-volume-off"
                        aria-hidden="true"></span>

                        <div>Mute</div>
                    </button>
                </div>
                <div className="col-xs-4 col-md-4" style={{paddingLeft:'0px', paddingRight:'0px'}}>
                    <button type="button" className="btn callControl hold"
                            onClick={this.callControlClick.bind(this)}><span
                        className="glyphicon glyphicon-pause"
                        aria-hidden="true"></span>

                        <div>Hold</div>
                    </button>
                </div>
                <div className="col-xs-4 col-md-4" style={{paddingLeft: '0px'}}>
                    <button type="button" className="btn callControl redial"
                            onClick={this.callControlClick.bind(this)}>
                        <span className="glyphicon glyphicon-refresh" aria-hidden="true"></span>

                        <div>Redial</div>
                    </button>
                </div>
            </div>
        )
    }
}