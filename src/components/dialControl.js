import React from 'react';

export default class DialCtrl extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-4 col-md-4" style={{paddingRight: '0px'}}>
                    <button type="button" className="btn callControl mute"
                            onClick={this.props.callControlClick.bind(this)}><span
                        className="glyphicon glyphicon-volume-off"
                        aria-hidden="true"></span>

                        <div>Mute</div>
                    </button>
                </div>
                <div className="col-xs-4 col-md-4" style={{paddingLeft:'0px', paddingRight:'0px'}}>
                    <button type="button" className="btn callControl hold"
                            onClick={this.props.callControlClick.bind(this)}><span
                        className="glyphicon glyphicon-pause"
                        aria-hidden="true"></span>

                        <div>Hold</div>
                    </button>
                </div>
                <div className="col-xs-4 col-md-4" style={{paddingLeft: '0px'}}>
                    <button type="button" className="btn callControl redial"
                            onClick={this.props.callControlClick.bind(this)}>
                        <span className="glyphicon glyphicon-refresh" aria-hidden="true"></span>

                        <div>Redial</div>
                    </button>
                </div>
            </div>
        )
    }
}